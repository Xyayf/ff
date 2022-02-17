<template>
  <div class="sider-contanier">
    <el-menu :default-active="route"
             class="el-menu-vertical-demo"
             :collapse="isCollapse"
             @open="handleOpen"
             router>
      <SiderMenu v-for="(item) in routes"
                 :key="item.path"
                 :route='item'>
      </SiderMenu>
    </el-menu>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRoutes } from '@/utils/filterroutes.js'
import SiderMenu from '@/views/layout/commponets/sider-menu.vue'
const router = useRouter()
const routes = computed(() => {
  // console.log(getChildRoutes(router.getRoutes()))比下面的console.log(routes)后输出但下面的.value仍然可以输出计算后的值
  return filterRoutes(router.getRoutes())
})
const route = computed(() => useRoute().path)// 必须这么用
// const route = useRoute().path不能用不是响应式的
console.log(useRoute().matched)
const isCollapse = ref(false)
const handleOpen = (index) => { console.log(index) }
</script>
