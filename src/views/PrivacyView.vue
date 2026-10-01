<script setup>
import {useI18n} from 'vue-i18n'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

const {t} = useI18n()
</script>

<template>
  <Atmosphere/>
  <div class="lp-page">
    <SiteNav/>
    <main>

      <section class="lp-container lp-pagehero">
        <h1>{{ t('privacy.title') }}</h1>
        <p>{{ t('privacy.subtitle') }}</p>
      </section>

      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div class="lp-prose">
            <span class="lp-prose__meta">{{ t('privacy.meta') }}</span>

            <h2>{{ t('privacy.s1.title') }}</h2>
            <p>
              {{ t('privacy.s1.body') }}
            </p>
            <i18n-t keypath="privacy.s1.contact" tag="p">
              <template #email>
                <a href="mailto:smartdisc@mailo.com">smartdisc@mailo.com</a>
              </template>
            </i18n-t>

            <h2>{{ t('privacy.s2.title') }}</h2>
            <h3>{{ t('privacy.s2.visitorsTitle') }}</h3>
            <p>
              {{ t('privacy.s2.visitorsBody') }}
            </p>
            <h3>{{ t('privacy.s2.customersTitle') }}</h3>
            <p>{{ t('privacy.s2.customersIntro') }}</p>
            <ul>
              <li v-for="i in 4" :key="i">{{ t(`privacy.s2.customersItems.${i - 1}`) }}</li>
            </ul>
            <h3>{{ t('privacy.s2.appTitle') }}</h3>
            <p>
              {{ t('privacy.s2.appBody') }}
            </p>

            <h2>{{ t('privacy.s3.title') }}</h2>
            <ul>
              <li v-for="i in 4" :key="i">
                <strong>{{ t(`privacy.s3.items.${i - 1}.term`) }}</strong>{{ t(`privacy.s3.items.${i - 1}.desc`) }}
              </li>
            </ul>
            <p>
              {{ t('privacy.s3.body') }}
            </p>

            <h2>{{ t('privacy.s4.title') }}</h2>
            <i18n-t keypath="privacy.s4.body" tag="p">
              <template #contract>
                <strong>{{ t('privacy.s4.contract') }}</strong>
              </template>
              <template #legitimate>
                <strong>{{ t('privacy.s4.legitimate') }}</strong>
              </template>
              <template #consent>
                <strong>{{ t('privacy.s4.consent') }}</strong>
              </template>
            </i18n-t>

            <h2>{{ t('privacy.s5.title') }}</h2>
            <p>
              {{ t('privacy.s5.body') }}
            </p>

            <h2>{{ t('privacy.s6.title') }}</h2>
            <p>{{ t('privacy.s6.intro') }}</p>
            <ul>
              <li v-for="i in 6" :key="i">{{ t(`privacy.s6.items.${i - 1}`) }}</li>
            </ul>
            <p>
              {{ t('privacy.s6.body') }}
            </p>

            <h2>{{ t('privacy.s7.title') }}</h2>
            <p>
              {{ t('privacy.s7.body') }}
            </p>

            <h2>{{ t('privacy.s8.title') }}</h2>
            <p>
              {{ t('privacy.s8.body') }}
            </p>

            <h2>{{ t('privacy.s9.title') }}</h2>
            <p>
              {{ t('privacy.s9.body') }}
            </p>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter/>
  </div>
</template>
