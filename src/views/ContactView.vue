<script setup>
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useSeo } from '@/composables/useSeo'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import LIcon from '@/components/ui/LIcon.vue'

useScrollReveal()
useSeo('contact.seo.title', 'contact.seo.description')

const { t } = useI18n()
</script>

<template>
  <Atmosphere />
  <div class="lp-page">
    <SiteNav />
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <i18n-t keypath="contact.hero.title" tag="h1" class="reveal" data-d="1">
          <template #highlight>
            <em>{{ t('contact.hero.titleHighlight') }}</em>
          </template>
        </i18n-t>
        <p class="reveal lp-container" data-d="2">
          {{ t('contact.hero.lede') }}
        </p>
      </section>

      <!-- contact info -->
      <section class="lp-section lp-section--tight" style="padding-top:0">
        <div class="lp-container">
          <div class="lp-contact-feature reveal" data-d="1" style="margin-top:0">

            <!-- email -->
            <div class="lp-contact-feature__col">
              <h2 class="lp-contact-feature__heading">smartdisc@mailo.com</h2>
              <p class="lp-contact-feature__body">
                {{ t('contact.email.body') }}
              </p>
              <div class="lp-contact-feature__promise">
                <LIcon name="zap" :size="12" :stroke="2"/>
                {{ t('contact.email.promise') }}
              </div>
            </div>

            <!-- phone -->
            <div class="lp-contact-feature__col">
              <h2 class="lp-contact-feature__heading">+43 677 6209 2117</h2>
              <p class="lp-contact-feature__body">
                {{ t('contact.phone.body') }}
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
