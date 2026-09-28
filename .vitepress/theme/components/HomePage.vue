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
        <p class="profile-bio">A focused directory for menswear finds, QC references and practical buying research. Clear links. No noise.</p>
        <div class="trust-line"><span class="trust-check">✓</span> Independent resource · research before you buy</div>
      </header>

      <section class="link-group" aria-labelledby="start-heading">
        <div class="group-heading">
          <span class="group-rule" aria-hidden="true"></span>
          <h2 id="start-heading">Featured access</h2>
          <span class="group-rule" aria-hidden="true"></span>
        </div>
        <a class="link-card link-card-featured" :href="links.spreadsheet" target="_blank" rel="nofollow noopener noreferrer" @click="trackClick('spreadsheet')">
          <span class="link-icon icon-sheet" aria-hidden="true">▤</span>
          <span class="link-copy"><strong>Open the Kakobuy Spreadsheet</strong><small>7,000+ menswear finds · updated daily</small></span>
          <span class="link-metric">{{ counts.spreadsheet }}<small>已累计跳转</small></span>
          <span class="link-arrow" aria-hidden="true">↗</span>
        </a>
        <a class="link-card" href="/blog/usfans-community-buying-guide/" @click="trackClick('qc-guide')">
          <span class="link-icon icon-qc" aria-hidden="true">✓</span>
          <span class="link-copy"><strong>QC checklist & buying guide</strong><small>Review materials, sizing and visible details</small></span>
          <span class="link-metric">{{ counts['qc-guide'] }}<small>已累计跳转</small></span>
          <span class="link-arrow" aria-hidden="true">→</span>
        </a>
        <a class="link-card" href="/blog/usfans-about/" @click="trackClick('about')">
          <span class="link-icon icon-trust" aria-hidden="true">◆</span>
          <span class="link-copy"><strong>How this resource works</strong><small>Our approach to product research and context</small></span>
          <span class="link-metric">{{ counts.about }}<small>已累计跳转</small></span>
          <span class="link-arrow" aria-hidden="true">→</span>
        </a>
      </section>

      <section class="trust-panel" aria-label="Research standards">
        <div class="trust-panel-head"><span class="panel-label">THE STANDARD</span><span class="panel-line"></span></div>
        <div class="trust-points">
          <div><b>01</b><span>Organized by category</span></div>
          <div><b>02</b><span>QC references, not false promises</span></div>
          <div><b>03</b><span>Verify live terms before purchase</span></div>
        </div>
      </section>

      <section class="link-group" aria-labelledby="browse-heading">
        <div class="group-heading">
          <span class="group-rule" aria-hidden="true"></span>
          <h2 id="browse-heading">Menswear categories</h2>
          <span class="group-rule" aria-hidden="true"></span>
        </div>
        <div class="compact-grid">
          <a v-for="category in categories" :key="category.id" class="compact-link" :href="category.href" @click="trackClick(category.id)">
            <span class="compact-icon" aria-hidden="true">{{ category.number }}</span>
            <span class="compact-copy"><b>{{ category.label }}</b><small>已累计跳转 {{ counts[category.id] }}</small></span>
            <span class="compact-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section class="link-group" aria-labelledby="learn-heading">
        <div class="group-heading">
          <span class="group-rule" aria-hidden="true"></span>
          <h2 id="learn-heading">Guides & archive</h2>
          <span class="group-rule" aria-hidden="true"></span>
        </div>
        <a class="link-card" href="/blog/" @click="trackClick('guides')">
          <span class="link-icon icon-guide" aria-hidden="true">✦</span>
          <span class="link-copy"><strong>All guides & articles</strong><small>Sizing, shipping, categories and more</small></span>
          <span class="link-metric">{{ counts.guides }}<small>已累计跳转</small></span>
          <span class="link-arrow" aria-hidden="true">→</span>
        </a>
        <a class="link-card" href="/accessories" @click="trackClick('accessories')">
          <span class="link-icon icon-archive" aria-hidden="true">⌁</span>
          <span class="link-copy"><strong>Bags, watches & accessories</strong><small>Finish the fit with considered details</small></span>
          <span class="link-metric">{{ counts.accessories }}<small>已累计跳转</small></span>
          <span class="link-arrow" aria-hidden="true">→</span>
        </a>
      </section>

      <p class="counter-note">每次点击都会在本设备记录一次跳转次数</p>
      <footer class="linktree-footer"><span class="footer-mark">K</span><span>Independent product research resource</span></footer>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { siteConfig } from '../site-config.js'

const { links } = siteConfig
const storageKey = 'kakobuy-link-click-counts'
const categories = [
  { id: 'sneakers', number: '01', label: 'Sneakers', href: '/blog/usfans-sneakers/' },
  { id: 'clothing', number: '02', label: 'Clothing', href: '/clothes' },
  { id: 'accessories', number: '03', label: 'Bags & accessories', href: '/accessories' },
  { id: 'electronics', number: '04', label: 'Electronics', href: '/electronics' },
  { id: 'pants', number: '05', label: 'Pants & shorts', href: '/pants' },
  { id: 'hats', number: '06', label: 'Hats & caps', href: '/hats' },
]

const defaultCounts = {
  spreadsheet: 0, 'qc-guide': 0, about: 0, guides: 0, accessories: 0,
  sneakers: 0, clothing: 0, electronics: 0, pants: 0, hats: 0,
}

function readCounts() {
  if (typeof window === 'undefined') return { ...defaultCounts }
  try { return { ...defaultCounts, ...JSON.parse(window.localStorage.getItem(storageKey) || '{}') } }
  catch { return { ...defaultCounts } }
}

const counts = reactive(readCounts())

function trackClick(id) {
  counts[id] = Number(counts[id] || 0) + 1
  try { window.localStorage.setItem(storageKey, JSON.stringify({ ...counts })) } catch { /* private browsing can block storage */ }
}
</script>

<style scoped>
.linktree-home { --ink: #f3f1ed; --muted: #999c9c; --dim: #686d6e; --line: rgba(255,255,255,.12); --orange: #d8753b; --blue: #6c82c9; min-height: 100vh; position: relative; overflow: hidden; padding: 46px 20px 34px; color: var(--ink); background: #111516; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
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
.link-group { margin-top: 34px; }
.group-heading { display: flex; align-items: center; gap: 10px; margin: 0 3px 12px; }
.group-heading h2 { margin: 0; color: #aeb1b0; font-size: 10px; font-weight: 850; letter-spacing: .16em; text-transform: uppercase; white-space: nowrap; }
.group-rule { height: 1px; flex: 1; background: var(--line); }
.link-card, .compact-link { text-decoration: none; }
.link-card { display: flex; align-items: center; gap: 13px; min-height: 72px; margin: 10px 0; padding: 10px 13px 10px 11px; border: 1px solid var(--line); border-radius: 13px; color: var(--ink); background: rgba(31,36,37,.92); box-shadow: 0 9px 25px rgba(0,0,0,.16); transition: transform .18s ease, border-color .18s ease, background .18s ease; }
.link-card:hover { transform: translateY(-2px); border-color: rgba(216,117,59,.55); background: #262c2d; }
.link-card:active, .compact-link:active { transform: scale(.98); }
.link-card-featured { border-color: rgba(216,117,59,.65); background: linear-gradient(100deg, rgba(83,49,34,.9), rgba(31,36,37,.95)); }
.link-icon { display: grid; place-items: center; width: 44px; height: 44px; flex: 0 0 44px; border-radius: 10px; font-size: 19px; font-weight: 850; }
.icon-sheet { color: #f3b183; background: rgba(216,117,59,.2); } .icon-qc { color: #8bd3ae; background: rgba(63,143,108,.2); } .icon-trust { color: #a6b5e3; background: rgba(91,109,174,.2); } .icon-guide { color: #d0adf2; background: rgba(123,81,165,.2); } .icon-archive { color: #d3c293; background: rgba(153,126,53,.2); }
.link-copy { display: grid; gap: 4px; min-width: 0; flex: 1; }
.link-copy strong { color: #f2f1ee; font-size: 14px; font-weight: 800; line-height: 1.25; }
.link-copy small { overflow: hidden; color: var(--muted); font-size: 11px; line-height: 1.2; text-overflow: ellipsis; white-space: nowrap; }
.link-metric { display: grid; justify-items: end; flex: 0 0 auto; color: #e5a477; font-size: 14px; font-weight: 850; line-height: 1; white-space: nowrap; }
.link-metric small { margin-top: 4px; color: var(--dim); font-size: 9px; font-weight: 650; }
.link-arrow { color: #797f80; font-size: 17px; }
.trust-panel { margin-top: 29px; padding: 17px 18px 16px; border: 1px solid rgba(255,255,255,.1); border-radius: 13px; background: rgba(19,23,24,.7); }
.trust-panel-head { display: flex; align-items: center; gap: 10px; }
.panel-label { color: var(--orange); font-size: 10px; font-weight: 850; letter-spacing: .14em; }
.panel-line { height: 1px; flex: 1; background: rgba(216,117,59,.28); }
.trust-points { display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; margin-top: 15px; }
.trust-points div { display: grid; gap: 5px; }
.trust-points b { color: #d8753b; font-size: 11px; }
.trust-points span { color: #b0b4b3; font-size: 10px; line-height: 1.4; }
.compact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.compact-link { display: flex; align-items: center; gap: 9px; min-height: 60px; padding: 10px 11px; border: 1px solid var(--line); border-radius: 12px; color: var(--ink); background: rgba(31,36,37,.74); transition: transform .18s ease, border-color .18s ease, background .18s ease; }
.compact-link:hover { transform: translateY(-2px); border-color: rgba(108,130,201,.55); background: #252a2c; }
.compact-icon { display: grid; place-items: center; width: 27px; height: 27px; border: 1px solid rgba(108,130,201,.35); border-radius: 7px; color: #9daee3; font-size: 9px; font-weight: 900; }
.compact-copy { display: grid; gap: 4px; min-width: 0; }
.compact-copy b { overflow: hidden; color: #e8e8e4; font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }
.compact-copy small { color: var(--dim); font-size: 9px; }
.compact-arrow { margin-left: auto; color: #747b7d; font-size: 15px; }
.counter-note { margin: 27px 0 0; color: #6f7575; font-size: 10px; text-align: center; }
.linktree-footer { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 22px; color: #666c6c; font-size: 11px; }
.footer-mark { display: grid; place-items: center; width: 21px; height: 21px; border-radius: 6px; color: #161616; background: #aeb3b0; font-size: 11px; font-weight: 900; }
@media (max-width: 480px) { .linktree-home { padding: 29px 14px 25px; } .profile-avatar { width: 72px; height: 72px; font-size: 30px; } .trust-points { gap: 9px; } .trust-points span { font-size: 9px; } .link-card { min-height: 68px; } .link-metric { font-size: 13px; } }
@media (prefers-reduced-motion: reduce) { .link-card, .compact-link { transition: none; } }
</style>
