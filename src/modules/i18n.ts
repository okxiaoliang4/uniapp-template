import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

import enUS from '../locales/en.json'
import zhCN from '../locales/zh-CN.json'

export const install = (app: App) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en-US',
    messages: {
      'en-US': enUS,
      'zh-CN': zhCN,
    },
  })

  app.use(i18n)
}
