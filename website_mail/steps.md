# AUKTAVE Outreach Console — Setup Guide

## File Structure

```
your-deployment-folder/
├── index.html                          ← Login page (provided)
├── auktave-secure-[HASH].html          ← Dashboard (you create this from template)
├── style.css                           ← Shared styles (provided)
├── app.js                              ← Application logic (provided)
├── steps.md                            ← This file
└── assets/
    └── logos/
        └── logo.png                    ← AUKTAVE logo (you provide)
    └── brand/
        ├── banner.png
        └── brand-kit.zip
    └── docs/
        ├── sponsorship-brochure.pdf
        ├── event-schedule.pdf
        └── media-kit.pdf
    └── pitch/
        ├── sponsorship-deck.pdf
        └── partner-deck.pdf
```

---

## STEP 1 — Choose Your Password

Pick a strong password that the core committee will use to access the console.
This is not stored anywhere — it only exists in the heads of authorised members.

**Example:** `AuktaveOutreach@2025` (use something memorable but not obvious)

---

## STEP 2 — Generate the SHA-256 Hash

You need the first 16 characters of the SHA-256 hash of your password.

### Method A — Browser Console (Recommended)

1. Open any browser (Chrome, Firefox, Edge)
2. Press `F12` → go to the **Console** tab
3. Paste and run this code (replace the password):

```javascript
async function getHash(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  console.log('Full hash:', hashHex);
  console.log('First 16 chars (your hash):', hashHex.slice(0, 16));
  return hashHex.slice(0, 16);
}

getHash('auktave@2026');
```

4. Copy the "First 16 chars" value from the console output.

**Example output:** `a3f9c2d18b7e4051`

### Method B — Online SHA-256 Tool

1. Go to https://emn178.github.io/online-tools/sha256.html
2. Enter your password in the input field
3. Copy the first 16 characters of the output hash

---

## STEP 3 — Rename the Dashboard File

1. Take the hash you generated (16 characters, e.g., `a3f9c2d18b7e4051`)
2. Rename `dashboard-template.html` to `auktave-secure-a99320717a03c349.html`
   (replace `a3f9c2d18b7e4051` with your actual hash)

---

## STEP 4 — Set the PAGE_HASH in the Dashboard File

1. Open your renamed `auktave-secure-[HASH].html` in a text editor
2. Find this line near the top (inside the `<script>` tag in `<head>`):

```javascript
window.PAGE_HASH = 'REPLACE_WITH_YOUR_HASH';
```

3. Replace `REPLACE_WITH_YOUR_HASH` with your actual 16-character hash:

```javascript
window.PAGE_HASH = 'a3f9c2d18b7e4051';
```

4. Save the file.

---

## STEP 5 — Set Up Google Apps Script (Email Sending)

The console sends emails via a Google Apps Script web app endpoint.

### 5a — Create the Script

1. Go to https://script.google.com
2. Click **+ New Project**
3. Name it `AUKTAVE Mail Relay`
4. Delete the default code and paste the following:

```javascript
function doPost(e) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Content-Type': 'application/json'
  };

  try {
    var payload = JSON.parse(e.postData.contents);
    var to = payload.to;
    var cc = payload.cc || '';
    var bcc = payload.bcc || '';
    var subject = payload.subject;
    var htmlBody = payload.body;
    var attachmentData = payload.attachments || [];

    if (!to || !subject || !htmlBody) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: 'Missing required fields: to, subject, body' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Build attachments array
    var attachments = attachmentData.map(function(att) {
      var decoded = Utilities.base64Decode(att.base64);
      var blob = Utilities.newBlob(decoded, att.mimeType, att.name);
      return blob;
    });

    // Build options
    var options = { htmlBody: htmlBody };
    if (cc) options.cc = cc;
    if (bcc) options.bcc = bcc;
    if (attachments.length > 0) options.attachments = attachments;

    // Send the email (uses your Google account's Gmail)
    GmailApp.sendEmail(to, subject, '', options);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success', message: 'Email sent successfully.' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS preflight
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'AUKTAVE Mail Relay is running.' })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

### 5b — Deploy the Script

1. Click **Deploy** → **New deployment**
2. Under "Select type", choose **Web app**
3. Set these options:
   - **Description:** AUKTAVE Mail Relay
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**
5. Authorize the app when prompted (click "Review permissions" → allow Gmail access)
6. Copy the **Web app URL** that appears — it looks like:
   `https://script.google.com/macros/s/AKfycbXXX.../exec`

### 5c — Set the Endpoint in app.js

1. Open `app.js` in a text editor
2. Find this line near the top:

```javascript
const GAS_ENDPOINT = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
```

3. Replace with your deployed URL:

```javascript
const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbXXX.../exec';
```

4. Save the file.

---

## STEP 6 — Add Your Logo

1. Place your AUKTAVE logo image at `assets/logos/logo.png`
2. Ensure it has a transparent background (PNG format preferred)
3. Recommended size: at least 200×200 pixels

---

## STEP 7 — Update the Asset Registry (Optional)

In `app.js`, near the top, there is a `const ASSETS = [...]` array.
Edit the items inside to match your actual file names and paths.

Each asset entry looks like:
```javascript
{
  name: 'Sponsorship Brochure',
  desc: 'Official sponsorship package with tiers and benefits.',
  path: 'assets/docs/sponsorship-brochure.pdf',
  type: 'download',  // or 'link' for external URLs
  icon: '📄',
}
```

Add files to the `assets/` folder and update this registry to match.

---

## STEP 8 — Deploy

This is a fully static site — no server required.

### Option A — GitHub Pages (Free, Recommended)

1. Create a new **private** repository on GitHub (keep it private!)
2. Upload all your files (maintaining folder structure)
3. Go to **Settings** → **Pages**
4. Set Source to `Deploy from a branch` → `main` → `/ (root)`
5. Your site will be live at `https://[username].github.io/[repo-name]/`

### Option B — Netlify

1. Go to https://netlify.com → Sign in
2. Drag and drop your project folder onto the Netlify dashboard
3. Your site will be live at a Netlify URL instantly

### Option C — Any Static Host

Upload all files to any static hosting service:
- Vercel, Cloudflare Pages, Render, AWS S3 + CloudFront, etc.
- No build step required — just plain HTML/CSS/JS files

---

## STEP 9 — Test the Full Flow

1. Open `index.html` in a browser
2. Enter your password and click **AUTHENTICATE**
3. You should be redirected to the dashboard
4. Test sending a simple email (without attachments first)
5. Check the recipient's inbox to confirm delivery

---

## Security Notes

- Keep the repository **private** — the dashboard filename contains the hash
- Never share the password in plain text — communicate it in person or via end-to-end encrypted channels
- The hash prevents brute-force access since the filename must match exactly
- The session expires when the browser tab/window is closed (sessionStorage)
- Rotating the password requires: new hash → new filename → update PAGE_HASH → redeploy

---

## Troubleshooting

| Problem | Likely Cause | Fix |
|---|---|---|
| Login shows "INVALID CREDENTIAL" | Wrong password or hash mismatch | Regenerate hash and confirm filename matches |
| Dashboard redirects back to login | SESSION_HASH missing | Login again from index.html |
| Emails not sending | GAS_ENDPOINT not set or wrong URL | Check app.js and redeploy GAS |
| CORS errors in console | GAS not deployed as "Anyone" | Redeploy GAS with correct access settings |
| Attachments rejected | File exceeds 2 MB limit | Compress files before attaching |
| Logo not showing | Wrong path | Confirm file is at `assets/logos/logo.png` |

---

## Contact

For technical support with this console, contact the dev team:

- **WhatsApp:** +91 82402 53854
- **Email:** info.auktave@gmail.com
