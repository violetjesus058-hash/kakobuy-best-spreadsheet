<template>
  <main class="linktree-home dark-home">
    <div class="trust-glow trust-glow-top" aria-hidden="true"></div>
    <div class="trust-glow trust-glow-side" aria-hidden="true"></div>
    <div class="linktree-shell">
      <header class="profile-header">
        <div class="profile-avatar" aria-hidden="true">K</div>
        <p class="profile-kicker">CURATED MENSWEAR RESEARCH</p>
        <p class="profile-handle">@kakobuybestspreadsheet</p>
        <h1>Kakobuy Best Spreadsheet</h1>
        <p class="profile-bio">A focused, independent reference for menswear finds, QC notes and practical buying research. Clear information. No unnecessary exits.</p>
        <div class="trust-line"><span class="trust-check">✓</span> Independent resource · research before you buy</div>
        <a class="sheet-cta" :href="links.spreadsheet" target="_blank" rel="nofollow sponsored noopener noreferrer" @click="trackSpreadsheet">
          <span class="sheet-cta-icon" aria-hidden="true">▤</span>
          <span class="sheet-cta-copy"><strong>Open the Kakobuy Spreadsheet</strong><small>Browse curated finds, QC references and updated categories</small></span>
          <span class="sheet-cta-arrow" aria-hidden="true">↗</span>
        </a>
        <p class="sheet-cta-count">已累计跳转 {{ spreadsheetClicks }} 次</p>
      </header>

      <section class="link-group" aria-labelledby="focus-heading">
        <div class="group-heading"><span class="group-rule"></span><h2 id="focus-heading">What you will find here</h2><span class="group-rule"></span></div>
        <div class="info-card info-card-featured">
          <span class="link-icon icon-qc" aria-hidden="true">✓</span>
          <span class="link-copy"><strong>QC-first product research</strong><small>Use visible details, materials, sizing and construction notes to form a clearer shortlist.</small></span>
        </div>
        <div class="info-card">
          <span class="link-icon icon-trust" aria-hidden="true">◆</span>
          <span class="link-copy"><strong>Menswear categories, organized</strong><small>Explore the research themes below without being sent to unrelated websites.</small></span>
        </div>
        <div class="info-card">
          <span class="link-icon icon-guide" aria-hidden="true">✦</span>
          <span class="link-copy"><strong>Practical buying context</strong><small>Check live pricing, availability, seller details, shipping and customs terms independently.</small></span>
        </div>
      </section>

      <section class="trust-panel" aria-labelledby="standard-heading">
        <div class="trust-panel-head"><span id="standard-heading" class="panel-label">THE STANDARD</span><span class="panel-line"></span></div>
        <div class="trust-points">
          <div><b>01</b><span>Organized by category</span></div>
          <div><b>02</b><span>QC references, not false promises</span></div>
          <div><b>03</b><span>Verify live terms before purchase</span></div>
        </div>
      </section>

      <section class="link-group" aria-labelledby="categories-heading">
        <div class="group-heading"><span class="group-rule"></span><h2 id="categories-heading">Menswear categories</h2><span class="group-rule"></span></div>
        <div class="compact-grid">
          <div v-for="category in categories" :key="category.label" class="compact-card">
            <span class="compact-icon">{{ category.number }}</span>
            <span class="compact-copy"><b>{{ category.label }}</b><small>{{ category.note }}</small></span>
          </div>
        </div>
      </section>

      <p class="single-page-note">One focused destination for Kakobuy Spreadsheet research. Verify live details before you buy.</p>
      <footer class="linktree-footer"><span class="footer-mark">K</span><span>Independent product research resource</span></footer>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { siteConfig } from '../site-config.js'

const { links } = siteConfig
const clickStorageKey = 'kakobuy-spreadsheet-clicks'
const spreadsheetClicks = ref(Number(typeof window !== 'undefined' ? window.localStorage.getItem(clickStorageKey) || 0 : 0))

function trackSpreadsheet() {
  spreadsheetClicks.value += 1
  try { window.localStorage.setItem(clickStorageKey, String(spreadsheetClicks.value)) } catch { /* storage may be disabled */ }
}

const categories = [
  { number: '01', label: 'Sneakers', note: 'Fit, materials & wear' },
  { number: '02', label: 'Clothing', note: 'Layers, fabrics & sizing' },
  { number: '03', label: 'Bags & accessories', note: 'Hardware & finish details' },
  { number: '04', label: 'Electronics', note: 'Specs & functionality' },
  { number: '05', label: 'Pants & shorts', note: 'Rise, cut & measurements' },
  { number: '06', label: 'Hats & caps', note: 'Fit & construction notes' },
]
</script>

<style scoped>
.linktree-home { --ink: #f3f1ed; --muted: #999c9c; --dim: #686d6e; --line: rgba(255,255,255,.12); --orange: #d8753b; min-height: 100vh; position: relative; overflow: hidden; padding: 46px 20px 34px; color: var(--ink); background: #111516; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
.linktree-shell { position: relative; z-index: 1; width: min(100%, 620px); margin: 0 auto; }
.trust-glow { position: absolute; pointer-events: none; border-radius: 50%; filter: blur(1px); }
.trust-glow-top { width: 520px; height: 360px; top: -270px; left: 50%; transform: translateX(-50%); background: rgba(216,117,59,.19); }
.trust-glow-side { width: 270px; height: 270px; top: 410px; right: -190px; background: rgba(72,90,140,.15); }
.profile-header { text-align: center; }
.profile-avatar { display: grid; place-items: center; width: 82px; height: 82px; margin: 0 auto 18px; border: 1px solid rgba(255,255,255,.28); border-radius: 18px; color: #151515; background: linear-gradient(145deg, #f0a06b, #b55329); box-shadow: 0 14px 34px rgba(0,0,0,.3); font-size: 34px; font-weight: 900; letter-spacing: -.08em; }
.profile-kicker { margin: 0 0 8px; color: var(--orange); font-size: 10px; font-weight: 850; letter-spacing: .2em; }
.profile-handle { margin: 0 0 8px; color: var(--dim); font-size: 12px; font-weight: 700; letter-spacing: .06em; }
.profile-header h1 { margin: 0; color: #fff; font-size: clamp(26px, 5vw, 38px); font-weight: 850; letter-spacing: -.055em; line-height: 1.05; }
.profile-bio { max-width: 470px; margin: 13px auto 15px; color: var(--muted); font-size: 14px; line-height: 1.65; }
.trust-line { display: inline-flex; align-items: center; gap: 7px; color: #b9bebc; font-size: 11px; }
.trust-check { display: grid; place-items: center; width: 17px; height: 17px; border: 1px solid rgba(92,184,147,.55); border-radius: 50%; color: #79c9a5; font-size: 11px; }
.sheet-cta { display: flex; align-items: center; gap: 12px; max-width: 560px; margin: 24px auto 0; padding: 12px 14px 12px 12px; border: 1px solid rgba(216,117,59,.78); border-radius: 14px; color: #fff; background: linear-gradient(105deg, #704126, #352522 72%); box-shadow: 0 14px 30px rgba(0,0,0,.28), inset 0 1px rgba(255,255,255,.1); text-align: left; text-decoration: none; transition: transform .18s ease, border-color .18s ease, background .18s ease; }
.sheet-cta:hover { transform: translateY(-3px); border-color: #f0a06b; background: linear-gradient(105deg, #89502e, #422925 72%); }
.sheet-cta:active { transform: scale(.98); }
.sheet-cta-icon { display: grid; place-items: center; width: 43px; height: 43px; flex: 0 0 43px; border-radius: 10px; color: #ffd0aa; background: rgba(255,197,145,.15); font-size: 20px; font-weight: 900; }
.sheet-cta-copy { display: grid; gap: 4px; min-width: 0; flex: 1; }
.sheet-cta-copy strong { font-size: 14px; font-weight: 850; line-height: 1.2; }
.sheet-cta-copy small { color: #d8b6a2; font-size: 10px; line-height: 1.35; }
.sheet-cta-arrow { color: #ffc49d; font-size: 20px; }
.sheet-cta-count { margin: 8px 0 0; color: #8e9692; font-size: 10px; }
.link-group { margin-top: 34px; }
.group-heading { display: flex; align-items: center; gap: 10px; margin: 0 3px 12px; }
.group-heading h2 { margin: 0; color: #aeb1b0; font-size: 10px; font-weight: 850; letter-spacing: .16em; text-transform: uppercase; white-space: nowrap; }
.group-rule { height: 1px; flex: 1; background: var(--line); }
.info-card { display: flex; align-items: center; gap: 13px; min-height: 72px; margin: 10px 0; padding: 10px 13px 10px 11px; border: 1px solid var(--line); border-radius: 13px; background: rgba(31,36,37,.92); box-shadow: 0 9px 25px rgba(0,0,0,.16); }
.info-card-featured { border-color: rgba(216,117,59,.65); background: linear-gradient(100deg, rgba(83,49,34,.9), rgba(31,36,37,.95)); }
.link-icon { display: grid; place-items: center; width: 44px; height: 44px; flex: 0 0 44px; border-radius: 10px; font-size: 19px; font-weight: 850; }
.icon-qc { color: #8bd3ae; background: rgba(63,143,108,.2); } .icon-trust { color: #a6b5e3; background: rgba(91,109,174,.2); } .icon-guide { color: #d0adf2; background: rgba(123,81,165,.2); }
.link-copy { display: grid; gap: 5px; min-width: 0; }
.link-copy strong { color: #f2f1ee; font-size: 14px; font-weight: 800; line-height: 1.25; }
.link-copy small { color: var(--muted); font-size: 11px; line-height: 1.45; }
.trust-panel { margin-top: 29px; padding: 17px 18px 16px; border: 1px solid rgba(255,255,255,.1); border-radius: 13px; background: rgba(19,23,24,.7); }
.trust-panel-head { display: flex; align-items: center; gap: 10px; }
.panel-label { color: var(--orange); font-size: 10px; font-weight: 850; letter-spacing: .14em; }
.panel-line { height: 1px; flex: 1; background: rgba(216,117,59,.28); }
.trust-points { display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; margin-top: 15px; }
.trust-points div { display: grid; gap: 5px; }
.trust-points b { color: var(--orange); font-size: 11px; }
.trust-points span { color: #b0b4b3; font-size: 10px; line-height: 1.4; }
.compact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.compact-card { display: flex; align-items: center; gap: 9px; min-height: 60px; padding: 10px 11px; border: 1px solid var(--line); border-radius: 12px; background: rgba(31,36,37,.74); }
.compact-icon { display: grid; place-items: center; width: 27px; height: 27px; border: 1px solid rgba(108,130,201,.35); border-radius: 7px; color: #9daee3; font-size: 9px; font-weight: 900; }
.compact-copy { display: grid; gap: 4px; min-width: 0; }
.compact-copy b { overflow: hidden; color: #e8e8e4; font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }
.compact-copy small { color: var(--dim); font-size: 9px; }
.single-page-note { margin: 29px 0 0; color: #7c8383; font-size: 10px; text-align: center; }
.linktree-footer { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 22px; color: #666c6c; font-size: 11px; }
.footer-mark { display: grid; place-items: center; width: 21px; height: 21px; border-radius: 6px; color: #161616; background: #aeb3b0; font-size: 11px; font-weight: 900; }
@media (max-width: 480px) { .linktree-home { padding: 29px 14px 25px; } .profile-avatar { width: 72px; height: 72px; font-size: 30px; } .trust-points { gap: 9px; } .trust-points span { font-size: 9px; } .sheet-cta-copy small { font-size: 9px; } }
</style>
