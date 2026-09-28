<template>
  <header v-if="isArticle" class="article-page-header">
    <h1>{{ articleTitle }}</h1>
    <div class="article-actions" role="group" aria-label="Article actions">
      <div class="article-action-wrap article-action-wrap-spreadsheet">
        <div class="article-preview-card" aria-hidden="true">
          <img
            src="/images/usfans-spreadsheet-preview-clean-v2.png"
            alt="UsFans Spreadsheet preview showing curated product categories and shopping links"
            title="UsFans Spreadsheet preview"
          />
          <span class="article-preview-caption">Spreadsheet preview</span>
        </div>
        <component
          :is="spreadsheetLinked ? 'a' : 'span'"
          :href="spreadsheetLinked ? spreadsheetUrl : undefined"
          :target="spreadsheetLinked ? '_blank' : undefined"
          :rel="spreadsheetLinked ? 'nofollow noopener noreferrer' : undefined"
          :aria-disabled="spreadsheetLinked ? undefined : 'true'"
          class="article-action article-action-primary"
          :class="{ 'is-unlinked': !spreadsheetLinked }"
        >
          Access UsFans spreadsheet
        </component>
      </div>
      <div class="article-action-wrap article-action-wrap-shopping">
        <div class="article-preview-card" aria-hidden="true">
          <img
            src="/images/usfans-shopping-preview.png"
            alt="UsFans shopping preview showing product categories and item options"
            title="UsFans shopping preview"
          />
          <span class="article-preview-caption">Shopping preview</span>
        </div>
        <component
          :is="shoppingLinked ? 'a' : 'span'"
          :href="shoppingLinked ? shoppingUrl : undefined"
          :target="shoppingLinked ? '_blank' : undefined"
          :rel="shoppingLinked ? 'nofollow noopener noreferrer' : undefined"
          :aria-disabled="shoppingLinked ? undefined : 'true'"
          class="article-action article-action-secondary"
          :class="{ 'is-unlinked': !shoppingLinked }"
        >
          Start shopping
        </component>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=2086211270#gid=2086211270'
const shoppingUrl = spreadsheetUrl
const isArticle = computed(() => route.path.startsWith('/blog/') && route.path !== '/blog/' && frontmatter.value.articleHeader !== false)
const articleTitle = computed(() => frontmatter.value.title || 'Usfans Spreadsheet Guide')

/* Set either field to false in an article's frontmatter to render that control without a link. */
const spreadsheetLinked = computed(() => frontmatter.value.spreadsheetLink !== false)
const shoppingLinked = computed(() => frontmatter.value.shoppingLink !== false)
</script>
