export default {
  namespaced: true,
  state: () => ({
    lang: 'zh'
  }),
  mutations: {
    changeLang (state, lang) {
      state.lang = lang
      console.log(state.lang)
    }
  }

}
