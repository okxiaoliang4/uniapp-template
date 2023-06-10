import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

import messages from '@intlify/unplugin-vue-i18n/messages'

export const install = (app: App) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en-US',
    messages,
  })

  app.use(i18n)
}
