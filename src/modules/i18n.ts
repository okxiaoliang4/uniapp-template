import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

import messages from '@intlify/unplugin-vue-i18n/messages'

export function install(app: App) {
  const i18n = createI18n({
    legacy: true,
    locale: 'en-US',
    messages,
  })

  app.use(i18n)
}
