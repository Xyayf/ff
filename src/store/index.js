import { createStore } from 'vuex'
import user from '@/store/user.js'
import i18nv9 from '@/store/i18n.js'
import getters from './getters'

export default createStore({
  getters,
  modules: {
    user,
    i18nv9
  }
})
