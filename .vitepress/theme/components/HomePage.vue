<template>
  <main class="linktree-home">
    <div class="linktree-shell">
      <header class="profile-header">
        <div class="profile-avatar" aria-hidden="true">K</div>
        <button class="share-button" type="button" aria-label="Share this page" @click="sharePage">
          <span aria-hidden="true">↗</span>
        </button>
        <p class="profile-handle">@kakobuybestspreadsheet</p>
        <h1>Kakobuy Best Spreadsheet</h1>
        <p class="profile-bio">7,000+ product finds, QC references and practical guides for smarter shopping research.</p>
        <div class="profile-meta">
          <span><strong>7K+</strong> finds</span>
          <span><strong>Daily</strong> updates</span>
          <span><strong>Free</strong> access</span>
        </div>
      </header>

      <section class="link-group" aria-labelledby="start-heading">
        <div class="group-heading">
          <span class="group-dot dot-orange" aria-hidden="true"></span>
          <h2 id="start-heading">Start here</h2>
        </div>
        <a class="link-card link-card-featured" :href="links.spreadsheet" target="_blank" rel="nofollow noopener noreferrer">
          <span class="link-icon icon-sheet" aria-hidden="true">▤</span>
          <span class="link-copy"><strong>Open the Kakobuy Spreadsheet</strong><small>7,000+ finds · updated daily</small></span>
          <span class="link-arrow" aria-hidden="true">↗</span>
        </a>
        <a class="link-card" :href="shoppingUrl" target="_blank" rel="nofollow sponsored noopener noreferrer">
          <span class="link-icon icon-shop" aria-hidden="true">↗</span>
          <span class="link-copy"><strong>Shop with Kakobuy</strong><small>Browse products and start your haul</small></span>
          <span class="link-arrow" aria-hidden="true">↗</span>
        </a>
        <a class="link-card" href="/blog/usfans-community-buying-guide/">
          <span class="link-icon icon-qc" aria-hidden="true">✓</span>
          <span class="link-copy"><strong>QC photos & buying guide</strong><small>What to check before you order</small></span>
          <span class="link-arrow" aria-hidden="true">→</span>
        </a>
      </section>

      <section class="link-group" aria-labelledby="browse-heading">
        <div class="group-heading">
          <span class="group-dot dot-blue" aria-hidden="true"></span>
          <h2 id="browse-heading">Browse the collection</h2>
        </div>
        <div class="compact-grid">
          <a v-for="category in categories" :key="category.label" class="compact-link" :href="category.href">
            <span class="compact-icon" aria-hidden="true">{{ category.icon }}</span>
            <span>{{ category.label }}</span>
            <span class="compact-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section class="link-group" aria-labelledby="learn-heading">
        <div class="group-heading">
          <span class="group-dot dot-green" aria-hidden="true"></span>
          <h2 id="learn-heading">Learn & connect</h2>
        </div>
        <a class="link-card" href="/blog/">
          <span class="link-icon icon-guide" aria-hidden="true">✦</span>
          <span class="link-copy"><strong>All guides & articles</strong><small>Sizing, shipping, categories and more</small></span>
          <span class="link-arrow" aria-hidden="true">→</span>
        </a>
        <a class="link-card" :href="links.contact">
          <span class="link-icon icon-mail" aria-hidden="true">@</span>
          <span class="link-copy"><strong>Contact the team</strong><small>Questions, corrections or collaborations</small></span>
          <span class="link-arrow" aria-hidden="true">→</span>
        </a>
      </section>

      <p v-if="copied" class="copy-status" role="status">Link copied to clipboard</p>
      <footer class="linktree-footer">
        <span class="footer-mark">K</span>
        <span>Independent product research resource</span>
      </footer>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { siteConfig } from '../site-config.js'

const { links } = siteConfig
const shoppingUrl = 'https://repsootd.com/products/'
const copied = ref(false)

const categories = [
  { label: 'Sneakers', icon: '01', href: '/blog/usfans-sneakers/' },
  { label: 'Clothing', icon: '02', href: '/clothes' },
  { label: 'Bags & accessories', icon: '03', href: '/accessories' },
  { label: 'Electronics', icon: '04', href: '/electronics' },
  { label: 'Pants & shorts', icon: '05', href: '/pants' },
  { label: 'Hats & caps', icon: '06', href: '/hats' },
]

async function sharePage() {
  const shareData = { title: 'Kakobuy Best Spreadsheet', text: '7,000+ product finds and QC references', url: window.location.href }
  try {
    if (navigator.share) await navigator.share(shareData)
    else {
      await navigator.clipboard.writeText(window.location.href)
      copied.value = true
      window.setTimeout(() => { copied.value = false }, 2200)
    }
  } catch {
    // Sharing can be cancelled by the visitor; no error state is needed.
  }
}
</script>

<style scoped>
.linktree-home {
  --ink: #171717;
  --muted: #76716b;
  --line: rgba(23, 23, 23, .1);
  --orange: #f36b2b;
  --blue: #5f68e8;
  --green: #1e9b72;
  min-height: 100vh;
  padding: 46px 20px 34px;
  color: var(--ink);
  background: radial-gradient(circle at 50% -10%, #fff8ef 0, #f7f5f1 38%, #edeae5 100%);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.linktree-shell { width: min(100%, 620px); margin: 0 auto; }
.profile-header { position: relative; text-align: center; }
.profile-avatar {
  display: grid; place-items: center; width: 82px; height: 82px; margin: 0 auto 15px;
  border: 5px solid #fff; border-radius: 50%; color: #fff; background: linear-gradient(135deg, #ff9558, #ed5523);
  box-shadow: 0 10px 24px rgba(236, 94, 40, .24); font-size: 34px; font-weight: 900; letter-spacing: -.08em;
}
.share-button { position: absolute; top: 0; right: 0; display: grid; place-items: center; width: 38px; height: 38px; border: 1px solid var(--line); border-radius: 50%; background: rgba(255,255,255,.7); color: #373431; font-size: 19px; cursor: pointer; transition: transform .18s ease, background .18s ease; }
.share-button:hover { transform: translateY(-2px); background: #fff; }
.profile-handle { margin: 0 0 7px; color: var(--orange); font-size: 12px; font-weight: 800; letter-spacing: .08em; }
.profile-header h1 { margin: 0; font-size: clamp(26px, 5vw, 38px); font-weight: 850; letter-spacing: -.055em; line-height: 1.05; }
.profile-bio { max-width: 455px; margin: 12px auto 18px; color: var(--muted); font-size: 14px; line-height: 1.6; }
.profile-meta { display: flex; justify-content: center; gap: 22px; color: #8c8780; font-size: 11px; }
.profile-meta strong { color: var(--ink); font-size: 12px; }
.link-group { margin-top: 34px; }
.group-heading { display: flex; align-items: center; gap: 8px; margin: 0 4px 11px; }
.group-heading h2 { margin: 0; color: #6d6862; font-size: 11px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
.group-dot { width: 7px; height: 7px; border-radius: 50%; }
.dot-orange { background: var(--orange); } .dot-blue { background: var(--blue); } .dot-green { background: var(--green); }
.link-card, .compact-link { text-decoration: none; }
.link-card { display: flex; align-items: center; gap: 13px; min-height: 70px; margin: 10px 0; padding: 10px 15px 10px 11px; border: 1px solid var(--line); border-radius: 16px; color: var(--ink); background: rgba(255,255,255,.82); box-shadow: 0 7px 20px rgba(35, 29, 20, .045); transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
.link-card:hover { transform: translateY(-3px); border-color: rgba(243,107,43,.32); box-shadow: 0 12px 28px rgba(35, 29, 20, .1); }
.link-card:active, .compact-link:active { transform: scale(.98); }
.link-card-featured { border-color: rgba(243,107,43,.35); background: linear-gradient(100deg, #fff4e9, #fffdfb); }
.link-icon { display: grid; place-items: center; width: 45px; height: 45px; flex: 0 0 45px; border-radius: 12px; font-size: 20px; font-weight: 850; }
.icon-sheet { color: #c9581d; background: #ffddc6; } .icon-shop { color: #4e58d0; background: #e0e3ff; } .icon-qc { color: #157a59; background: #d5f3e8; } .icon-guide { color: #7555b4; background: #ece1ff; } .icon-mail { color: #9a6814; background: #fff0c9; }
.link-copy { display: grid; gap: 4px; min-width: 0; flex: 1; }
.link-copy strong { font-size: 14px; font-weight: 800; line-height: 1.25; }
.link-copy small { overflow: hidden; color: var(--muted); font-size: 11px; line-height: 1.2; text-overflow: ellipsis; white-space: nowrap; }
.link-arrow { color: #98928a; font-size: 18px; }
.compact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.compact-link { display: flex; align-items: center; gap: 9px; min-height: 56px; padding: 11px 12px; border: 1px solid var(--line); border-radius: 14px; color: var(--ink); background: rgba(255,255,255,.68); font-size: 12px; font-weight: 750; transition: transform .18s ease, background .18s ease; }
.compact-link:hover { transform: translateY(-2px); background: #fff; }
.compact-icon { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 8px; color: #5551bb; background: #e9e9ff; font-size: 10px; font-weight: 900; }
.compact-arrow { margin-left: auto; color: #99938c; font-size: 16px; }
.copy-status { margin: 18px 0 0; color: var(--green); font-size: 12px; font-weight: 750; text-align: center; }
.linktree-footer { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 38px; color: #958f87; font-size: 11px; }
.footer-mark { display: grid; place-items: center; width: 21px; height: 21px; border-radius: 7px; color: #fff; background: #171717; font-size: 11px; font-weight: 900; }
@media (max-width: 480px) { .linktree-home { padding: 28px 14px 26px; } .profile-avatar { width: 72px; height: 72px; font-size: 30px; } .profile-meta { gap: 14px; } .link-card { min-height: 66px; } }
@media (prefers-reduced-motion: reduce) { .link-card, .compact-link, .share-button { transition: none; } }
</style>
