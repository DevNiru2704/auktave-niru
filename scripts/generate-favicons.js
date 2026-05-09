const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
let pngToIco = require('png-to-ico');
if (pngToIco && typeof pngToIco.default === 'function') pngToIco = pngToIco.default;

const repoRoot = path.resolve(__dirname, '..');
const input = path.join(repoRoot, 'public', 'images', 'seo', 'auktave-favicon.png');
const outDir = path.join(repoRoot, 'public', 'favicons');

if (!fs.existsSync(input)) {
    console.error('Source favicon not found at', input);
    process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 512];
console.log('Generating PNGs:', sizes.join(', '));
for (const s of sizes) {
    const out = path.join(outDir, `icon-${s}x${s}.png`);
    const vf = `scale=${s}:${s}:force_original_aspect_ratio=decrease,pad=${s}:${s}:(ow-iw)/2:(oh-ih)/2`;
    const cmd = `ffmpeg -y -i "${input}" -vf "${vf}" -vframes 1 "${out}"`;
    try {
        execSync(cmd, { stdio: 'ignore' });
    } catch (e) {
        console.error('ffmpeg failed for size', s, e.message);
        process.exit(1);
    }
}

// Create favicon.ico from a subset of sizes (common ico sizes)
const icoSizes = [32, 16, 48, 64, 128, 256];
const icoInputs = icoSizes.map((s) => path.join(outDir, `icon-${s}x${s}.png`));
console.log('Creating favicon.ico with 32x32 prioritized');
pngToIco(icoInputs)
    .then((buf) => {
        const icoPath = path.join(outDir, 'favicon.ico');
        fs.writeFileSync(icoPath, buf);
        // Also write root-level favicon.ico (recommended for crawlers)
        const rootIcoPath = path.join(repoRoot, 'public', 'favicon.ico');
        fs.writeFileSync(rootIcoPath, buf);
        console.log('favicon.ico written to', icoPath, 'and', rootIcoPath);
        // Create manifest
        const manifest = {
            name: 'AUKTAVE 2K26',
            short_name: 'AUKTAVE',
            icons: [
                { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
                { src: '/favicons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
                { src: '/favicons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
            ],
            start_url: '/',
            display: 'standalone',
            background_color: '#050505',
            theme_color: '#050505'
        };
        fs.writeFileSync(path.join(repoRoot, 'public', 'manifest.json'), JSON.stringify(manifest, null, 2));
        // Copy apple-touch-icon (180x180)
        const appleSrc = path.join(outDir, 'icon-180x180.png');
        const appleDst = path.join(repoRoot, 'public', 'apple-touch-icon.png');
        fs.copyFileSync(appleSrc, appleDst);
        console.log('manifest.json and apple-touch-icon.png created');
        // Ensure a 32x32 PNG is available in public root for easy reference
        const png32 = path.join(outDir, 'icon-32x32.png');
        const rootPng32 = path.join(repoRoot, 'public', 'favicon-32x32.png');
        try {
            fs.copyFileSync(png32, rootPng32);
            console.log('copied', png32, 'to', rootPng32);
        } catch (e) {
            console.warn('failed to copy 32x32 png to public root:', e.message || e);
        }
        // Create a 32x32-only favicon.ico optimized for crawlers and Next.js app root
        const ico32DestApp = path.join(repoRoot, 'src', 'app', 'favicon.ico');
        try {
            const appDir = path.join(repoRoot, 'src', 'app');
            if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });
            pngToIco([png32])
                .then((buf32) => {
                    fs.writeFileSync(ico32DestApp, buf32);
                    console.log('32x32-only favicon written to', ico32DestApp);
                })
                .catch((err32) => {
                    console.error('failed creating 32x32-only ico:', err32.message || err32);
                });
        } catch (e) {
            console.warn('failed to create src/app favicon:', e.message || e);
        }
    })
    .catch((err) => {
        console.error('png-to-ico failed:', err.message || err);
        process.exit(1);
    });
