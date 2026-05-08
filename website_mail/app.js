/* ============================================================
   AUKTAVE OUTREACH CONSOLE — app.js
   Modular, Production-Quality Frontend Logic
   ============================================================ */

/* ─── ASSET REGISTRY ────────────────────────────────────────
   Edit this object to add / remove / update assets.
   Each item requires: name, desc, path (file path or URL), type ('download' | 'link'), icon (emoji)
   ──────────────────────────────────────────────────────────── */
const ASSETS = [
  {
    category: 'Brand Assets',
    iconClass: 'brand',
    items: [
      {
        name: 'AUKTAVE Logo (PNG)',
        desc: 'Primary logo for digital and print use. Transparent background.',
        path: 'assets/logos/logo.png',
        type: 'download',
        icon: '🎨',
      },
      {
        name: 'Event Poster',
        desc: 'Official AUKTAVE event poster for social and print.',
        path: 'assets/brand/poster.jpg',
        type: 'download',
        icon: '🖼',
      },
    ],
  },
  {
    category: 'Documents',
    iconClass: 'doc',
    items: [
      {
        name: 'Sponsorship Brochure',
        desc: 'Official sponsorship package with tiers and benefits.',
        path: 'assets/docs/Sponsorship_Brochure_AUKTAVE_2026.pdf',
        type: 'download',
        icon: '📄',
      },
      {
        name: 'Sponsorship Brochure - Compressed',
        desc: 'Official sponsorship package with tiers and benefits. Use this file for mailing.',
        path: 'assets/docs/Sponsorship_Brochure_AUKTAVE_2026_2.pdf',
        type: 'download',
        icon: '📄',
      },
      {
        name: 'Event Schedule',
        desc: 'Complete AUKTAVE event timeline and schedule.',
        path: 'assets/docs/event-schedule.pdf',
        type: 'download',
        icon: '📅',
      },
    ],
  },
  {
    category: 'Pitch Materials',
    iconClass: 'pitch',
    items: [
      // {
      //   name: 'Sponsorship Deck',
      //   desc: 'Main pitch deck for corporate sponsors and partners.',
      //   path: 'assets/pitch/sponsorship-deck.pdf',
      //   type: 'download',
      //   icon: '📊',
      // },
    ],
  },
  {
    category: 'Links',
    iconClass: 'link',
    items: [
      // {
      //   name: 'Official Website',
      //   desc: 'AUKTAVE official website with event details.',
      //   path: 'https://www.auktave.in',
      //   type: 'link',
      //   icon: '🌐',
      // },
      // {
      //   name: 'Instagram',
      //   desc: 'Official AUKTAVE Instagram page.',
      //   path: 'https://instagram.com/auktave',
      //   type: 'link',
      //   icon: '📸',
      // },
      // {
      //   name: 'LinkedIn',
      //   desc: 'Official AUKTAVE LinkedIn page.',
      //   path: 'https://linkedin.com/company/auktave',
      //   type: 'link',
      //   icon: '💼',
      // },
    ],
  },
];

/* ─── CONFIG ─────────────────────────────────────────────── */
const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyCu_0uA8iTztSYBxiGCkBarJjol36apNRTtUkrFGy89tLlQWY5nROOFIUpSknar12p/exec'; // ← Replace with your deployed GAS URL
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const MAX_TOTAL_SIZE = 5 * 1024 * 1024; // 5 MB

/* ─── STATE ──────────────────────────────────────────────── */
let attachments = []; // { name, mimeType, base64, size }

/* ══════════════════════════════════════════════════════════
   AUTH — LOGIN PAGE
══════════════════════════════════════════════════════════ */

/**
 * Hashes password with SHA-256 via Web Crypto API,
 * takes first 16 chars of hex digest, constructs dashboard filename,
 * checks if it exists via HEAD request, and redirects on success.
 */
async function handleLogin() {
  const input = document.getElementById('password');
  const btn = document.getElementById('loginBtn');
  const status = document.getElementById('loginStatus');
  const btnText = btn.querySelector('.btn-text');
  const btnLoader = btn.querySelector('.btn-loader');

  const password = input.value.trim();

  // Validate input
  if (!password) {
    showLoginStatus('error', 'ACCESS CREDENTIAL REQUIRED');
    input.focus();
    return;
  }

  // Disable button, show loader
  btn.disabled = true;
  btnText.style.display = 'none';
  btnLoader.style.display = 'flex';
  status.className = 'login-status';
  status.textContent = '';

  try {
    // SHA-256 hash via Web Crypto
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Convert to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // First 16 characters
    const hashSlice = hashHex.slice(0, 16);

    // Construct target filename
    const targetFile = `auktave-secure-${hashSlice}.html`;

    // Check existence via HEAD request
    const res = await fetch(targetFile, { method: 'HEAD' });

    if (res.ok) {
      // Store hash in sessionStorage BEFORE redirect
      sessionStorage.setItem('auktave_hash', hashSlice);
      showLoginStatus('success', 'ACCESS GRANTED — REDIRECTING...');

      setTimeout(() => {
        window.location.href = targetFile;
      }, 600);
    } else {
      showLoginStatus('error', 'INVALID CREDENTIAL — ACCESS DENIED');
      input.value = '';
      input.focus();
      resetLoginBtn();
    }
  } catch (err) {
    console.error('[AUKTAVE] Login error:', err);
    showLoginStatus('error', 'SYSTEM ERROR — TRY AGAIN');
    resetLoginBtn();
  }
}

function showLoginStatus(type, message) {
  const status = document.getElementById('loginStatus');
  if (!status) return;
  status.className = `login-status ${type}`;
  status.textContent = message;
}

function resetLoginBtn() {
  const btn = document.getElementById('loginBtn');
  if (!btn) return;
  btn.disabled = false;
  btn.querySelector('.btn-text').style.display = '';
  btn.querySelector('.btn-loader').style.display = 'none';
}


/* ══════════════════════════════════════════════════════════
   AUTH — DASHBOARD PAGE
══════════════════════════════════════════════════════════ */

/**
 * Verifies sessionStorage contains the correct hash matching PAGE_HASH.
 * Redirects to login if auth fails.
 * Must be called on DOMContentLoaded of the dashboard page.
 */
function checkAuth() {
  const stored = sessionStorage.getItem('auktave_hash');
  if (!stored || (typeof window.PAGE_HASH !== 'undefined' && stored !== window.PAGE_HASH)) {
    sessionStorage.removeItem('auktave_hash');
    window.location.replace('index.html');
    return false;
  }
  return true;
}

function logout() {
  sessionStorage.removeItem('auktave_hash');
  window.location.replace('index.html');
}


/* ══════════════════════════════════════════════════════════
   DASHBOARD — SETUP
══════════════════════════════════════════════════════════ */

/**
 * Initializes all dashboard functionality.
 * Called once after auth check passes on DOMContentLoaded.
 */
function setupDashboard() {
  // Sidebar navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  // Default to mail panel
  switchTab('mail');

  // Setup mail panel interactions
  setupMailPanel();

  // Render assets
  renderAssets();

  // Check GAS endpoint
  if (GAS_ENDPOINT === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
    console.warn('[AUKTAVE] GAS_ENDPOINT not configured. Set it in app.js.');
  }
}

/**
 * Switches between sidebar tabs (mail / assets).
 */
function switchTab(tab) {
  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.tab === tab);
  });

  // Show/hide panels
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `panel-${tab}`);
  });
}


/* ══════════════════════════════════════════════════════════
   MAIL PANEL — SETUP
══════════════════════════════════════════════════════════ */

function setupMailPanel() {
  const editor = document.getElementById('mailEditor');
  const placeholder = document.getElementById('editorPlaceholder');
  const fileInput = document.getElementById('fileInput');
  const attachZone = document.getElementById('attachZone');

  if (!editor) return;

  // Editor placeholder toggle
  function updatePlaceholder() {
    const isEmpty = !editor.textContent.trim() && !editor.querySelector('img');
    if (placeholder) placeholder.style.opacity = isEmpty ? '1' : '0';
  }
  editor.addEventListener('input', updatePlaceholder);
  editor.addEventListener('focus', updatePlaceholder);
  editor.addEventListener('blur', updatePlaceholder);
  updatePlaceholder();

  // CC / BCC toggles
  document.getElementById('toggleCC')?.addEventListener('click', function () {
    toggleCC();
    this.classList.toggle('active');
  });
  document.getElementById('toggleBCC')?.addEventListener('click', function () {
    toggleBCC();
    this.classList.toggle('active');
  });

  // File input
  fileInput?.addEventListener('change', (e) => {
    if (e.target.files?.length) {
      handleAttachments(Array.from(e.target.files));
      e.target.value = ''; // reset so same file can be re-selected
    }
  });

  // Drag and drop on attach zone
  if (attachZone) {
    attachZone.addEventListener('click', () => fileInput?.click());

    attachZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      attachZone.classList.add('dragover');
    });
    attachZone.addEventListener('dragleave', () => attachZone.classList.remove('dragover'));
    attachZone.addEventListener('drop', (e) => {
      e.preventDefault();
      attachZone.classList.remove('dragover');
      if (e.dataTransfer.files?.length) {
        handleAttachments(Array.from(e.dataTransfer.files));
      }
    });
  }

  // Editor toolbar
  document.querySelectorAll('[data-cmd]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      const val = btn.dataset.val;
      editor.focus();

      if (cmd === 'insertLink') {
        const url = prompt('Enter URL:');
        if (url) document.execCommand('createLink', false, url.startsWith('http') ? url : 'https://' + url);
      } else if (cmd === 'insertImage') {
        document.getElementById('editorImgInput')?.click();
      } else {
        document.execCommand(cmd, false, val || null);
      }
      updatePlaceholder();
    });
  });

  // Image insertion from toolbar
  document.getElementById('editorImgInput')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      editor.focus();
      document.execCommand('insertImage', false, ev.target.result);
      updatePlaceholder();
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  });
}

function toggleCC() {
  const row = document.getElementById('ccRow');
  if (!row) return;
  row.classList.toggle('hidden');
  if (!row.classList.contains('hidden')) row.querySelector('input')?.focus();
}

function toggleBCC() {
  const row = document.getElementById('bccRow');
  if (!row) return;
  row.classList.toggle('hidden');
  if (!row.classList.contains('hidden')) row.querySelector('input')?.focus();
}


/* ══════════════════════════════════════════════════════════
   ATTACHMENT SYSTEM
══════════════════════════════════════════════════════════ */

/**
 * Processes an array of File objects.
 * Validates sizes, converts to base64, and updates chip UI.
 * @param {File[]} files
 */
function handleAttachments(files) {
  for (const file of files) {
    // Per-file size check
    if (file.size > MAX_FILE_SIZE) {
      alert(`"${file.name}" exceeds the 2 MB per-file limit (${formatFileSize(file.size)}). Please compress or split the file.`);
      continue;
    }

    // Total size check
    const currentTotal = attachments.reduce((sum, a) => sum + a.size, 0);
    if (currentTotal + file.size > MAX_TOTAL_SIZE) {
      alert(`Adding "${file.name}" would exceed the 5 MB total attachment limit. Please remove existing attachments first.`);
      continue;
    }

    // Add placeholder entry while reading
    const index = attachments.length;
    attachments.push({ name: file.name, mimeType: file.type, base64: null, size: file.size, uploading: true });
    renderChips();

    // Read file as base64
    const reader = new FileReader();
    reader.onload = (e) => {
      // Strip the data URI prefix, keep only base64 data
      const result = e.target.result;
      const base64 = result.includes(',') ? result.split(',')[1] : result;

      // Find attachment by name+size (index may have shifted)
      const idx = attachments.findIndex(a => a.name === file.name && a.size === file.size && a.uploading);
      if (idx !== -1) {
        attachments[idx].base64 = base64;
        attachments[idx].uploading = false;
      }
      renderChips();
    };
    reader.onerror = () => {
      const idx = attachments.findIndex(a => a.name === file.name && a.size === file.size && a.uploading);
      if (idx !== -1) attachments.splice(idx, 1);
      renderChips();
      alert(`Failed to read "${file.name}". Please try again.`);
    };
    reader.readAsDataURL(file);
  }
}

/**
 * Re-renders attachment chips from current attachments array.
 */
function renderChips() {
  const container = document.getElementById('chipsContainer');
  if (!container) return;

  if (attachments.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = attachments.map((att, i) => {
    const statusClass = att.uploading ? 'uploading' : 'ready';
    const icon = getFileIcon(att.mimeType);
    const truncated = att.name.length > 26 ? att.name.slice(0, 23) + '...' : att.name;

    return `
      <div class="chip ${statusClass}" data-index="${i}">
        <span class="chip-icon">${icon}</span>
        <div class="chip-info">
          <span class="chip-name" title="${escapeHTML(att.name)}">${escapeHTML(truncated)}</span>
          <span class="chip-size">${formatFileSize(att.size)} · ${att.uploading ? 'reading...' : 'ready'}</span>
        </div>
        <span class="chip-status"></span>
        <button class="chip-remove" onclick="removeAttachment(${i})" title="Remove">&times;</button>
      </div>
    `;
  }).join('');

  updateAttachSummary();
}

/**
 * Removes an attachment by index using splice.
 * @param {number} index
 */
function removeAttachment(index) {
  if (index < 0 || index >= attachments.length) return;
  attachments.splice(index, 1);
  renderChips();
}

function updateAttachSummary() {
  const el = document.getElementById('attachSummary');
  if (!el) return;
  if (attachments.length === 0) {
    el.textContent = 'No attachments';
    return;
  }
  const total = attachments.reduce((sum, a) => sum + a.size, 0);
  el.textContent = `${attachments.length} file${attachments.length > 1 ? 's' : ''} · ${formatFileSize(total)} / 5 MB`;
}


/* ══════════════════════════════════════════════════════════
   EMAIL SENDING
══════════════════════════════════════════════════════════ */

/**
 * Validates fields, builds payload, and sends via GAS endpoint.
 */
async function sendMail() {
  const toEl = document.getElementById('mailTo');
  const ccEl = document.getElementById('mailCC');
  const bccEl = document.getElementById('mailBCC');
  const subjectEl = document.getElementById('mailSubject');
  const editor = document.getElementById('mailEditor');
  const sendBtn = document.getElementById('sendBtn');

  if (!toEl || !subjectEl || !editor || !sendBtn) return;

  const to = toEl.value.trim();
  const cc = ccEl?.value.trim() || '';
  const bcc = bccEl?.value.trim() || '';
  const subject = subjectEl.value.trim();
  const bodyHTML = editor.innerHTML;

  // ─ Validate
  if (!to) {
    showMailStatus('error', 'Recipient (To) is required.');
    toEl.focus();
    return;
  }
  if (!subject) {
    showMailStatus('error', 'Subject is required.');
    subjectEl.focus();
    return;
  }
  if (!bodyHTML.trim() || bodyHTML === '<br>') {
    showMailStatus('error', 'Email body cannot be empty.');
    editor.focus();
    return;
  }

  // ─ Check all attachments are ready
  const pendingAttachments = attachments.filter(a => a.uploading || a.base64 === null);
  if (pendingAttachments.length > 0) {
    showMailStatus('error', 'Some attachments are still being processed. Please wait.');
    return;
  }

  // ─ Disable send button
  setSendState('sending');

  try {
    // Sanitize and wrap body
    const sanitizedBody = sanitizeHTML(bodyHTML);
    const wrappedBody = wrapEmailBody(sanitizedBody);

    // Build attachments payload
    const attachPayload = attachments.map(a => ({
      name: a.name,
      mimeType: a.mimeType,
      base64: a.base64,
    }));

    // Build full payload
    const payload = { to, cc, bcc, subject, body: wrappedBody, attachments: attachPayload };

    // Send via GAS
    const response = await fetch(GAS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Server responded with HTTP ${response.status}`);
    }

    const result = await response.json();

    if (result.status === 'success' || result.success === true) {
      setSendState('success');
      showMailStatus('success', `Email sent successfully to ${to}.`);
      resetMailForm();
    } else {
      throw new Error(result.message || result.error || 'Unknown server error');
    }
  } catch (err) {
    console.error('[AUKTAVE] Send error:', err);
    setSendState('error');
    showMailStatus('error', `Send failed: ${err.message}. Check GAS endpoint or network.`);
  }
}

function setSendState(state) {
  const btn = document.getElementById('sendBtn');
  const icon = document.getElementById('sendIcon');
  const label = document.getElementById('sendLabel');
  if (!btn || !label) return;

  btn.disabled = (state === 'sending');
  btn.className = `btn-send ${state !== 'idle' ? state : ''}`;

  const states = {
    idle: { label: 'SEND MESSAGE', iconPath: 'M22 2L11 13M22 2L15 22 11 13 2 9z' },
    sending: { label: 'SENDING...', iconPath: '' },
    success: { label: 'SENT ✓', iconPath: 'M20 6L9 17l-5-5' },
    error: { label: 'RETRY', iconPath: 'M1 4v6h6M23 20v-6h-6M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15' },
  };

  if (states[state]) {
    label.textContent = states[state].label;
    if (icon) {
      if (state === 'sending') {
        icon.innerHTML = `<path d="M12 2a10 10 0 0 1 10 10" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round"/>`;
        icon.classList.add('spin-svg');
      } else {
        icon.innerHTML = states[state].iconPath ? `<path d="${states[state].iconPath}" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : '';
        icon.classList.remove('spin-svg');
      }
    }
  }

  // Reset to idle after 3s for success/error
  if (state === 'success' || state === 'error') {
    setTimeout(() => {
      if (state === 'error') setSendState('idle'); // allow retry
      if (state === 'success') setSendState('idle');
    }, 4000);
  }
}

function showMailStatus(type, message) {
  const area = document.getElementById('statusArea');
  if (!area) return;

  const icons = {
    sending: '<path d="M12 2a10 10 0 0 1 10 10" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"/>',
    success: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2" stroke="currentColor" fill="none"/><polyline points="22 4 12 14.01 9 11.01" stroke-width="2" stroke="currentColor" fill="none"/>',
    error: '<circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/><line x1="15" y1="9" x2="9" y2="15" stroke-width="2" stroke="currentColor"/><line x1="9" y1="9" x2="15" y2="15" stroke-width="2" stroke="currentColor"/>',
  };

  const svgClass = type === 'sending' ? 'spin-svg' : '';

  area.innerHTML = `
    <div class="status-msg ${type}">
      <svg viewBox="0 0 24 24" class="${svgClass}" style="width:15px;height:15px;flex-shrink:0">${icons[type] || ''}</svg>
      <span>${escapeHTML(message)}</span>
    </div>
  `;

  if (type !== 'sending') {
    setTimeout(() => { area.innerHTML = ''; }, 6000);
  }
}

/**
 * Clears the mail form after successful send.
 */
function resetMailForm() {
  const fields = ['mailTo', 'mailCC', 'mailBCC', 'mailSubject'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  const editor = document.getElementById('mailEditor');
  if (editor) editor.innerHTML = '';

  // Hide CC/BCC rows
  document.getElementById('ccRow')?.classList.add('hidden');
  document.getElementById('bccRow')?.classList.add('hidden');
  document.getElementById('toggleCC')?.classList.remove('active');
  document.getElementById('toggleBCC')?.classList.remove('active');

  // Clear attachments
  attachments = [];
  renderChips();

  // Reset placeholder visibility
  const placeholder = document.getElementById('editorPlaceholder');
  if (placeholder) placeholder.style.opacity = '1';

  setSendState('idle');
}


/* ══════════════════════════════════════════════════════════
   ASSETS PANEL
══════════════════════════════════════════════════════════ */

/**
 * Renders all asset categories and cards into the assets panel.
 */
function renderAssets() {
  const container = document.getElementById('assetsContainer');
  if (!container) return;

  container.innerHTML = ASSETS.map(category => `
    <div class="asset-category-block">
      <h3 class="asset-category-label">${escapeHTML(category.category)}</h3>
      <div class="assets-grid">
        ${category.items.map(item => renderAssetCard(item, category.iconClass)).join('')}
      </div>
    </div>
  `).join('');
}

function renderAssetCard(item, iconClass) {
  const actionBtn = item.type === 'download'
    ? `<a href="${escapeAttr(item.path)}" download class="btn-asset download">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
         DOWNLOAD
       </a>`
    : `<a href="${escapeAttr(item.path)}" target="_blank" rel="noopener noreferrer" class="btn-asset open-link">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         OPEN
       </a>`;

  return `
    <div class="asset-card">
      <div class="asset-card-icon ${iconClass}">${escapeHTML(item.icon)}</div>
      <div class="asset-card-info">
        <div class="asset-card-name">${escapeHTML(item.name)}</div>
        <div class="asset-card-desc">${escapeHTML(item.desc)}</div>
      </div>
      <div class="asset-card-actions">${actionBtn}</div>
    </div>
  `;
}


/* ══════════════════════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════════════════════ */

/**
 * Removes <script> tags from HTML string.
 * @param {string} html
 * @returns {string}
 */
function sanitizeHTML(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, '').trim();
}

/**
 * Wraps sanitized email body HTML in a clean, styled container
 * suitable for email clients.
 * @param {string} html
 * @returns {string}
 */
function wrapEmailBody(html) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; background: #f4f4f4; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
    .email-container { max-width: 620px; margin: 32px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
    .email-body { padding: 36px 40px; font-size: 15px; line-height: 1.75; color: #2d2d2d; }
    .email-body p { margin: 0 0 14px; }
    .email-body ul { padding-left: 20px; margin: 0 0 14px; }
    .email-body a { color: #5b3fb0; }
    .email-body img { max-width: 100%; height: auto; }
    .email-footer { padding: 20px 40px; background: #fafafa; border-top: 1px solid #ebebeb; font-size: 11px; color: #999; text-align: center; letter-spacing: 0.5px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-body">${html}</div>
    <div class="email-footer">
      AUKTAVE · Annual Tech Fest · Amity University Kolkata<br>
      <a href="mailto:info.auktave@gmail.com" style="color:#5b3fb0;">info.auktave@gmail.com</a>
    </div>
  </div>
</body>
</html>`.trim();
}

/**
 * Formats bytes to a human-readable string.
 * @param {number} bytes
 * @returns {string}
 */
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Returns an emoji icon based on MIME type.
 * @param {string} mimeType
 * @returns {string}
 */
function getFileIcon(mimeType) {
  if (!mimeType) return '📎';
  if (mimeType.startsWith('image/')) return '🖼';
  if (mimeType === 'application/pdf') return '📄';
  if (mimeType.includes('word') || mimeType.includes('document')) return '📝';
  if (mimeType.includes('spreadsheet') || mimeType.includes('excel')) return '📊';
  if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) return '📑';
  if (mimeType.includes('zip') || mimeType.includes('compressed')) return '🗜';
  if (mimeType.startsWith('video/')) return '🎥';
  if (mimeType.startsWith('audio/')) return '🎵';
  return '📎';
}

/**
 * Escapes HTML entities to prevent XSS in templates.
 * @param {string} str
 * @returns {string}
 */
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Escapes a string for safe use in an HTML attribute.
 * @param {string} str
 * @returns {string}
 */
function escapeAttr(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
