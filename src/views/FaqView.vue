<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

useScrollReveal()

const { t } = useI18n()

// Category keys + item counts mirror src/i18n/locales/{en,de}.json
const categoryDefs = [
  { key: 'preorder', count: 5 },
  { key: 'product',  count: 5 },
  { key: 'app',      count: 5 },
  { key: 'shipping', count: 4 },
  { key: 'privacy',  count: 2 },
]

const categories = computed(() => categoryDefs.map(c => ({
  key: c.key,
  cat: t(`faq.categories.${c.key}.title`),
  items: Array.from({ length: c.count }, (_, i) => ({
    q: t(`faq.categories.${c.key}.items.${i}.q`),
    a: t(`faq.categories.${c.key}.items.${i}.a`),
  })),
})))

const activeCategory = ref('All')
const openKey = ref(null)
const searchQuery = ref('')

// Flattened so the "All" view is a single continuous list, with no
// category-to-category gap and no per-category headings to keep in sync.
const visibleItems = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  const sections = activeCategory.value === 'All'
      ? categories.value
      : categories.value.filter(s => s.key === activeCategory.value)

  const items = []
  for (const section of sections) {
    section.items.forEach((it, i) => {
      if (q && !it.q.toLowerCase().includes(q) && !it.a.toLowerCase().includes(q)) return
      items.push({ catKey: section.key, index: i, q: it.q, a: it.a })
    })
  }
  return items
})

function toggle(cat, i) {
  const key = `${cat}:${i}`
  openKey.value = openKey.value === key ? null : key
}

function isOpen(cat, i) {
  return openKey.value === `${cat}:${i}`
}
</script>

<template>
  <Atmosphere/>
  <div class="lp-page">
    <SiteNav/>
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <i18n-t keypath="faq.hero.title" tag="h1" class="reveal" data-d="1">
          <template #highlight>
            <em>{{ t('faq.hero.titleHighlight') }}</em>
          </template>
        </i18n-t>
        <p class="reveal lp-container" data-d="2">
          {{ t('faq.hero.lede') }}
        </p>
      </section>

      <!-- faq body -->
      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <!-- search -->
          <div class="lp-faq-search">
            <svg class="lp-faq-search__icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="7"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <input v-model="searchQuery" type="text" class="lp-faq-search__input"
                   :placeholder="t('faq.searchPlaceholder')" :aria-label="t('faq.searchPlaceholder')"/>
            <button v-if="searchQuery" class="lp-faq-search__clear" type="button"
                    :aria-label="t('faq.searchClear')" @click="searchQuery = ''">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                   stroke-linecap="round">
                <path d="M6 6l12 12M18 6L6 18"/>
              </svg>
            </button>
          </div>

          <!-- category filter -->
          <div class="lp-faq-cats">
            <button :class="['lp-faq-cat', activeCategory === 'All' && 'is-active']"
                    @click="activeCategory = 'All'">{{ t('faq.filterAll') }}
            </button>
            <button v-for="s in categories" :key="s.key"
                    :class="['lp-faq-cat', activeCategory === s.key && 'is-active']"
                    @click="activeCategory = s.key">{{ s.cat }}
            </button>
          </div>

          <div class="lp-faq" v-if="visibleItems.length">
            <div v-for="it in visibleItems" :key="`${it.catKey}:${it.index}`"
                 :class="['lp-faq__item', isOpen(it.catKey, it.index) && 'is-open']">
              <button class="lp-faq__q" @click="toggle(it.catKey, it.index)">
                {{ it.q }}
                <span class="lp-faq__arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </span>
              </button>
              <div class="lp-faq__a">
                <div class="lp-faq__a-inner">{{ it.a }}</div>
              </div>
            </div>
          </div>
          <p v-else class="lp-faq-empty">{{ t('faq.noResults') }}</p>
        </div>
      </section>

      <!-- still stuck -->
      <section class="lp-section" id="contact">
        <div class="lp-container">
          <div class="lp-cta-final reveal" style="padding:clamp(28px,7vw,72px) clamp(20px,6vw,56px)">
            <div class="lp-cta-final__inner">
              <h2 style="font-size:clamp(32px,4vw,56px)">{{ t('faq.cta.title') }}</h2>
              <p>{{ t('faq.cta.body') }}</p>
              <div class="lp-hero__cta">
                <RouterLink class="lp-btn lp-btn--gold lp-btn--lg" to="/contact">{{ t('faq.cta.button') }}</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter/>
  </div>
</template>
