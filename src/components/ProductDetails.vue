<script setup lang="ts">
const props = defineProps({
  id: {
    required: true,
    type: Number,
  },
  empty: {
    required: false,
    /* type: component */
  },
})

import type { ProductArray, Product } from '@/types/product'

const products: Ref<ProductArray> = inject('products', ref([]))
const product = computed<Product>(() => products.value[props.id - 1])
</script>
<template>
  <section v-if="props.id >= 1">
    <article>
      <n-h2>{{ product.name }}</n-h2>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;{{ product.slogan }}</span>
      <n-p>{{ product?.description }}</n-p>

      <n-divider></n-divider>
      <n-h2>产品参数</n-h2><br />
      <n-table>
        <thead>
          <tr>
            <th style="width: 20%">参数</th>
            <th>数据</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>学名</td>
            <td>{{ product.parameter.botanicalName }}</td>
          </tr>
          <tr>
            <td>等级</td>
            <td>{{ product.parameter.grade }}</td>
          </tr>
          <tr>
            <td>规格</td>
            <td>{{ product.parameter.spec }}</td>
          </tr>
        </tbody>
      </n-table>
    </article>
    <n-carousel show-arrow autoplay mousewheel keyboard draggable>
      <div class="img-container">
        <img
          :src="`/productImages/${product.name}/${img}`"
          :alt="`${product.name}${img[0]}`"
          v-for="img in product.photos"
          :key="img"
        />
      </div>
    </n-carousel>
  </section>
  <component :is="props.empty" v-else></component>
</template>
<style scoped>
section {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2vw;
}
.n-h2 {
  display: inline;
}
div.img-container {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  object-position: bottom;
}
img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
}
</style>
