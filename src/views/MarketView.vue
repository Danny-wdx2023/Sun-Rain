<script setup lang="ts">
import { api } from '@/utils'
const lastUpdate = ref<Date>(new Date())
const news = ref<{ lastUpdate?: string; news?: string[] }>({})
api('/data/news.json', news)
</script>
<template>
  <main>
    <n-h1><i class="ri-news-line"></i> 市场资讯</n-h1>
    <n-p>
      这里有最新的市场报告，这里有最专业的数据。如需了解最新资讯，请加微信👉。
      <img :src="`/productImages/wx.png`" alt="wx" id="wx" />
    </n-p>
    <img src="../assets/logs-chart.png" alt="logs-chart" />
    <img src="../assets/lumber-chart.png" alt="lumber-chart" />
    <n-p> 上次更新：<n-time :time="lastUpdate" :to="new Date()" type="relative"></n-time> </n-p>
    <n-h2> 往期回顾 </n-h2>
    <n-a v-for="n in news.news" :key="n" :href="`/data/news/${n}.zip`" download>{{ n }}<br /></n-a>
  </main>
</template>
<style scoped>
main {
  position: absolute;
  inset: 0 0 auto;
  margin: 14vh 4vw 0;
}
.n-p,
.n-a {
  font-size: large;
}
img#wx {
  position: fixed;
  top: 12vh;
  right: 6vw;
}
img {
  width: 30%;
}
</style>
