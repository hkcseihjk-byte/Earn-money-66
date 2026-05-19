// Toast
const wrap = document.createElement('div');
wrap.id = 'toast-wrap';
document.body.appendChild(wrap);

export function toast(msg, type = 'info', ms = 3000) {
  const icons = { ok: '✅', err: '❌', warn: '⚠️', info: 'ℹ️' };
  const el = document.createElement('div');
  el.className = `toast-box ${type}`;
  el.innerHTML = `<span>${icons[type] || icons.info}</span><span>${msg}</span>`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'tout .3s ease forwards';
    setTimeout(() => el.remove(), 300);
  }, ms);
}

// Loader
const loaderEl = document.createElement('div');
loaderEl.id = 'gloader';
loaderEl.innerHTML = `<div class="spinner"></div><p id="gloader-txt">Loading...</p>`;
document.body.appendChild(loaderEl);

export function showLoader(txt = 'Loading...') {
  document.getElementById('gloader-txt').textContent = txt;
  loaderEl.style.display = 'flex';
}
export function hideLoader() {
  loaderEl.style.display = 'none';
}

// Format
export const bdt = (n) => '৳ ' + parseFloat(n || 0).toFixed(2);
export const num = (n) => n >= 1e6 ? (n/1e6).toFixed(1)+'M' : n >= 1e3 ? (n/1e3).toFixed(1)+'K' : String(n || 0);

export function ago(ts) {
  if (!ts) return '';
  const d = Date.now() - (ts.seconds ? ts.seconds * 1000 : +ts);
  const m = Math.floor(d / 60000);
  if (m < 1) return 'Just now';
  if (m < 60) return m + 'm ago';
  const h = Math.floor(m / 60);
  if (h < 24) return h + 'h ago';
  return Math.floor(h / 24) + 'd ago';
}

export function refCode(uid) {
  return 'EP' + uid.slice(0, 6).toUpperCase();
}

export function badgeClass(m) {
  const map = { free: 'b-free', bronze: 'b-bronze', silver: 'b-silver', gold: 'b-gold', diamond: 'b-diamond' };
  return map[m] || 'b-free';
}
export function badgeLabel(m) {
  const map = { free: '👤 Free', bronze: '🥉 Bronze Pro', silver: '🥈 Silver Pro', gold: '🥇 Gold Pro', diamond: '💎 Diamond' };
  return map[m] || '👤 Free';
}

export function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '✓';
    btn.style.color = '#10b981';
    setTimeout(() => { btn.innerHTML = orig; btn.style.color = ''; }, 1500);
    toast('Copied!', 'ok');
  });
}

export function openModal(id) { document.getElementById(id)?.classList.add('open'); }
export function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

// Auth guard
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

export function requireAuth(cb) {
  onAuthStateChanged(auth, u => {
    if (!u) { window.location.href = 'login.html'; return; }
    cb(u);
  });
}

export function setNav(page) {
  document.querySelectorAll('.bnav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.p === page);
  });
}
