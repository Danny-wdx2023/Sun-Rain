<script setup lang="ts">
import { type TreeOption } from 'naive-ui'
import ProductDetailsNotSelectedYet from '@/components/ProductDetailsNotSelectedYet.vue'
import { api } from '@/utils'
const data = ref<TreeOption[]>([])
api('/api/category', data)

const selectedProduct = ref<number>(0)
const first = ref<boolean>(true)
const nodeProps = ({ option }: { option: TreeOption }) => ({
  onClick() {
    if (typeof option.key === 'number') {
      first.value = false
      selectedProduct.value = option.key
    }
  },
  onContextMenu() {},
})
</script>
<template>
  <main>
    <aside>
      <n-float-button
        size="small"
        :bottom="10"
        :right="10"
        type="primary"
        @click="$router.push('/products/grid-view')"
      >
        <i class="ri-gallery-view-2"></i>
      </n-float-button>
      <n-scrollbar style="max-height: 84vh">
        <n-tree
          block-line
          selectable
          show-line
          default-expand-all
          :node-props="nodeProps"
          :data
        ></n-tree>
      </n-scrollbar>
    </aside>
    <ProductDetails :id="selectedProduct" :empty="ProductDetailsNotSelectedYet" v-if="!first" />
    <section v-else>
      <img src="../assets/regionPhotos/USMap.jpg" alt="Region Photo" id="usmap" />
    </section>
  </main>
</template>
<style scoped>
main {
  position: absolute;
  inset: 14vh 4vw 0;
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 2vw;
}
.n-tree {
  font-size: medium;
}
.n-h2 {
  display: inline;
}
img,
.n-carousel {
  width: 100%;
  height: 100%;
}
#usmap {
  width: 80%;
  height: 80%;
  transform: translate(10%, 10%);
}
</style>
