<script setup lang="ts">
import { api } from '@/utils'
const lastUpdate = ref<Date>(new Date(0))
api('/api/newsLastUpdate', lastUpdate)
</script>
<template>
  <main>
    <n-h1><i class="ri-news-line"></i> 市场资讯</n-h1>
    <n-p>这里有最新的市场报告，这里有最专业的数据。一个月一更新。欲获取，请加微信：13917800231</n-p>
    <n-p> 上次更新：<n-time :time="lastUpdate" :to="new Date()" type="relative"></n-time> </n-p>
  </main>
</template>
<style scoped>
main {
  position: absolute;
  inset: 0 0 auto;
  margin: 14vh 4vw 0;
}
</style>
