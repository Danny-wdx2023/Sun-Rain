<script setup lang="ts">
import MiniSearch, { type SearchResult } from 'minisearch'
import type { Product, ProductArray } from '@/types/product'
const show = ref<boolean>(false)
const query = ref<string>('')
const minisearch = new MiniSearch({
  fields: ['name', 'botanicalName', 'grade'],
  storeFields: ['id', 'name'],
  searchOptions: {
    boost: { name: 2 },
    fuzzy: 0.2,
    prefix: true,
  },
})
type ProductItem = {
  id: number
  name: string
  botanicalName: string
  grade: string
}
const products: ProductItem[] = inject<Ref<ProductArray>>('products', ref([])).value.map(
  (x: Product) => ({
    id: x.id,
    name: x.name,
    botanicalName: x.parameter.botanicalName,
    grade: x.parameter.grade,
  }),
)
minisearch.addAll(products)

const result = ref<SearchResult[]>([])
let timer: number | null = null // debounce
const handleChange = () => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    result.value = minisearch.search(query.value)
  }, 1000)
}
</script>
<template>
  <n-button round @click="show = true"><i class="ri-search-line"></i>&nbsp;&nbsp;搜索</n-button>
  <n-modal
    v-model:show="show"
    transform-origin="center"
    preset="card"
    style="width: 60vw; height: 80vh"
    title="搜索"
    :bordered="false"
    size="huge"
  >
    <n-input
      v-model:value="query"
      placeholder="请输入关键词..."
      size="large"
      @input="handleChange"
    ></n-input>
    <n-list hoverable clickable>
      <n-list-item v-for="res in result" :key="res.id">
        <n-thing :title="res.name" style="margin-top: 10px">
          <template #description>
            <n-space size="small" style="margin-top: 4px">
              <n-tag :bordered="false" type="info" size="small"> 暑夜 </n-tag>
              <n-tag :bordered="false" type="info" size="small"> 晚春 </n-tag>
            </n-space>
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
  </n-modal>
</template>
<style scoped></style>
