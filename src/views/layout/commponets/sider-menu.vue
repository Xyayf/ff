<template>
  <div>
    <el-sub-menu :index='route.path'
                 v-if="route.children">
      <template #title>
        <span>{{route.meta.title}}</span>
      </template>
      <SiderMenu v-for="(item) in route.children"
                 :key="item.path"
                 :route='item'>></SiderMenu>
    </el-sub-menu>
    <el-menu-item v-else
                  :index='route.path'>{{route.meta.title}}
    </el-menu-item>

  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import SiderMenu from '@/views/layout/commponets/sider-menu.vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>
