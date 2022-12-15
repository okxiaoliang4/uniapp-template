/**
 * define the resource schema
 */

import enUS from '@/locales/en-US.json'
import zhCN from '@/locales/zh-CN.json'

// define message schema as master mesage schema
export type MessageSchema = typeof enUS | typeof zhCN

declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {
    hello: string
    menu: {
      login: string
    }
    errors: string[]
  }
}