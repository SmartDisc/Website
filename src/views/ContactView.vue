<script setup>
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import LIcon from '@/components/ui/LIcon.vue'

useScrollReveal()

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

      <!-- contact cards -->
      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div class="lp-contact-grid">

            <!-- email -->
            <div class="lp-contact-feature reveal" data-d="1">
              <div style="position:relative">
                <span class="lp-contact-feature__ic">
                  <LIcon name="mail" :size="22" :stroke="1.75"/>
                </span>
                <h2 class="lp-contact-feature__heading">smartdisc@mailo.com</h2>
                <p class="lp-contact-feature__body">
                  {{ t('contact.email.body') }}
                </p>
                <div class="lp-contact-feature__promise">
                  <LIcon name="zap" :size="12" :stroke="2"/>
                  {{ t('contact.email.promise') }}
                </div>
              </div>
            </div>

            <!-- phone -->
            <div class="lp-contact-feature lp-contact-feature--light reveal" data-d="2">
              <div style="position:relative">
                <span class="lp-contact-feature__ic lp-contact-feature__ic--ink">
                  <LIcon name="phone" :size="22" :stroke="1.75"/>
                </span>
                <h2 class="lp-contact-feature__heading lp-contact-feature__heading--ink">+43 677 6209 2117</h2>
                <p class="lp-contact-feature__body lp-contact-feature__body--ink">
                  {{ t('contact.phone.body') }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
