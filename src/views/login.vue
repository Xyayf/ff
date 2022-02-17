<template>
  <div class="login-container">
    <div class="container"
         v-loading="loading">
      <h3>{{ $t("message.login") }}</h3>
      <el-form ref="ruleFormRef"
               :model="ruleForm"
               status-icon
               :rules="rules"
               class="demo-ruleForm">
        <el-form-item prop="phone">
          <span>
            <el-icon>
              <avatar />
            </el-icon>
          </span>
          <el-input v-model="ruleForm.phone"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-icon>
            <lock />
          </el-icon>
          <el-input v-model="ruleForm.pass"
                    type="password"
                    autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <el-button type="danger"
                 round
                 @click=Login>登陆

      </el-button>

      <el-button type="danger"
                 v-for="(item,index) in lang"
                 :key="index"
                 round
                 @click=language(item.lang)>{{item.language}}

      </el-button>
    </div>

  </div>

</template>
<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
// import {  } from '@/vueI18n/vueI18n.js'
// 可用改变语言
import { useI18n } from 'vue-i18n'
// import axios from 'axios'
const loading = ref(false)
const store = useStore()
const ruleFormRef = ref(null)
const ruleForm = reactive({
  phone: '13990822769',
  pass: 'LYP19961021'

})
const validatePhone = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    const reg = /^1(3[0-9]|5[0-9]|8[0-9])[0-9]{8}$/
    if (!reg.test(value)) {
      callback(new Error('输入正确号码'))
      alert('请输入正确手机号')
      ruleForm.phone = ''
      return
      // ruleFormRef.value.resetFields()
    }
  }
  callback()
}
const validatePass = (rule, value, callback) => {
  if (ruleForm.phone === '') {
    callback(new Error('输入正确号码'))
    alert('请输入手机号')
  } else {
    if (ruleForm.pass.length < 8) {
      callback(new Error('密码必须大于8位数'))
      alert('密码必须大于8位数')
      ruleForm.pass = ''
      return
    }
    callback()
  }
}

const rules = reactive({
  phone: [{ validator: validatePhone, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }]

})
// 登陆
const Login = () => {
  if (ruleForm.phone === '' || ruleForm.pass === '') return
  console.log(store)
  store.dispatch('user/Login', ruleForm)
}
// const version = require('element-plus/package.json').version
// const url = `https://unpkg.com/element-plus@${version}/dist/index.css`
// axios(url).then(res => {
//   console.log(res.data)
// })

// 改变语言
const lang = reactive([
  { lang: 'zh', language: '中文' },
  { lang: 'en', language: 'English' }
])
const { locale } = useI18n({ useScope: 'global' })

const language = (lang) => {
  // console.log(lang)
  locale.value = lang
  store.commit('i18nv9/changeLang', lang)
}
</script>
<style lang="scss" scoped>
@import "@/style/variable.scss";
.login-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: $back-ground;
  .container {
    margin: 0 auto;
    height: 5rem;
    width: 3rem;
    transform: translateY(50%);
  }
}

.el-form-item {
  background-color: wheat;
}
.el-form-item::v-deep .el-form-item__content {
  flex-wrap: nowrap;
}
.el-input::v-deep .el-input__inner {
  border: 0;
  border-radius: 0;
  outline: none;
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.6);
}
.el-button.is-round {
  width: 3rem;
}
</style>
