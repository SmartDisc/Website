<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeo } from '@/composables/useSeo'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

useScrollReveal()
useSeo('home.seo.title', 'home.seo.description')

const { t } = useI18n()

const pains = computed(() => [0, 1, 2, 3].map((i) => ({
  h: t(`home.problem.items.${i}.h`),
  p: t(`home.problem.items.${i}.p`),
})))
</script>

<template>
  <Atmosphere />
  <div class="lp-page">
    <SiteNav />
    <main>

      <!-- ===== HERO ===== -->
      <section class="lp-hero lp-container" id="top">
        <div class="lp-hero__top">
          <h1 class="lp-display reveal" data-d="1" style="max-width:14ch;text-wrap:balance;text-align:center">
            {{ t('home.hero.title') }}
          </h1>
          <p class="lp-lede reveal" data-d="2" style="text-align:center">
            {{ t('home.hero.lede') }}
          </p>

          <div class="lp-hero__cta reveal" data-d="3">
            <RouterLink class="lp-btn lp-btn--gold lp-btn--lg" to="/products">
              {{ t('home.hero.cta') }}
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- ===== ECOSYSTEM ===== -->
      <section class="lp-section lp-section--dark" id="disc">
        <div class="lp-container">
          <div class="lp-ecosystem">
            <div class="lp-ecosystem__copy">
              <h2 class="lp-h1 reveal" data-d="1" style="text-wrap:balance">
                {{ t('home.ecosystem.title') }}
              </h2>
              <p class="lp-lede reveal" data-d="2" style="margin-top:22px">
                {{ t('home.ecosystem.lede') }}
              </p>
            </div>
            <div class="lp-ecosystem__disc reveal" data-d="2">
              <img src="/frisbeeHandPicture.webp" :alt="t('home.ecosystem.imgAlt')" loading="lazy" decoding="async"/>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== PROBLEM ===== -->
      <section class="lp-section" id="problem">
        <div class="lp-container">
          <h2 class="lp-h1" style="margin-top:16px;max-width:100%;text-wrap:balance">
            {{ t('home.problem.title') }}
          </h2>
          <div class="lp-problem-list lp-problem-list--grid" style="margin-top:36px">
            <div v-for="(p,i) in pains" :key="p.h"
                 class="lp-problem-card reveal" :data-d="String((i%3)+1)">
              <h3>{{p.h}}</h3>
              <p>{{p.p}}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
