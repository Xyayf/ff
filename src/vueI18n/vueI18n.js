import { createI18n } from 'vue-i18n'
// import store from '@/store/index.js'

const messages = {
  en: {
    message: {
      login: 'user login'
    }
  },
  zh: {
    message: {
      login: '用户登陆'
    }
  }
}

const i18n = createI18n({
  locale: 'zh', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

export default app => {
  app.use(i18n)
}
