<script setup lang="ts">
import { api } from '@/utils'
import { useRoute, useRouter } from 'vue-router'
const show = ref<boolean>(false)
const query = ref<string>('')
const loading = ref<boolean>(false)

type ResType = {
  id: number
  name: string
  botanicalName: string
  grade: string
}
const result = ref<ResType[]>([])

let timer: number | null = null // debounce
const handleChange = () => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    loading.value = true
    setTimeout(() => {
      api(`/api/search?q=${query.value}`, result)
      loading.value = false
    }, 500)
  }, 1000)
}

const router = useRouter()
const route = useRoute()
const handle = (id: number) => {
  router.push(`/products/${id}`)
  if (route.fullPath.startsWith('/products/')) {
    setTimeout(() => location.reload(), 10)
  }
  show.value = false
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
      :loading
      autofocus
    ></n-input>
    <n-scrollbar v-if="result.length" style="max-height: 58vh; margin-top: 2vh">
      <n-list hoverable clickable>
        <n-list-item v-for="res in result" :key="res.id" @click="handle(res.id)">
          <n-thing :title="res.name">
            <template #description>
              <n-space size="small" style="margin-top: 4px">
                <n-tag :bordered="false" type="info" size="small">
                  {{ res.name.slice(-2) == '锯材' ? '锯材' : res.name.slice(-2) }}
                </n-tag>
                <n-tag :bordered="false" type="info" size="small">
                  {{ res.botanicalName || '/' }}
                </n-tag>
                <n-tag :bordered="false" type="info" size="small"> {{ res.grade || '/' }} </n-tag>
              </n-space>
            </template>
          </n-thing>
        </n-list-item>
      </n-list>
    </n-scrollbar>
    <n-empty description="无数据" style="margin-top: 16%" size="huge" v-else></n-empty>
  </n-modal>
</template>
