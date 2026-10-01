import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/** Sync <title> and the description meta tag to a page's seo.title / seo.description i18n keys. */
export function useSeo(titleKey, descriptionKey) {
  const { t } = useI18n()

  watchEffect(() => {
    document.title = t(titleKey)
    setMetaTag('description', t(descriptionKey))
  })
}
