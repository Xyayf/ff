
import { TOKEN } from '@/const/index.js'
import { setItem, getItem } from '@/utils/storage.js'
import { login } from '@/api/sys.js'
import md5 from 'md5'
import router from '@/router/index.js'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken (state, token) {
      // 存入store
      state.token = token
      console.log(token)
      // 缓存
      setItem(TOKEN, token)
    },
    setUserInfo (state, res) {
      state.userInfo = res
    }
  },
  actions: {
    Login (context, loginInfo) {
      const { phone, pass } = loginInfo
      return new Promise((resolve, reject) => {
        login(phone, md5(pass)).then((data) => {
          context.commit('setToken', data.token)
          // console.log(router.beforeEach)
          router.push('/')
          resolve(data)
        }
        ).catch((err) => reject(err))
      })
    }
  }
}
