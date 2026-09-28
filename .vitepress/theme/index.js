import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import ConsentBanner from './components/ConsentBanner.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h('div', { class: 'single-page-layout' }, [
      h(DefaultTheme.Layout),
      h(ConsentBanner),
    ])
  }
}
