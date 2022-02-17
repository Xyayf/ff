<template>
  <div class="app-contanier">
    <div class="right">
      <Sider>
      </Sider>
    </div>
    <div class="left">
      <Header></Header>
      <Content></Content>
    </div>
  </div>

</template>
<script setup>
import Sider from '@/views/layout/commponets/sider.vue'
import Header from '@/views/layout/commponets/header.vue'
import Content from '@/views/layout/commponets/content.vue'

</script>
<style lang="scss" scoped>
.app-contanier {
  display: grid;
  grid-template-columns: 2.5rem 7.5rem;
  .left {
    display: grid;
    grid-template-rows: 20vh 80vh;
  }
}
</style>
