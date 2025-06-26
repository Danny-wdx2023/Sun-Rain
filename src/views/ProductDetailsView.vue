<script setup lang="ts">
import ProductDetailsNotFound from '@/components/ProductDetailsNotFound.vue'

const id: number = parseInt(useRoute().params.id as string)
</script>
<template>
  <main>
    <ProductDetails :id="id" :empty="ProductDetailsNotFound" />
  </main>
</template>

<style scoped>
main {
  position: absolute;
  inset: 0 0;
  margin: 14vh 4vw 2vh;
}
</style>
