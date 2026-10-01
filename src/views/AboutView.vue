<script setup>
import {computed} from 'vue'
import {useI18n} from 'vue-i18n'
import {useScrollReveal} from '@/composables/useScrollReveal'
import {useSeo} from '@/composables/useSeo'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

useScrollReveal()
useSeo('about.seo.title', 'about.seo.description')

const {t} = useI18n()

// photo: optional path to an image in public/, e.g. '/team/petra.jpg' — shown instead of the initials
const teamMembers = [
  {i: 'PP', n: 'Petra Palinkas', c: '#1d3d72', photo: ''},
  {i: 'EV', n: 'Elias Vavra', c: '#b8924f', photo: ''},
  {i: 'EW', n: 'Erik Weidenauer', c: '#6f93b5', photo: ''},
  {i: 'CS', n: 'Clemens Saurugg', c: '#3f9d6d', photo: ''},
  {i: 'T', n: 'Tobias Weidmann', c: '#b8924f', photo: ''}
]

const team = computed(() => teamMembers.map((m, i) => ({
  ...m,
  r: t(`about.team.roles.${i}`),
})))

// founder + co-founder get a larger, featured spot above the rest of the team
const teamLead = computed(() => team.value.slice(0, 2))
const teamRest = computed(() => team.value.slice(2))

const timelineYears = ['2024', '2025', '2025', '2025', '2026']

const timeline = computed(() => timelineYears.map((year, i) => ({
  year,
  h: t(`about.timeline.items.${i}.h`),
  p: t(`about.timeline.items.${i}.p`),
})))
</script>

<template>
  <Atmosphere/>
  <div class="lp-page">
    <SiteNav/>
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <i18n-t keypath="about.hero.title" tag="h1" class="reveal" data-d="1">
          <template #highlight>
            <em>{{ t('about.hero.titleHighlight') }}</em>
          </template>
        </i18n-t>
        <p class="lp-container" data-d="2">
          {{ t('about.hero.lede') }}
        </p>
      </section>

      <!-- timeline -->
      <section class="lp-section lp-section--tight" id="timeline">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <h2 class="lp-h2 reveal" data-d="1" style="margin-top:16px">{{ t('about.timeline.title') }}</h2>
          </div>
          <div class="lp-timeline">
            <div v-for="(it,i) in timeline" :key="i" class="lp-timeline__item reveal" data-d="1">
              <div class="lp-timeline__year">{{ it.year }}</div>
              <div class="lp-timeline__body">
                <h4>{{ it.h }}</h4>
                <p>{{ it.p }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- team -->
      <section class="lp-section lp-section--tight" id="team">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <h2 class="lp-h2 reveal" data-d="1" style="margin-top:16px">{{ t('about.team.title') }}</h2>
          </div>
          <div class="lp-team-lead">
            <div v-for="m in teamLead" :key="m.n" class="lp-team-card lp-team-card--lg reveal" data-d="1">
              <div class="lp-team-card__avatar"
                   :style="m.photo ? null : { background: `linear-gradient(135deg,${m.c},${m.c}cc)` }">
                <img v-if="m.photo" :src="m.photo" :alt="m.n"/>
                <template v-else>{{ m.i }}</template>
              </div>
              <h4>{{ m.n }}</h4>
              <p>{{ m.r }}</p>
            </div>
          </div>
          <div class="lp-team">
            <div v-for="m in teamRest" :key="m.n" class="lp-team-card reveal" data-d="1">
              <div class="lp-team-card__avatar"
                   :style="m.photo ? null : { background: `linear-gradient(135deg,${m.c},${m.c}cc)` }">
                <img v-if="m.photo" :src="m.photo" :alt="m.n"/>
                <template v-else>{{ m.i }}</template>
              </div>
              <h4>{{ m.n }}</h4>
              <p>{{ m.r }}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter/>
  </div>
</template>
