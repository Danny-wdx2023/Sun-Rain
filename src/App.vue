<script setup lang="ts">
import { type ProductArray } from '@/types/product'
import { dateZhCN, zhCN } from 'naive-ui'
import jsonProducts from '@/assets/data/products.json'
const products = ref<ProductArray>(jsonProducts || [])
onMounted(() => {
  provide('products', products)
})
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <div id="root">
      <header>
        <div id="left">
          <img src="/logo-rect.jpg" alt="Sun-Rain" />
          <!-- <SearchProducts></SearchProducts> -->
        </div>
        <NavBar />
      </header>
      <RouterView />
    </div>
  </n-config-provider>
</template>

<style scoped>
header {
  position: fixed;
  inset: 0 0 auto;
  padding: 18px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6vw;
  z-index: 3;
  border-radius: 4px;
  box-shadow: 0 4px 20px lightgray;
}
div#left {
  display: flex;
  align-items: center;
  gap: 2vw;
}
img {
  width: 50%;
  display: inline;
  transform: translateY(-4px);
}
.n-input {
  width: 40%;
}
</style>
