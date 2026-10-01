<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeo } from '@/composables/useSeo'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import LIcon from '@/components/ui/LIcon.vue'

useScrollReveal()
useSeo('products.seo.title', 'products.seo.description')

const { t } = useI18n()

const products = computed(() => [
  {
    id: 'disc', featured: true, status: 'preorder', art: 'disc',
    cat: t('products.disc.cat'),
    name: t('products.disc.name'),
    tag: t('products.disc.tag'),
    price: t('products.disc.price'),
    priceSuffix: t('products.disc.priceSuffix'),
    highlights: [
      t('products.disc.highlights.0'),
      t('products.disc.highlights.1'),
      t('products.disc.highlights.2'),
    ],
  },
])
</script>

<template>
  <Atmosphere />
  <div class="lp-page">
    <SiteNav />
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <i18n-t keypath="products.hero.title" tag="h1" class="reveal" data-d="1">
          <template #highlight>
            <em>{{ t('products.hero.titleHighlight') }}</em>
          </template>
        </i18n-t>
        <p class="reveal lp-container" data-d="2">
          {{ t('products.hero.lede') }}
        </p>
      </section>

      <!-- products grid -->
      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div class="lp-products">
            <article v-for="p in products" :key="p.id" :id="p.id"
                     :class="['lp-product reveal', p.featured && 'lp-product--featured']" data-d="1">
              <!-- art -->
              <div class="lp-product__art">
                <div class="lp-product__art-inner">
                  <div v-if="p.art==='disc'" class="lp-disc-art lp-disc-art--static">
                    <img src="/productDisc.webp" :alt="t('products.disc.imgAlt')" loading="lazy" decoding="async" />
                  </div>
                  <div v-else-if="p.art==='disc-pro'" class="lp-disc-art">
                    <img src="/SmartDisc_Mark.png" :alt="t('products.discPro.imgAlt')" style="filter:drop-shadow(0 30px 40px rgba(16,42,87,.35)) hue-rotate(-10deg) contrast(1.05)"/>
                  </div>
                  <svg v-else-if="p.art==='phone'" viewBox="0 0 320 220" style="width:55%;max-width:200px;filter:drop-shadow(0 24px 40px rgba(10,28,61,.25))">
                    <defs><linearGradient id="phone1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d3d72"/><stop offset="1" stop-color="#0a1c3d"/></linearGradient></defs>
                    <rect x="105" y="14" width="110" height="192" rx="26" fill="url(#phone1)"/>
                    <rect x="113" y="26" width="94" height="158" rx="10" fill="rgba(255,255,255,.94)"/>
                    <rect x="143" y="16" width="34" height="6" rx="3" fill="rgba(255,255,255,.5)"/>
                    <circle cx="160" cy="100" r="26" fill="none" stroke="#b8924f" stroke-width="6"/>
                    <path d="M160 88v24l16 9" stroke="#1d3d72" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                  </svg>
                  <svg v-else-if="p.art==='dock'" viewBox="0 0 320 220" style="width:85%;max-width:360px;filter:drop-shadow(0 24px 40px rgba(10,28,61,.25))">
                    <defs>
                      <linearGradient id="dock1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d3d72"/><stop offset="1" stop-color="#0a1c3d"/></linearGradient>
                      <linearGradient id="dock2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0e3c0"/><stop offset=".5" stop-color="#dec38c"/><stop offset="1" stop-color="#b8924f"/></linearGradient>
                    </defs>
                    <ellipse cx="160" cy="180" rx="140" ry="14" fill="rgba(10,28,61,.18)"/>
                    <rect x="40" y="60" width="240" height="120" rx="60" fill="url(#dock1)"/>
                    <rect x="40" y="60" width="240" height="22" rx="60" fill="rgba(255,255,255,.08)"/>
                    <g v-for="x in [80,130,180,230]" :key="x">
                      <circle :cx="x" cy="120" r="22" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.15)"/>
                      <circle :cx="x" cy="120" r="5" fill="url(#dock2)"/>
                    </g>
                    <rect x="148" y="44" width="24" height="18" rx="3" fill="url(#dock1)"/>
                  </svg>
                  <svg v-else-if="p.art==='case'" viewBox="0 0 320 220" style="width:85%;max-width:340px;filter:drop-shadow(0 22px 36px rgba(10,28,61,.25))">
                    <defs><linearGradient id="case1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#102a57"/><stop offset="1" stop-color="#0a1c3d"/></linearGradient></defs>
                    <rect x="30" y="50" width="260" height="150" rx="22" fill="url(#case1)"/>
                    <rect x="40" y="60" width="240" height="130" rx="18" fill="none" stroke="rgba(255,255,255,.15)"/>
                    <path d="M30 95 L 290 95" stroke="rgba(255,255,255,.25)" stroke-dasharray="4 4"/>
                    <rect x="220" y="86" width="50" height="16" rx="8" fill="rgba(222,195,140,.6)"/>
                    <circle cx="240" cy="94" r="3" fill="#102a57"/>
                  </svg>
                  <svg v-else-if="p.art==='bundle'" viewBox="0 0 320 220" style="width:85%;max-width:360px;filter:drop-shadow(0 24px 40px rgba(10,28,61,.25))">
                    <defs><linearGradient id="b1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0e3c0"/><stop offset="1" stop-color="#b8924f"/></linearGradient></defs>
                    <g v-for="i in 5" :key="i" :transform="`translate(${50+(i-1)*22},${60+(i-1)*6})`">
                      <ellipse cx="120" cy="60" rx="100" ry="22" fill="url(#b1)" :opacity="0.35+(i-1)*0.13"/>
                      <ellipse cx="120" cy="56" rx="60" ry="10" fill="rgba(255,255,255,.4)" :opacity="0.35+(i-1)*0.13"/>
                    </g>
                  </svg>
                </div>
              </div>

              <!-- copy -->
              <div class="lp-product__copy">
               
                <h3 class="lp-product__name">{{p.name}}</h3>
                <p class="lp-product__tag">{{p.tag}}</p>
                <ul class="lp-product__highlights">
                  <li v-for="h in p.highlights" :key="h"><LIcon name="check" :size="14" :stroke="2.5"/> {{h}}</li>
                </ul>
                <div class="lp-product__price-row">
                  <div :class="['lp-product__price', p.free && 'lp-product__price--free']">
                    <template v-if="p.free">{{ t('products.free') }} <small>{{ t('products.freeSuffix') }}</small></template>
                    <template v-else>{{p.price}}<small>{{p.priceSuffix}}</small></template>
                  </div>
                </div>
                <div class="lp-product__cta">
                  <RouterLink class="lp-btn lp-btn--gold lp-btn--md" to="/contact">{{ t('products.cta') }}</RouterLink>
                </div>
              </div>
            </article>
          </div>

          <!-- app callout -->
          <div id="app" class="app-callout reveal">
            <div class="app-callout__copy">
              <h3 class="app-callout__heading">
                {{ t('products.appCallout.heading') }}
              </h3>
              <p class="app-callout__body">
                {{ t('products.appCallout.body') }}
              </p>
            </div>
            <img src="/IphoneMockupLandingScreen.webp" :alt="t('products.appCallout.imgAlt')" loading="lazy" decoding="async">
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-callout {
  margin-top: 32px;
  border-radius: var(--r-lg);
  background: transparent;
  color: var(--ink);
  padding: 56px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 40px;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.app-callout__copy { position: relative; }
.app-callout__heading {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 42px;
  letter-spacing: -.025em;
  line-height: 1.05;
  margin: 16px 0 14px;
  max-width: 16ch;
  color: var(--ink);
}
.app-callout__body {
  font-family: var(--font-body);
  font-size: 17px;
  color: var(--fg2);
  line-height: 1.55;
  margin: 0 0 24px;
  max-width: 44ch;
}
.app-callout__phone { display: flex; justify-content: center; position: relative; }

@media (max-width: 720px) {
  .app-callout {
    grid-template-columns: 1fr;
    padding: 36px 28px;
  }
}
@media (max-width: 480px) {
  .app-callout { padding: 28px 20px; }
  .app-callout__heading { font-size: 28px; }
}
</style>
