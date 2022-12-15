import { createSSRApp } from 'vue'
import App from './App.vue'
import { install } from './modules/i18n'

// unocss
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  // register i18n module
  install(app)

  return {
    app,
  }
}
