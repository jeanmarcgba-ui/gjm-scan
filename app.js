"use strict";

/* ============================================================
   ICONS
   ============================================================ */
const ICONS = {
  qr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.2"/><rect x="14" y="3" width="7" height="7" rx="1.2"/><rect x="3" y="14" width="7" height="7" rx="1.2"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01"/></svg>`,
  barcode: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5v14M7 5v14M10 5v14M13 5v14M15 5v14M18 5v14M21 5v14" stroke-linecap="round"/></svg>`,
  scanner: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8V5a1 1 0 011-1h3M20 8V5a1 1 0 00-1-1h-3M4 16v3a1 1 0 001 1h3M20 16v3a1 1 0 01-1 1h-3" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 12h16" stroke-linecap="round"/></svg>`,
  options: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  text: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h10" stroke-linecap="round"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 15l6-6M10 7l1.5-1.5a3.54 3.54 0 015 5L15 12M14 17l-1.5 1.5a3.54 3.54 0 01-5-5L9 12" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h6M9 17h6" stroke-linecap="round"/></svg>`,
  gallery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="15" rx="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5.5-5.5a1.5 1.5 0 00-2.1 0L4 19" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  social: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6" stroke-linecap="round"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="13" height="14" rx="1.5"/><path d="M21 8.5l-5 3 5 3v-6z" stroke-linejoin="round"/></svg>`,
  wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 9a13.5 13.5 0 0116 0M7 12.5a9 9 0 0110 0M10 16a4.5 4.5 0 014 0" stroke-linecap="round"/><circle cx="12" cy="19.2" r="1" fill="currentColor" stroke="none"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v13m0 0l-4.5-4.5M12 16l4.5-4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 19.5h16" stroke-linecap="round"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20V7m0 0l-4.5 4.5M12 7l4.5 4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20.5h16" stroke-linecap="round"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8a1 1 0 011-1h2l1.3-2h7.4L17 7h2a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.4"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V7a4 4 0 118 0v4" stroke-linecap="round"/></svg>`,
  backup: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 15a4 4 0 004 4h9a3.5 3.5 0 001-6.86A5 5 0 008.3 9.1 4 4 0 004 15z"/><path d="M12 11v6m0 0l-2.2-2.2M12 17l2.2-2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-8 0l1 12.5a1 1 0 001 .9h6a1 1 0 001-.9L18 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="12" height="12" rx="1.5"/><path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 5h5v5M19 5l-8 8M8 5H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 21H5a1 1 0 01-1-1V4a1 1 0 011-1h4M16 17l5-5-5-5M21 12H9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  scanQr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8V5a1 1 0 011-1h3M20 8V5a1 1 0 00-1-1h-3M4 16v3a1 1 0 001 1h3M20 16v3a1 1 0 01-1 1h-3" stroke-linecap="round" stroke-linejoin="round"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg>`,
};
function svg(name) { return ICONS[name] || ""; }

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer = null;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ============================================================
   INDEXEDDB LAYER
   ============================================================ */
const DB_NAME = "gjmscan";
const DB_VERSION = 1;
let _dbp = null;
function openDB() {
  if (_dbp) return _dbp;
  _dbp = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("codes")) db.createObjectStore("codes", { keyPath: "id" });
      if (!db.objectStoreNames.contains("scans")) db.createObjectStore("scans", { keyPath: "id" });
      if (!db.objectStoreNames.contains("settings")) db.createObjectStore("settings", { keyPath: "key" });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return _dbp;
}
async function idbPut(store, val) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, "readwrite");
    tx.objectStore(store).put(val);
    tx.oncomplete = () => resolve(val);
    tx.onerror = () => reject(tx.error);
  });
}
async function idbGet(store, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, "readonly");
    const r = tx.objectStore(store).get(key);
    r.onsuccess = () => resolve(r.result || null);
    r.onerror = () => reject(r.error);
  });
}
async function idbAll(store) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, "readonly");
    const r = tx.objectStore(store).getAll();
    r.onsuccess = () => resolve(r.result || []);
    r.onerror = () => reject(r.error);
  });
}
async function idbDelete(store, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, "readwrite");
    tx.objectStore(store).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function idbClearAll() {
  const db = await openDB();
  for (const store of ["codes", "scans", "settings"]) {
    await new Promise((resolve, reject) => {
      const tx = db.transaction(store, "readwrite");
      tx.objectStore(store).clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }
}

function uid() {
  return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 9);
}
function isMobileDevice() {
  const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const uaMobile = /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent);
  return coarse || uaMobile;
}
function preferredFacingMode() {
  return isMobileDevice() ? "environment" : "user";
}
function escapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function fmtDate(ts) {
  try { return new Date(ts).toLocaleString("fr-FR", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }); }
  catch (e) { return ""; }
}
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
function dataUrlBytes(dataUrl) {
  const idx = dataUrl.indexOf(",");
  const b64 = dataUrl.slice(idx + 1);
  return Math.ceil((b64.length * 3) / 4);
}

/* ============================================================
   CRYPTO (auth password hashing)
   ============================================================ */
async function sha256Hex(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function randomSalt() {
  const arr = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(arr).map((b) => b.toString(16).padStart(2, "0")).join("");
}

/* ============================================================
   CODE TYPES CONFIG (shared by QR CODE and CODE BARRE)
   ============================================================ */
const MAX_INLINE_BYTES = 2200;   // practical ceiling to embed data directly in a QR code
const MAX_BARCODE_CHARS = 300;   // practical ceiling for a reliably scannable 1D barcode

function wifiEscape(s) {
  return String(s || "").replace(/([\\;,:"])/g, "\\$1");
}

const CODE_TYPES = [
  {
    id: "text", label: "Texte", icon: "text", desc: "Un message ou une note",
    fields: [{ key: "text", label: "Texte", type: "textarea", required: true, placeholder: "Écrivez votre texte ici…" }],
    build: (v) => ({ text: v.text, kind: "text", external: true }),
  },
  {
    id: "link", label: "Lien", icon: "link", desc: "Rediriger vers un site web",
    fields: [{ key: "url", label: "URL du site Web", type: "url", required: true, placeholder: "https://exemple.com" }],
    build: (v) => ({ text: normalizeUrl(v.url), kind: "link", external: true }),
  },
  {
    id: "doc", label: "Document", icon: "doc", desc: "Afficher un fichier",
    fields: [{ key: "file", label: "Téléversez votre fichier", type: "file", accept: "*/*", required: true }],
    build: (v, ctx) => buildFilePayload("doc", v.file ? [v.file] : [], ctx),
  },
  {
    id: "gallery", label: "Galerie d'images", icon: "gallery", desc: "Partager plusieurs images",
    fields: [{ key: "files", label: "Téléversez vos images", type: "files", accept: "image/*", required: true }],
    build: (v, ctx) => buildFilePayload("gallery", v.files || [], ctx),
  },
  {
    id: "social", label: "Réseau social", icon: "social", desc: "Vos réseaux en un scan",
    fields: [
      { key: "title", label: "Titre", type: "text", required: true, placeholder: "Mes réseaux sociaux" },
      { key: "desc", label: "Description", type: "text", placeholder: "Retrouvez-moi sur Facebook" },
      { key: "network", label: "Nom du réseau", type: "text", required: true, placeholder: "Facebook" },
      { key: "link", label: "Lien du profil", type: "url", required: true, placeholder: "https://facebook.com/..." },
    ],
    build: (v) => ({
      text: JSON.stringify({ gjm: "social", title: v.title, desc: v.desc || "", network: v.network, link: normalizeUrl(v.link) }),
      kind: "social", external: true,
    }),
  },
  {
    id: "video", label: "Vidéo", icon: "video", desc: "Partager une ou plusieurs vidéos",
    fields: [
      { key: "title", label: "Titre", type: "text", required: true, placeholder: "Vidéo d'anniversaire" },
      { key: "desc", label: "Description", type: "text", placeholder: "Aperçu de ma fête" },
      { key: "files", label: "Vidéos depuis l'appareil", type: "files", accept: "video/*" },
      { key: "url", label: "Ou lien de la vidéo (YouTube…)", type: "url", placeholder: "https://youtube.com/..." },
    ],
    build: (v, ctx) => {
      if (v.url && !(v.files || []).length) {
        return { text: JSON.stringify({ gjm: "video", title: v.title, desc: v.desc || "", url: normalizeUrl(v.url) }), kind: "video", external: true };
      }
      return buildFilePayload("video", v.files || [], ctx, { title: v.title, desc: v.desc || "", url: v.url ? normalizeUrl(v.url) : "" });
    },
  },
  {
    id: "wifi", label: "WiFi", icon: "wifi", desc: "Connexion automatique",
    fields: [
      { key: "ssid", label: "Nom du wifi", type: "text", required: true },
      { key: "password", label: "Mot de passe", type: "text" },
      { key: "enc", label: "Sécurité", type: "select", options: [["WPA", "WPA / WPA2"], ["WEP", "WEP"], ["nopass", "Réseau ouvert"]] },
    ],
    build: (v) => ({ text: `WIFI:T:${v.enc || "WPA"};S:${wifiEscape(v.ssid)};P:${wifiEscape(v.password || "")};;`, kind: "wifi", external: true }),
  },
];

function normalizeUrl(u) {
  u = String(u || "").trim();
  if (u && !/^[a-z][a-z0-9+.-]*:\/\//i.test(u)) u = "https://" + u;
  return u;
}

// Builds a payload for file-carrying types. Small enough files are embedded
// directly as data URIs (fully self-contained, scannable by any device).
// Larger files are stored locally and the code encodes a local reference —
// it will only resolve inside this app / this device.
function buildFilePayload(kind, files, ctx, extra) {
  extra = extra || {};
  if (!files.length) return { text: "", kind, external: true, error: "Aucun fichier sélectionné." };
  const totalBytes = files.reduce((s, f) => s + dataUrlBytes(f.data), 0);
  const itemId = ctx.itemId;
  if (files.length === 1 && totalBytes <= MAX_INLINE_BYTES) {
    return { text: files[0].data, kind, external: true, files, extra };
  }
  return { text: `gjmscan://item/${itemId}`, kind, external: false, files, extra };
}

/* ============================================================
   STATE
   ============================================================ */
const state = {
  activeTab: "qr",
  currentCodeType: null, // {kind:'qr'|'barcode', type: CODE_TYPES entry}
  pendingFiles: {}, // fieldKey -> [{name,data,size}]
  docCapture: null, // {dataUrl}
  html5Qr: null,
  authUnlocked: false,
};

/* ============================================================
   SHEET (bottom sheet / modal host)
   ============================================================ */
function openSheet(innerHtml, opts) {
  opts = opts || {};
  const overlay = document.getElementById("sheetOverlay");
  const body = document.getElementById("sheetBody");
  body.innerHTML = innerHtml;
  overlay.classList.remove("hidden");
  if (!opts.silent) requestAnimationFrame(() => body.scrollTop = 0);
}
function closeSheet() {
  const overlay = document.getElementById("sheetOverlay");
  overlay.classList.add("hidden");
  document.getElementById("sheetBody").innerHTML = "";
  stopQrScanner();
  stopDocCamera();
}
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "sheetOverlay") closeSheet();
});

/* ============================================================
   TYPE PICKER + FORM RENDERING (shared QR / Barcode flow)
   ============================================================ */
function renderTypePicker(kind) {
  const grid = document.getElementById(kind === "qr" ? "qrTypeGrid" : "bcTypeGrid");
  grid.innerHTML = CODE_TYPES.map((t) => `
    <button class="type-card" data-kind="${kind}" data-type="${t.id}">
      <span class="type-card__icon">${svg(t.icon)}</span>
      <b>${t.label}</b>
      <small>${t.desc}</small>
    </button>
  `).join("");
  grid.querySelectorAll(".type-card").forEach((btn) => {
    btn.addEventListener("click", () => openTypeForm(kind, btn.dataset.type));
  });
}

function fieldHtml(f) {
  const req = f.required ? "required" : "";
  if (f.type === "textarea") {
    return `<div class="field"><label>${f.label}${f.required ? "" : " <span class=dim>(optionnel)</span>"}</label>
      <textarea data-field="${f.key}" placeholder="${f.placeholder || ""}" ${req}></textarea></div>`;
  }
  if (f.type === "select") {
    const opts = f.options.map(([v, l]) => `<option value="${v}">${l}</option>`).join("");
    return `<div class="field"><label>${f.label}</label><select data-field="${f.key}">${opts}</select></div>`;
  }
  if (f.type === "file" || f.type === "files") {
    const multi = f.type === "files" ? "multiple" : "";
    return `<div class="field">
      <label>${f.label}${f.required ? "" : " <span class=dim>(optionnel)</span>"}</label>
      <div class="file-drop" data-drop="${f.key}">
        ${svg("upload")}
        <div>Touchez pour choisir ${f.type === "files" ? "des fichiers" : "un fichier"}</div>
        <input type="file" data-field="${f.key}" accept="${f.accept || "*/*"}" ${multi} class="hidden">
      </div>
      <div class="file-preview-grid" data-preview="${f.key}"></div>
    </div>`;
  }
  return `<div class="field"><label>${f.label}${f.required ? "" : " <span class=dim>(optionnel)</span>"}</label>
    <input type="${f.type}" data-field="${f.key}" placeholder="${f.placeholder || ""}" ${req}></div>`;
}

function openTypeForm(kind, typeId) {
  const type = CODE_TYPES.find((t) => t.id === typeId);
  state.currentCodeType = { kind, type };
  state.pendingFiles = {};
  const kindLabel = kind === "qr" ? "QR Code" : "code-barre";
  const html = `
    <div class="sheet__grip"></div>
    <div class="sheet__head">
      <button class="iconbtn" data-close-sheet>${svg("back")}</button>
      <h3>${type.label}</h3>
      <button class="iconbtn" data-close-sheet>${svg("close")}</button>
    </div>
    <form id="typeForm">
      ${type.fields.map(fieldHtml).join("")}
      <div class="field">
        <label>Nom du ${kindLabel}</label>
        <input type="text" data-field="__name" placeholder="Ex : ${type.label} — accueil" required>
      </div>
      <div id="formNote"></div>
      <button type="submit" class="btn btn-primary mt-8">${svg(kind === "qr" ? "qr" : "barcode")} Générer le ${kind === "qr" ? "QR Code" : "code-barre"}</button>
    </form>
  `;
  openSheet(html);
  wireFormEvents();
  document.getElementById("typeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    handleGenerateSubmit();
  });
}

function wireFormEvents() {
  document.querySelectorAll("[data-drop]").forEach((drop) => {
    const key = drop.dataset.drop;
    const input = drop.querySelector('input[type="file"]');
    drop.addEventListener("click", () => input.click());
    input.addEventListener("change", async () => {
      const files = Array.from(input.files || []);
      const arr = [];
      for (const f of files) {
        const data = await fileToDataUrl(f);
        arr.push({ name: f.name, data, size: f.size, type: f.type });
      }
      state.pendingFiles[key] = input.multiple ? arr : arr.slice(0, 1);
      renderFilePreview(key);
    });
  });
}
function renderFilePreview(key) {
  const wrap = document.querySelector(`[data-preview="${key}"]`);
  if (!wrap) return;
  const list = state.pendingFiles[key] || [];
  wrap.innerHTML = list.map((f) => {
    if ((f.type || "").startsWith("image/")) return `<img src="${f.data}" alt="${escapeHtml(f.name)}">`;
    return `<div class="file-chip">${escapeHtml(f.name.slice(0, 18))}</div>`;
  }).join("");
}

async function handleGenerateSubmit() {
  const { kind, type } = state.currentCodeType;
  const form = document.getElementById("typeForm");
  const values = {};
  form.querySelectorAll("[data-field]").forEach((el) => {
    if (el.type === "file") return;
    values[el.dataset.field] = el.value.trim();
  });
  type.fields.forEach((f) => {
    if (f.type === "file") values[f.key] = (state.pendingFiles[f.key] || [])[0] || null;
    if (f.type === "files") values[f.key] = state.pendingFiles[f.key] || [];
  });
  const name = values.__name;
  if (!name) { toast("Merci d'indiquer un nom."); return; }

  const itemId = uid();
  const built = type.build(values, { itemId });
  if (built.error) { showFormNote(built.error, true); return; }
  if (!built.text) { showFormNote("Merci de compléter les champs obligatoires.", true); return; }

  if (kind === "barcode" && built.text.length > MAX_BARCODE_CHARS) {
    showFormNote(`Ce contenu est trop long pour un code-barres fiable (${built.text.length} caractères, max ${MAX_BARCODE_CHARS}). Utilisez un QR Code pour ce type de contenu.`, true);
    return;
  }

  const record = {
    id: itemId,
    kind, // 'qr' | 'barcode'
    type: type.id,
    typeLabel: type.label,
    name,
    payload: built.text,
    external: !!built.external,
    files: built.files || null,
    extra: built.extra || null,
    createdAt: Date.now(),
  };

  try {
    const imageDataUrl = kind === "qr" ? await renderQrDataUrl(built.text) : await renderBarcodeDataUrl(built.text);
    record.image = imageDataUrl;
  } catch (err) {
    showFormNote("Impossible de générer ce code : le contenu est trop volumineux. Essayez avec un fichier plus léger.", true);
    return;
  }

  await idbPut("codes", record);
  showGeneratedResult(record);
  refreshSavedLists();
}

function showFormNote(msg, isError) {
  const el = document.getElementById("formNote");
  if (!el) return;
  el.innerHTML = `<p style="color:${isError ? "#ff7a70" : "var(--ink-dim)"};font-size:12.5px;margin:-4px 0 14px;">${escapeHtml(msg)}</p>`;
}

/* ============================================================
   QR / BARCODE RENDERING
   ============================================================ */
async function renderQrDataUrl(text) {
  return new Promise((resolve, reject) => {
    try {
      let level = "M";
      let qr;
      try {
        qr = qrcode(0, level);
        qr.addData(text);
        qr.make();
      } catch (e) {
        level = "L";
        qr = qrcode(0, level);
        qr.addData(text);
        qr.make();
      }
      resolve(qr.createDataURL(8, 12));
    } catch (err) {
      reject(err);
    }
  });
}
function renderBarcodeDataUrl(text) {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement("canvas");
      JsBarcode(canvas, text, {
        format: "CODE128", displayValue: false, margin: 14, height: 90, width: 2.4,
        background: "#ffffff", lineColor: "#0a0e16",
      });
      resolve(canvas.toDataURL("image/png"));
    } catch (err) {
      reject(err);
    }
  });
}

function showGeneratedResult(record) {
  const limitNote = !record.external
    ? `<p class="dim" style="font-size:11.5px;line-height:1.5;margin-top:14px;">Ce fichier dépasse la capacité d'un ${record.kind === "qr" ? "QR Code" : "code-barre"} (≈2&nbsp;Ko). Le code généré s'ouvre dans <b>cette application</b> — pratique pour un usage interne, mais un appareil externe ne pourra pas le lire. Pour un partage universel, hébergez le fichier en ligne et utilisez plutôt un lien.</p>`
    : "";
  const html = `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>Code généré</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    <div class="result-card">
      <div class="bracket-frame"><span class="bk-tr"></span><span class="bk-bl"></span>
        <img src="${record.image}" alt="${escapeHtml(record.name)}" style="max-width:100%;">
      </div>
      <div class="result-card__name">${escapeHtml(record.name)}</div>
      <div class="result-card__meta">${record.typeLabel.toUpperCase()} · ${record.kind === "qr" ? "QR CODE" : "CODE-BARRE"}</div>
      ${limitNote}
      <div class="btn-row mt-16">
        <button class="btn btn-primary" id="downloadBtn">${svg("download")} Télécharger</button>
      </div>
    </div>
  `;
  openSheet(html);
  document.getElementById("downloadBtn").addEventListener("click", () => downloadDataUrl(record.image, sanitizeFilename(record.name) + (record.kind === "qr" ? ".gif" : ".png")));
}

function sanitizeFilename(s) {
  return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9-_ ]/g, "").trim().replace(/\s+/g, "_") || "gjm-scan";
}
function downloadDataUrl(dataUrl, filename) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast("Téléchargement démarré");
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  downloadDataUrl(url, filename);
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/* ============================================================
   SAVED LISTS + DETAIL VIEWER
   ============================================================ */
function dataUrlToBlob(dataUrl) {
  const [meta, b64] = dataUrl.split(",");
  const mime = (meta.match(/data:(.*?);base64/) || [, "application/octet-stream"])[1];
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: mime });
}
function openDataUrlInDevice(dataUrl) {
  const blob = dataUrlToBlob(dataUrl);
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

async function refreshSavedLists() {
  const all = (await idbAll("codes")).sort((a, b) => b.createdAt - a.createdAt);
  renderSavedList("qrSavedList", all.filter((r) => r.kind === "qr"), "Aucun QR Code généré pour le moment.");
  renderSavedList("bcSavedList", all.filter((r) => r.kind === "barcode"), "Aucun code-barre généré pour le moment.");
}
function renderSavedList(elId, items, emptyMsg) {
  const el = document.getElementById(elId);
  if (!el) return;
  if (!items.length) { el.innerHTML = `<div class="empty-note">${emptyMsg}</div>`; return; }
  el.innerHTML = items.map((r) => `
    <div class="saved-item" data-open-code="${r.id}">
      <div class="saved-item__thumb"><img src="${r.image}" alt=""></div>
      <div class="saved-item__body"><b>${escapeHtml(r.name)}</b><small>${r.typeLabel} · ${fmtDate(r.createdAt)}</small></div>
      ${svg("chevron")}
    </div>
  `).join("");
  el.querySelectorAll("[data-open-code]").forEach((it) => {
    it.addEventListener("click", async () => {
      const rec = await idbGet("codes", it.dataset.openCode);
      if (rec) openCodeDetail(rec);
    });
  });
}

function openCodeDetail(record) {
  let contentHtml = "";
  if (record.type === "text") {
    contentHtml = `<div class="field" style="text-align:left"><label>Contenu</label><div class="mono" style="background:var(--panel-2);border:1px solid var(--border);border-radius:12px;padding:12px;font-size:13px;white-space:pre-wrap;">${escapeHtml(record.payload)}</div></div>`;
  } else if (record.type === "link") {
    contentHtml = `<button class="btn btn-accent mt-8" id="openLinkBtn">${svg("external")} Ouvrir le lien</button>`;
  } else if (record.type === "wifi") {
    const m = {}; record.payload.replace(/^WIFI:/, "").split(";").forEach((p) => { const i = p.indexOf(":"); if (i > 0) m[p.slice(0, i)] = p.slice(i + 1); });
    contentHtml = `<div style="text-align:left" class="mono" style="font-size:13px;">
      <p>Réseau : <b>${escapeHtml((m.S || "").replace(/\\(.)/g, "$1"))}</b></p>
      <p class="mt-8">Mot de passe : <b>${escapeHtml((m.P || "").replace(/\\(.)/g, "$1")) || "(aucun)"}</b></p></div>`;
  } else if (record.type === "social" && record.external) {
    try {
      const d = JSON.parse(record.payload);
      contentHtml = `<div style="text-align:left"><p><b>${escapeHtml(d.title)}</b></p><p class="dim mt-8">${escapeHtml(d.desc)}</p>
        <p class="mt-8">${escapeHtml(d.network)}</p>
        <button class="btn btn-accent mt-16" id="openLinkBtn" data-href="${escapeHtml(d.link)}">${svg("external")} Ouvrir ${escapeHtml(d.network)}</button></div>`;
    } catch (e) {}
  } else if (record.type === "video" && record.external && !record.files) {
    try {
      const d = JSON.parse(record.payload);
      contentHtml = `<div style="text-align:left"><p><b>${escapeHtml(d.title)}</b></p><p class="dim mt-8">${escapeHtml(d.desc)}</p>
        <button class="btn btn-accent mt-16" id="openLinkBtn" data-href="${escapeHtml(d.url)}">${svg("play")} Voir la vidéo</button></div>`;
    } catch (e) {}
  }
  if (record.files && record.files.length) {
    contentHtml += `<div class="section-title" style="margin-top:18px;">Fichier${record.files.length > 1 ? "s" : ""} lié${record.files.length > 1 ? "s" : ""}</div>
      <div class="saved-list">${record.files.map((f, i) => `
        <div class="saved-item" data-open-file="${record.id}:${i}">
          <div class="saved-item__thumb">${(f.type || "").startsWith("image/") ? `<img src="${f.data}">` : svg("doc")}</div>
          <div class="saved-item__body"><b>${escapeHtml(f.name)}</b><small>${((f.size || 0) / 1024).toFixed(0)} Ko</small></div>
          ${svg("external")}
        </div>`).join("")}</div>`;
  }

  const html = `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>${escapeHtml(record.name)}</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    <div class="result-card">
      <div class="bracket-frame"><span class="bk-tr"></span><span class="bk-bl"></span>
        <img src="${record.image}" style="max-width:100%;">
      </div>
      <div class="result-card__meta">${record.typeLabel.toUpperCase()} · ${fmtDate(record.createdAt)}</div>
      <div class="mt-16">${contentHtml}</div>
      <div class="btn-row mt-16">
        <button class="btn btn-primary" id="dlCodeBtn">${svg("download")} Télécharger le code</button>
        <button class="btn btn-danger" id="delCodeBtn" style="max-width:52px;">${svg("trash")}</button>
      </div>
    </div>
  `;
  openSheet(html);
  document.getElementById("dlCodeBtn").addEventListener("click", () => downloadDataUrl(record.image, sanitizeFilename(record.name) + (record.kind === "qr" ? ".gif" : ".png")));
  document.getElementById("delCodeBtn").addEventListener("click", async () => {
    if (!confirm("Supprimer ce code définitivement ?")) return;
    await idbDelete("codes", record.id);
    closeSheet();
    refreshSavedLists();
    toast("Code supprimé");
  });
  const linkBtn = document.getElementById("openLinkBtn");
  if (linkBtn) linkBtn.addEventListener("click", () => window.open(linkBtn.dataset.href || record.payload, "_blank"));
  document.querySelectorAll("[data-open-file]").forEach((it) => {
    it.addEventListener("click", () => {
      const idx = parseInt(it.dataset.openFile.split(":")[1], 10);
      const f = record.files[idx];
      if (f) openDataUrlInDevice(f.data);
    });
  });
}

/* ============================================================
   SCANNER — DOCUMENT CAPTURE
   ============================================================ */
let docStream = null;
async function openDocScanner() {
  const html = `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>Scanner un document</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    <div class="camera-wrap">
      <video id="docCameraVideo" autoplay playsinline muted></video>
      <div class="camera-reticle"><span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span></div>
    </div>
    <button class="btn btn-primary" id="captureDocBtn">${svg("camera")} Capturer</button>
    <p class="dim center mt-16" style="font-size:12px;">Cadrez le document puis appuyez sur Capturer.</p>
  `;
  openSheet(html);
  try {
    docStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: preferredFacingMode() } } }, false);
    document.getElementById("docCameraVideo").srcObject = docStream;
  } catch (err) {
    showFormNote("", false);
    document.querySelector(".camera-wrap").innerHTML = `<div class="empty-note" style="margin:auto;">Impossible d'accéder à la caméra. Vérifiez les autorisations de votre navigateur.</div>`;
  }
  document.getElementById("captureDocBtn").addEventListener("click", captureDocFrame);
}
function stopDocCamera() {
  if (docStream) { docStream.getTracks().forEach((t) => t.stop()); docStream = null; }
}
function captureDocFrame() {
  const video = document.getElementById("docCameraVideo");
  if (!video || !video.videoWidth) { toast("Caméra non prête"); return; }
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth; canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);
  const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
  stopDocCamera();
  showDocSavePanel(dataUrl);
}
function showDocSavePanel(dataUrl) {
  const html = `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>Aperçu du document</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    <div class="bracket-frame" style="height:260px;margin-bottom:16px;"><span class="bk-tr"></span><span class="bk-bl"></span>
      <img src="${dataUrl}" style="max-width:100%;max-height:100%;border-radius:10px;">
    </div>
    <form id="docSaveForm">
      <div class="field"><label>Nom du document</label><input type="text" data-field="docName" placeholder="Ex : Facture Août" required></div>
      <div class="field"><label>Mode d'enregistrement</label>
        <select data-field="docFormat">
          <option value="pdf">PDF</option>
          <option value="word">Word (.doc)</option>
          <option value="excel">Excel (.xls)</option>
          <option value="image">Image (.jpg)</option>
          <option value="dessin">Dessin (.png)</option>
        </select>
      </div>
      <div class="btn-row">
        <button type="button" class="btn" id="retakeBtn">Reprendre</button>
        <button type="submit" class="btn btn-primary">${svg("check")} Enregistrer</button>
      </div>
    </form>
  `;
  openSheet(html);
  document.getElementById("retakeBtn").addEventListener("click", () => openDocScanner());
  document.getElementById("docSaveForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[data-field="docName"]').value.trim();
    const format = form.querySelector('[data-field="docFormat"]').value;
    if (!name) return;
    await exportScannedDoc(dataUrl, name, format);
  });
}
async function exportScannedDoc(dataUrl, name, format) {
  const fname = sanitizeFilename(name);
  try {
    if (format === "image" || format === "dessin") {
      downloadDataUrl(dataUrl, fname + (format === "image" ? ".jpg" : ".png"));
    } else if (format === "pdf") {
      const { jsPDF } = window.jspdf;
      const img = new Image();
      await new Promise((res) => { img.onload = res; img.src = dataUrl; });
      const orientation = img.width > img.height ? "l" : "p";
      const pdf = new jsPDF({ orientation, unit: "pt", format: [img.width, img.height] });
      pdf.addImage(dataUrl, "JPEG", 0, 0, img.width, img.height);
      pdf.save(fname + ".pdf");
    } else if (format === "word") {
      const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
        <head><meta charset="utf-8"><title>${escapeHtml(name)}</title></head>
        <body><h2>${escapeHtml(name)}</h2><img src="${dataUrl}" style="max-width:600px;"></body></html>`;
      downloadBlob(new Blob(["\ufeff", html], { type: "application/msword" }), fname + ".doc");
    } else if (format === "excel") {
      const html = `<html xmlns:x="urn:schemas-microsoft-com:office:excel">
        <head><meta charset="utf-8"></head>
        <body><table><tr><td>${escapeHtml(name)}</td></tr><tr><td><img src="${dataUrl}" style="max-width:500px;"></td></tr></table></body></html>`;
      downloadBlob(new Blob(["\ufeff", html], { type: "application/vnd.ms-excel" }), fname + ".xls");
    }
    await idbPut("scans", { id: uid(), name, format, dataUrl, createdAt: Date.now() });
    closeSheet();
    toast("Document enregistré");
  } catch (err) {
    toast("Erreur lors de l'enregistrement");
  }
}

/* ============================================================
   SCANNER — QR / BARCODE READER
   ============================================================ */
function openQrScanner() {
  const html = `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>Scanner un code</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    <div class="camera-wrap"><div id="qr-reader" style="width:100%;height:100%;"></div>
      <div class="camera-reticle"><span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span></div>
      <div class="scan-line"></div>
    </div>
    <p class="dim center" style="font-size:12px;">Présentez un QR Code ou un code-barre devant la caméra.</p>
  `;
  openSheet(html);
  startQrScanner();
}
function startQrScanner() {
  try {
    const formats = [
      Html5QrcodeSupportedFormats.QR_CODE, Html5QrcodeSupportedFormats.CODE_128,
      Html5QrcodeSupportedFormats.EAN_13, Html5QrcodeSupportedFormats.EAN_8,
      Html5QrcodeSupportedFormats.UPC_A, Html5QrcodeSupportedFormats.CODE_39,
      Html5QrcodeSupportedFormats.ITF, Html5QrcodeSupportedFormats.CODABAR,
    ];
    state.html5Qr = new Html5Qrcode("qr-reader", { formatsToSupport: formats, verbose: false });
    state.html5Qr.start(
      { facingMode: { ideal: preferredFacingMode() } },
      { fps: 10, qrbox: { width: 230, height: 230 } },
      (decodedText) => { stopQrScanner(); renderScanResult(decodedText); },
      () => {}
    ).catch(() => {
      document.getElementById("qr-reader").innerHTML = `<div class="empty-note" style="margin:auto;">Impossible d'accéder à la caméra.</div>`;
    });
  } catch (err) {}
}
function stopQrScanner() {
  if (state.html5Qr) {
    const inst = state.html5Qr;
    state.html5Qr = null;
    inst.stop().then(() => inst.clear()).catch(() => {});
  }
}

async function renderScanResult(text) {
  let panel = "";
  let downloadable = null; // {dataUrl or blob, defaultExt}

  if (text.startsWith("gjmscan://item/")) {
    const id = text.replace("gjmscan://item/", "");
    const rec = await idbGet("codes", id);
    if (rec) { closeSheet(); openCodeDetail(rec); return; }
    panel = `<div class="empty-note">Cet élément a été généré sur un autre appareil ou une autre installation de l'application : il ne peut être ouvert que depuis l'app où il a été créé.</div>`;
  } else if (text.startsWith("data:")) {
    downloadable = text;
    const mime = (text.match(/data:(.*?);base64/) || [, ""])[1];
    if (mime.startsWith("image/")) panel = `<div class="bracket-frame" style="height:220px;margin-bottom:14px;"><span class="bk-tr"></span><span class="bk-bl"></span><img src="${text}" style="max-width:100%;max-height:100%;"></div>`;
    else panel = `<div class="empty-note">Fichier détecté (${escapeHtml(mime || "inconnu")}).</div>`;
  } else if (text.startsWith("WIFI:")) {
    const m = {}; text.replace(/^WIFI:/, "").split(";").forEach((p) => { const i = p.indexOf(":"); if (i > 0) m[p.slice(0, i)] = p.slice(i + 1); });
    panel = `<div style="text-align:left" class="mono" style="font-size:13px;">
      <p>Réseau : <b>${escapeHtml((m.S || "").replace(/\\(.)/g, "$1"))}</b></p>
      <p class="mt-8">Mot de passe : <b>${escapeHtml((m.P || "").replace(/\\(.)/g, "$1")) || "(aucun)"}</b></p></div>`;
  } else {
    let parsedJson = null;
    try { parsedJson = JSON.parse(text); } catch (e) {}
    if (parsedJson && parsedJson.gjm === "social") {
      panel = `<div style="text-align:left"><p><b>${escapeHtml(parsedJson.title)}</b></p><p class="dim mt-8">${escapeHtml(parsedJson.desc)}</p>
        <button class="btn btn-accent mt-16" id="scanLinkBtn" data-href="${escapeHtml(parsedJson.link)}">${svg("external")} Ouvrir ${escapeHtml(parsedJson.network)}</button></div>`;
    } else if (parsedJson && parsedJson.gjm === "video") {
      panel = `<div style="text-align:left"><p><b>${escapeHtml(parsedJson.title)}</b></p><p class="dim mt-8">${escapeHtml(parsedJson.desc)}</p>
        <button class="btn btn-accent mt-16" id="scanLinkBtn" data-href="${escapeHtml(parsedJson.url)}">${svg("play")} Voir la vidéo</button></div>`;
    } else if (/^[a-z][a-z0-9+.-]*:\/\//i.test(text) || /^www\./i.test(text)) {
      const href = normalizeUrl(text);
      panel = `<p class="mono" style="font-size:12.5px;word-break:break-all;">${escapeHtml(text)}</p>
        <button class="btn btn-accent mt-16" id="scanLinkBtn" data-href="${escapeHtml(href)}">${svg("external")} Ouvrir le lien</button>`;
    } else {
      downloadable = text;
      panel = `<div class="mono" style="background:var(--panel-2);border:1px solid var(--border);border-radius:12px;padding:12px;font-size:13px;white-space:pre-wrap;text-align:left;">${escapeHtml(text)}</div>`;
    }
  }

  const saveRow = downloadable ? `
    <form id="scanSaveForm" class="mt-16">
      <div class="field"><label>Ajouter le nom</label><input type="text" data-field="scanName" placeholder="Nom du fichier" required></div>
      <button type="submit" class="btn btn-primary">${svg("download")} Télécharger</button>
    </form>` : "";

  const html = `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>Résultat du scan</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    ${panel}
    ${saveRow}
    <button class="btn mt-16" id="scanAgainBtn">${svg("scanQr")} Scanner un autre code</button>
  `;
  openSheet(html);
  const linkBtn = document.getElementById("scanLinkBtn");
  if (linkBtn) linkBtn.addEventListener("click", () => window.open(linkBtn.dataset.href, "_blank"));
  const saveForm = document.getElementById("scanSaveForm");
  if (saveForm) saveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = sanitizeFilename(saveForm.querySelector('[data-field="scanName"]').value.trim() || "fichier");
    if (typeof downloadable === "string" && downloadable.startsWith("data:")) {
      const mime = (downloadable.match(/data:(.*?);base64/) || [, ""])[1];
      const ext = mime.split("/")[1] || "bin";
      downloadDataUrl(downloadable, name + "." + ext);
    } else {
      downloadBlob(new Blob([downloadable], { type: "text/plain" }), name + ".txt");
    }
  });
  document.getElementById("scanAgainBtn").addEventListener("click", openQrScanner);
}

/* ============================================================
   OPTIONS — SECURITY
   ============================================================ */
async function openSecuritySheet() {
  const auth = await idbGet("settings", "auth");
  const html = auth && auth.enabled ? `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>Sécurité</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    <p class="dim" style="font-size:13px;margin-bottom:16px;">Verrouillage actif pour <b>${escapeHtml(auth.username)}</b> (${escapeHtml(auth.fullname)}).</p>
    <div class="btn-row">
      <button class="btn" id="lockNowBtn">${svg("lock")} Verrouiller maintenant</button>
      <button class="btn btn-danger" id="disableAuthBtn">Désactiver</button>
    </div>
  ` : `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>Sécurité</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    <form id="authForm">
      <div class="field"><label>Nom et prénom</label><input type="text" data-field="fullname" required></div>
      <div class="field"><label>Nom d'utilisateur</label><input type="text" data-field="username" required></div>
      <div class="field"><label>Mot de passe</label><input type="password" data-field="password" required minlength="4"></div>
      <div class="field"><label>Confirmer le mot de passe</label><input type="password" data-field="confirm" required minlength="4"></div>
      <div id="authNote"></div>
      <button type="submit" class="btn btn-primary">${svg("lock")} Enregistrer</button>
    </form>
  `;
  openSheet(html);
  const form = document.getElementById("authForm");
  if (form) form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const v = {};
    form.querySelectorAll("[data-field]").forEach((el) => v[el.dataset.field] = el.value);
    if (v.password !== v.confirm) {
      document.getElementById("authNote").innerHTML = `<p style="color:#ff7a70;font-size:12.5px;margin:-4px 0 14px;">Les mots de passe ne correspondent pas.</p>`;
      return;
    }
    const salt = randomSalt();
    const hash = await sha256Hex(salt + v.password);
    await idbPut("settings", { key: "auth", fullname: v.fullname, username: v.username, saltHex: salt, hashHex: hash, enabled: true });
    sessionStorage.setItem("gjmscan_unlocked", "1");
    closeSheet();
    toast("Sécurité activée");
  });
  const lockBtn = document.getElementById("lockNowBtn");
  if (lockBtn) lockBtn.addEventListener("click", () => { closeSheet(); lockApp(); });
  const disableBtn = document.getElementById("disableAuthBtn");
  if (disableBtn) disableBtn.addEventListener("click", async () => {
    if (!confirm("Désactiver le verrouillage de l'application ?")) return;
    await idbPut("settings", { key: "auth", enabled: false });
    closeSheet();
    toast("Sécurité désactivée");
  });
}

function lockApp() {
  sessionStorage.removeItem("gjmscan_unlocked");
  showLockScreen();
}
async function showLockScreen() {
  const auth = await idbGet("settings", "auth");
  const lockEl = document.getElementById("lockScreen");
  if (!auth || !auth.enabled) { lockEl.classList.add("hidden"); return; }
  lockEl.classList.remove("hidden");
  lockEl.innerHTML = `
    <div class="lock-card">
      <img src="icons/logo.png" alt="GJM">
      <h1>GJM Scan</h1>
      <p>Connectez-vous pour continuer</p>
      <form id="lockForm">
        <div class="field"><label>Nom d'utilisateur</label><input type="text" data-field="username" required></div>
        <div class="field"><label>Mot de passe</label><input type="password" data-field="password" required></div>
        <div class="lock-error" id="lockErr"></div>
        <button type="submit" class="btn btn-primary">${svg("check")} Se connecter</button>
      </form>
    </div>`;
  document.getElementById("lockForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.querySelector('[data-field="username"]').value;
    const password = form.querySelector('[data-field="password"]').value;
    const hash = await sha256Hex(auth.saltHex + password);
    if (username === auth.username && hash === auth.hashHex) {
      sessionStorage.setItem("gjmscan_unlocked", "1");
      lockEl.classList.add("hidden");
    } else {
      document.getElementById("lockErr").textContent = "Identifiants incorrects.";
    }
  });
}

/* ============================================================
   OPTIONS — BACKUP / RESTORE
   ============================================================ */
function openBackupSheet() {
  const html = `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>Sauvegarde</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    <p class="dim" style="font-size:13px;margin-bottom:16px;">Exportez toutes vos données (codes générés, documents scannés, sécurité) dans un fichier, ou restaurez une sauvegarde précédente.</p>
    <div class="btn-row">
      <button class="btn btn-accent" id="exportBtn">${svg("backup")} Exporter</button>
      <button class="btn" id="importBtn">${svg("upload")} Restaurer</button>
    </div>
    <input type="file" id="importFile" accept="application/json" class="hidden">
  `;
  openSheet(html);
  document.getElementById("exportBtn").addEventListener("click", exportBackup);
  document.getElementById("importBtn").addEventListener("click", () => document.getElementById("importFile").click());
  document.getElementById("importFile").addEventListener("change", (e) => {
    const f = e.target.files[0];
    if (f) restoreBackup(f);
  });
}
async function exportBackup() {
  const data = {
    version: 1, exportedAt: new Date().toISOString(),
    codes: await idbAll("codes"), scans: await idbAll("scans"), settings: await idbAll("settings"),
  };
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  downloadBlob(blob, `gjm-scan-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`);
}
async function restoreBackup(file) {
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    for (const rec of data.codes || []) await idbPut("codes", rec);
    for (const rec of data.scans || []) await idbPut("scans", rec);
    for (const rec of data.settings || []) await idbPut("settings", rec);
    refreshSavedLists();
    closeSheet();
    toast("Sauvegarde restaurée");
  } catch (err) {
    toast("Fichier de sauvegarde invalide");
  }
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function switchTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + tab));
}

/* ============================================================
   INSTALL PROMPT
   ============================================================ */
let deferredInstallPrompt = null;

function isStandaloneMode() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}
function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}
function isAndroid() { return /android/i.test(navigator.userAgent); }
function isFirefox() { return /firefox/i.test(navigator.userAgent); }
function isSafariDesktop() { return !isIOS() && /safari/i.test(navigator.userAgent) && !/chrome|chromium|crios|edg/i.test(navigator.userAgent); }

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
});
window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  hideInstallUI();
  toast("GJM Scan est installée sur cet appareil");
});

function showInstallUI() {
  if (isStandaloneMode() || sessionStorage.getItem("gjmscan_install_dismissed") === "1") return;
  document.getElementById("installBanner").classList.remove("hidden");
  document.getElementById("installBtn").classList.remove("hidden");
}
function hideInstallUI() {
  document.getElementById("installBanner").classList.add("hidden");
  document.getElementById("installBtn").classList.add("hidden");
}

async function triggerInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (choice && choice.outcome === "accepted") hideInstallUI();
    return;
  }
  openInstallHelpSheet();
}

function openInstallHelpSheet() {
  if (window.location.protocol === "file:") {
    const html = `
      <div class="sheet__grip"></div>
      <div class="sheet__head"><h3>Installation impossible ici</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
      <p style="font-size:13.5px;line-height:1.6;">L'application est ouverte directement depuis un fichier sur le disque (l'adresse commence par <span class="mono">file://</span>). Sur cette adresse, <b>aucun navigateur</b> ne propose l'installation — c'est une règle des navigateurs, pas une limite de l'application.</p>
      <div class="scan-choice mt-16">
        <div class="scan-btn" style="cursor:default;"><span class="scan-btn__frame">1</span><span><b>Ouvrez app.netlify.com/drop</b><small>Gratuit, sans compte requis pour déposer un dossier</small></span></div>
        <div class="scan-btn" style="cursor:default;"><span class="scan-btn__frame">2</span><span><b>Glissez-déposez le dossier de l'app</b><small>Netlify vous donne un lien internet</small></span></div>
        <div class="scan-btn" style="cursor:default;"><span class="scan-btn__frame">3</span><span><b>Ouvrez ce lien</b><small>L'icône d'installation apparaît normalement</small></span></div>
      </div>
      <p class="dim" style="font-size:11.5px;margin-top:14px;">Sur Windows, vous pouvez aussi double-cliquer sur « DEMARRER-WINDOWS.bat » fourni avec l'application pour un test local rapide (si Python est installé).</p>
    `;
    openSheet(html);
    return;
  }
  let steps;
  let title = "Installer GJM Scan";
  if (isIOS()) {
    steps = [
      ["Ouvrez le menu Partager", "Appuyez sur l'icône de partage en bas de Safari"],
      ["« Sur l'écran d'accueil »", "Faites défiler la liste et sélectionnez cette option"],
      ["Confirmez « Ajouter »", "L'icône GJM Scan apparaît sur votre écran d'accueil"],
    ];
  } else if (isAndroid()) {
    title = "Installer sur Android";
    steps = [
      ["Ouvrez le menu du navigateur", "Icône ⋮ en haut à droite de Chrome"],
      ["« Installer l'application »", "Ou « Ajouter à l'écran d'accueil » selon le navigateur"],
      ["Confirmez", "L'icône GJM Scan s'ajoute à votre écran d'accueil"],
    ];
  } else if (isFirefox()) {
    title = "Installer avec Firefox";
    steps = [
      ["Ouvrez le menu du navigateur", "Icône ☰ en haut à droite"],
      ["Cherchez « Installer le site »", "Certaines versions de Firefox ne proposent pas encore l'installation PWA"],
      ["À défaut", "Créez un raccourci vers cette page depuis le menu du navigateur"],
    ];
  } else if (isSafariDesktop()) {
    title = "Installer avec Safari (Mac)";
    steps = [
      ["Menu Fichier", "En haut de l'écran"],
      ["« Ajouter au Dock »", "Disponible sur Safari 17 et versions plus récentes"],
      ["Confirmez", "GJM Scan s'ouvre alors comme une application indépendante"],
    ];
  } else {
    title = "Installer sur ordinateur";
    steps = [
      ["Repérez l'icône d'installation", "Petite icône ⊕ ou écran/flèche, à droite de la barre d'adresse"],
      ["Cliquez dessus", "Ou ouvrez le menu ⋮ du navigateur → « Installer l'application »"],
      ["Confirmez", "GJM Scan s'ouvre alors dans sa propre fenêtre"],
    ];
  }
  const html = `
    <div class="sheet__grip"></div>
    <div class="sheet__head"><h3>${title}</h3><button class="iconbtn" data-close-sheet>${svg("close")}</button></div>
    <div class="scan-choice">
      ${steps.map(([b, s], i) => `
        <div class="scan-btn" style="cursor:default;"><span class="scan-btn__frame">${i + 1}</span><span><b>${b}</b><small>${s}</small></span></div>
      `).join("")}
    </div>
    <p class="dim" style="font-size:11.5px;margin-top:14px;">Si aucune option d'installation n'apparaît, votre navigateur ne le permet pas encore — l'application reste utilisable normalement dans l'onglet.</p>
  `;
  openSheet(html);
}

function wireInstallButton() {
  if (isStandaloneMode()) {
    hideInstallUI();
  } else {
    showInstallUI();
  }
  document.getElementById("installBtn").addEventListener("click", triggerInstall);
  document.getElementById("installBannerBtn").addEventListener("click", triggerInstall);
  document.getElementById("installBannerClose").addEventListener("click", () => {
    sessionStorage.setItem("gjmscan_install_dismissed", "1");
    document.getElementById("installBanner").classList.add("hidden");
  });
}

/* ============================================================
   BOOT
   ============================================================ */
async function boot() {
  document.documentElement.classList.add(isMobileDevice() ? "is-mobile" : "is-desktop");
  document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = svg(el.dataset.icon); });
  renderTypePicker("qr");
  renderTypePicker("barcode");
  await refreshSavedLists();
  wireInstallButton();

  document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-sheet]")) closeSheet();
  });
  document.getElementById("scanDocBtn").addEventListener("click", openDocScanner);
  document.getElementById("scanQrBtn").addEventListener("click", openQrScanner);
  document.getElementById("openSecurityBtn").addEventListener("click", openSecuritySheet);
  document.getElementById("openBackupBtn").addEventListener("click", openBackupSheet);
  document.getElementById("lockToggleBtn").addEventListener("click", lockApp);

  const auth = await idbGet("settings", "auth");
  if (auth && auth.enabled && sessionStorage.getItem("gjmscan_unlocked") !== "1") {
    showLockScreen();
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}
document.addEventListener("DOMContentLoaded", boot);
