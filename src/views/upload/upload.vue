<template>
  <div class="upload-botton">
    <input type="file"
           style="display:none;color:red"
           ref="input"
           @change="change">
    <button @click="upload">上传文件</button>
  </div>

  <div class="drop"
       @drop.stop.prevent="handleDrop"
       @dragover.stop.prevent='handleDrag'>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import XLSX from 'xlsx'
import { getHeader } from '@/utils/excel2json.js'
import { isExcel } from '@/utils/isExcle.js'
const input = ref(null)
const upload = () => {
  input.value.click()
}
const change = (e) => {
  const file = e.target.files[0]
  // 文件为空返回
  if (!file) return
  uploadFile(file)
}
// 判断是否为excel表格不是返回 是解析表格
const uploadFile = (file) => {
  const isExcelFile = isExcel(file)
  if (!isExcelFile) return
  readerData(file)
}
const readerData = (file) => {
  const reader = new FileReader()
  reader.onload = function (e) {
    const data = e.target.result
    const workbook = XLSX.read(data, { type: 'array' })
    const sheets = workbook.SheetNames
    // 处理工作表
    sheets.forEach(sheet => {
      const worksheet = workbook.Sheets[sheet]
      // 解析出内容
      const sheetBody = XLSX.utils.sheet_to_json(worksheet)
      // 解析出表头
      const header = getHeader(worksheet)
      // 把数据上传到服务器
      console.log(sheetBody, header)
    })
  }
  reader.readAsArrayBuffer(file)
}
/* 拖拽事件处理 */
const handleDrag = (e) => {
  e.dataTransfer.dropEffect = 'copy'
}
const handleDrop = (e) => {
  const file = e.dataTransfer.files[0]
  if (!file) return
  uploadFile(file)
}
</script>
<style lang="scss" scoped>
.drop {
  border: 1px solid;
  height: 50px;
}
</style>
