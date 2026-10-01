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
        <h1>{{ t('imprint.title') }}</h1>
        <p>{{ t('imprint.subtitle') }}</p>
      </section>

      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div class="lp-prose">

            <h2>{{ t('imprint.companyTitle') }}</h2>
            <p>
              <strong>SmartDisc</strong><br/>
              {{ t('imprint.companyAddress') }}
            </p>

            <h2>{{ t('imprint.contactTitle') }}</h2>
            <i18n-t keypath="imprint.contactEmail" tag="p">
              <template #email>
                <a href="mailto:smartdisc@mailo.com">smartdisc@mailo.com</a>
              </template>
            </i18n-t>

            <h2>{{ t('imprint.representativesTitle') }}</h2>
            <p>
              {{ t('imprint.representativesBody') }}
            </p>

            <h2>{{ t('imprint.editorialTitle') }}</h2>
            <p>
              {{ t('imprint.editorialNames') }}<br/>
              {{ t('imprint.editorialAddress') }}
            </p>

            <h2>{{ t('imprint.disputeTitle') }}</h2>
            <i18n-t keypath="imprint.disputeBody" tag="p">
              <template #link>
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>
              </template>
              <template #email>
                <a href="mailto:smartdisc@mailo.com">smartdisc@mailo.com</a>
              </template>
            </i18n-t>
            <p>
              {{ t('imprint.disputeBody2') }}
            </p>
            <p>
              {{ t('imprint.disputeBody3') }}
            </p>

            <h2>{{ t('imprint.contentTitle') }}</h2>
            <p>
              {{ t('imprint.contentBody') }}
            </p>

            <h2>{{ t('imprint.linksTitle') }}</h2>
            <p>
              {{ t('imprint.linksBody') }}
            </p>

            <h2>{{ t('imprint.copyrightTitle') }}</h2>
            <p>
              {{ t('imprint.copyrightBody') }}
            </p>

          </div>
        </div>
      </section>

    </main>
    <SiteFooter/>
  </div>
</template>
