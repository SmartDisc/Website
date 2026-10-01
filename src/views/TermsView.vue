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
        <h1>{{ t('terms.title') }}</h1>
        <p>{{ t('terms.subtitle') }}</p>
      </section>

      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div class="lp-prose">
            <span class="lp-prose__meta">{{ t('terms.meta') }}</span>

            <h2>{{ t('terms.s1.title') }}</h2>
            <p>
              {{ t('terms.s1.body') }}
            </p>

            <h2>{{ t('terms.s2.title') }}</h2>
            <h3>{{ t('terms.s2.pricingTitle') }}</h3>
            <p>
              {{ t('terms.s2.pricingBody') }}
            </p>
            <h3>{{ t('terms.s2.cancellationTitle') }}</h3>
            <i18n-t keypath="terms.s2.cancellationBody" tag="p">
              <template #email>
                <a href="mailto:smartdisc@mailo.com">smartdisc@mailo.com</a>
              </template>
            </i18n-t>
            <h3>{{ t('terms.s2.deliveryTitle') }}</h3>
            <p>
              {{ t('terms.s2.deliveryBody') }}
            </p>

            <h2>{{ t('terms.s3.title') }}</h2>
            <p>
              {{ t('terms.s3.body1') }}
            </p>
            <p>
              {{ t('terms.s3.body2') }}
            </p>

            <h2>{{ t('terms.s4.title') }}</h2>
            <p>{{ t('terms.s4.intro') }}</p>
            <ul>
              <li v-for="i in 4" :key="i">{{ t(`terms.s4.items.${i - 1}`) }}</li>
            </ul>

            <h2>{{ t('terms.s5.title') }}</h2>
            <h3>{{ t('terms.s5.returnTitle') }}</h3>
            <p>
              {{ t('terms.s5.returnBody') }}
            </p>
            <h3>{{ t('terms.s5.warrantyTitle') }}</h3>
            <p>
              {{ t('terms.s5.warrantyBody') }}
            </p>

            <h2>{{ t('terms.s6.title') }}</h2>
            <p>
              {{ t('terms.s6.body') }}
            </p>

            <h2>{{ t('terms.s7.title') }}</h2>
            <p>
              {{ t('terms.s7.body1') }}
            </p>
            <p>
              {{ t('terms.s7.body2') }}
            </p>

            <h2>{{ t('terms.s8.title') }}</h2>
            <p>
              {{ t('terms.s8.body1') }}
            </p>
            <p>{{ t('terms.s8.body2') }}</p>
            <i18n-t keypath="terms.s8.body3" tag="p">
              <template #link>
                <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>
              </template>
            </i18n-t>
            <p>{{ t('terms.s8.body4') }}</p>

            <h2>{{ t('terms.s9.title') }}</h2>
            <p>
              {{ t('terms.s9.body') }}
            </p>

            <h2>{{ t('terms.s10.title') }}</h2>
            <p>
              {{ t('terms.s10.intro') }}
              <a href="mailto:smartdisc@mailo.com">smartdisc@mailo.com</a><br/>
              {{ t('terms.s10.address') }}
            </p>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter/>
  </div>
</template>
