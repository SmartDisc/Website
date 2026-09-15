<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

useScrollReveal()

const { t } = useI18n()

const pains = computed(() => [0, 1, 2, 3].map((i) => ({
  h: t(`home.problem.items.${i}.h`),
  p: t(`home.problem.items.${i}.p`),
})))

const metricValues = [
  { v: '+35', wordUnit: false },
  { v: '100', wordUnit: false },
  { v: '4',   wordUnit: true  },
  { v: '1',   wordUnit: true  },
]

const metrics = computed(() => metricValues.map((m, i) => ({
  ...m,
  u: t(`home.metrics.items.${i}.u`),
  k: t(`home.metrics.items.${i}.k`),
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
      <section class="lp-section" id="disc">
        <div class="lp-container">
          <div style="text-align:center;max-width:780px;margin:0 auto">
            <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;text-wrap:balance">
              {{ t('home.ecosystem.title') }}
            </h2>
            <p class="lp-lede reveal" data-d="2" style="margin-top:22px;margin-left:auto;margin-right:auto">
              {{ t('home.ecosystem.lede') }}
            </p>
          </div>
          <div class="lp-ecosystem">
            <div class="lp-ecosystem__disc reveal" data-d="2">
              <img src="/frisbeeHandPicture.webp" :alt="t('home.ecosystem.imgAlt')" loading="lazy" decoding="async"/>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== PROBLEM (dark) ===== -->
      <section class="lp-section lp-section--dark" id="problem">
        <div class="lp-container">
          <div class="lp-problem-grid">
            <div>
              <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;max-width:16ch;text-wrap:balance">
                {{ t('home.problem.title') }}
              </h2>
              <p class="lp-lede reveal" data-d="2" style="margin-top:22px">
                {{ t('home.problem.lede') }}
              </p>
            </div>
            <div class="lp-problem-list">
              <div v-for="(p,i) in pains" :key="p.h"
                   class="lp-problem-card reveal" :data-d="String((i%3)+1)">
                <h3>{{p.h}}</h3>
                <p>{{p.p}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== HOW IT WORKS ===== -->
      <section class="lp-section" id="how">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <i18n-t keypath="home.how.title" tag="h2" class="lp-h1 reveal" data-d="1" style="margin-top:16px">
              <template #highlight>
                <span class="lp-kicker">{{ t('home.how.titleHighlight') }}</span>
              </template>
            </i18n-t>
          </div>
          <div class="lp-solution-steps">
            <div v-for="i in 3" :key="i" class="lp-step reveal" :data-d="String(i)">
              <h3>{{ t(`home.how.steps.${i - 1}.h`) }}</h3>
              <p>{{ t(`home.how.steps.${i - 1}.p`) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== METRICS (dark) ===== -->
      <section class="lp-section lp-section--dark" id="metrics">
        <div class="lp-container">
          <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:32px;flex-wrap:wrap">
            <div>
              <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;max-width:18ch;text-wrap:balance">
                {{ t('home.metrics.title') }}
              </h2>
            </div>
            <p class="lp-body reveal" data-d="2" style="max-width:44ch;color:var(--fg2-on-dark)">
              {{ t('home.metrics.note') }}
            </p>
          </div>
          <div class="lp-metrics">
            <div v-for="(m,i) in metrics" :key="i"
                 class="lp-metric reveal" :data-d="String((i%4)+1)">
              <div class="lp-metric__v">{{m.v}}<span v-if="!m.wordUnit" class="lp-metric__u">{{m.u}}</span></div>
              <div v-if="m.wordUnit" class="lp-metric__u lp-metric__u--block">{{m.u}}</div>
              <div class="lp-metric__k">{{m.k}}</div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
