import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000

})
service.interceptors.response.use((response) => {
  // 发送成功
  const { code } = response.data
  if (code === 200) return response.data
  else {
    const { message } = response.data
    ElMessage(message)
    return Promise.reject(new Error(message))
  }
}, err => {
  Promise.reject(err)
})
export default service
