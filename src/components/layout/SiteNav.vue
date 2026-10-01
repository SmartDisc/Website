<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'

const route = useRoute()
const { t, locale } = useI18n()
const menuOpen = ref(false)
const menuRef = ref(null)
const hamburgerRef = ref(null)

const links = computed(() => [
  { to: '/',         label: t('nav.home')     },
  { to: '/products', label: t('nav.products') },
  { to: '/about',    label: t('nav.about')    },
  { to: '/faq',      label: t('nav.faq')      },
  { to: '/contact',  label: t('nav.contact')  },
])

function isActive(to) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

// `restoreFocus` is only set for user-initiated closes (Escape / backdrop
// click) so a route-change close doesn't yank focus away from the new page.
function closeMenu(restoreFocus = false) {
  if (!menuOpen.value) return
  menuOpen.value = false
  if (restoreFocus) hamburgerRef.value?.focus()
}

function onKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) closeMenu(true)
}

watch(() => route.path, () => { menuOpen.value = false })

watch(menuOpen, async (open) => {
  // Lock/restore body scroll whenever the overlay opens or closes, no
  // matter what triggered the close, so it can never get stuck locked.
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    await nextTick()
    menuRef.value?.focus()
  }
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="lp-nav-wrap">
    <nav class="lp-nav" :aria-label="t('nav.ariaPrimary')">
      <RouterLink to="/" class="lp-nav__brand" :class="{ 'is-hidden': menuOpen }" :aria-label="t('nav.brandAria')">
        <img class="lp-nav__mark" src="/logoGold.png" :alt="t('nav.logoAlt')" />
      </RouterLink>
      <div class="lp-nav__links">
        <RouterLink
          v-for="l in links" :key="l.to"
          :to="l.to"
          :class="['lp-nav__link', isActive(l.to) && 'is-active']">
          {{ l.label }}
        </RouterLink>
      </div>
      <div class="lp-nav__lang" role="group" :aria-label="t('nav.langAria')">
        <button
          type="button"
          :class="['lp-nav__lang-btn', locale === 'en' && 'is-active']"
          :aria-pressed="String(locale === 'en')"
          :aria-label="t('nav.langEn')"
          @click="setLocale('en')">
          EN
        </button>
        <button
          type="button"
          :class="['lp-nav__lang-btn', locale === 'de' && 'is-active']"
          :aria-pressed="String(locale === 'de')"
          :aria-label="t('nav.langDe')"
          @click="setLocale('de')">
          DE
        </button>
      </div>
      <button
        ref="hamburgerRef"
        class="lp-nav__hamburger"
        :class="{ 'is-open': menuOpen }"
        :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
        :aria-expanded="String(menuOpen)"
        aria-controls="lp-mobile-menu"
        @click="toggleMenu">
        <span /><span /><span />
      </button>
    </nav>
    <div
      id="lp-mobile-menu"
      ref="menuRef"
      class="lp-mobile-menu"
      :class="{ 'is-open': menuOpen }"
      role="dialog"
      aria-modal="true"
      :aria-label="t('nav.mobileAria')"
      :aria-hidden="String(!menuOpen)"
      :inert="!menuOpen"
      tabindex="-1"
      @click.self="closeMenu(true)">
      <RouterLink
        v-for="(l, i) in links" :key="l.to"
        :to="l.to"
        :style="{ '--i': i }"
        :class="['lp-mobile-menu__link', isActive(l.to) && 'is-active']">
        {{ l.label }}
      </RouterLink>
      <div class="lp-mobile-menu__lang" role="group" :aria-label="t('nav.langAria')" :style="{ '--i': links.length }">
        <button
          type="button"
          :class="['lp-mobile-menu__lang-btn', locale === 'en' && 'is-active']"
          :aria-pressed="String(locale === 'en')"
          :aria-label="t('nav.langEn')"
          @click="setLocale('en')">
          EN
        </button>
        <button
          type="button"
          :class="['lp-mobile-menu__lang-btn', locale === 'de' && 'is-active']"
          :aria-pressed="String(locale === 'de')"
          :aria-label="t('nav.langDe')"
          @click="setLocale('de')">
          DE
        </button>
      </div>
    </div>
  </div>
</template>
