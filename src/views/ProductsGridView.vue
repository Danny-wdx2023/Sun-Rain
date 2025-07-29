<script setup lang="ts">
import { type ProductArray } from '@/types/product'

const products: Ref<ProductArray> = inject('products', ref([]))
</script>
<template>
  <main>
    <n-float-button
      size="small"
      :bottom="10"
      :right="10"
      type="primary"
      @click="$router.push('/products')"
    >
      <i class="ri-layout-left-line"></i>
    </n-float-button>
    <n-card :title="product.name" v-for="product in products" :key="product.id" hoverable embedded>
      <template #header-extra>
        <span>{{ product.slogan }}</span>
      </template>
      <span>{{ product.description }} <br /><br /></span>
      <div class="img">
        <n-image-group>
          <n-image
            :width="120"
            :src="`/productImages/${product.name}/${img}`"
            :alt="`${product.name}${product.id}`"
            v-for="img in product.photos"
            :key="img"
          />
        </n-image-group>
      </div>
      <template #action>
        <n-button @click="$router.push(`/products/${product.id}`)">
          查看详情 <i class="ri-arrow-right-line"></i>
        </n-button>
      </template>
    </n-card>
  </main>
</template>
<style scoped>
main {
  margin: 20vh 4vw 0;
  columns: 3;
}
.n-card {
  display: inline-block;
  margin-bottom: 4vh;
}
div.img {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.n-button {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
