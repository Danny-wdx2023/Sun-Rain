<script setup lang="ts">
import { renderIcon } from '@/utils'
import { RouterLink } from 'vue-router'
import { type MenuOption } from 'naive-ui'
const options: MenuOption[] = [
  {
    label: () => h(RouterLink, { to: '/' }, '首页'),
    key: 'home',
    icon: renderIcon('ri-home-line'),
  },
  {
    label: () => h(RouterLink, { to: '/products' }, '产品'),
    key: 'products',
    icon: renderIcon('ri-lightbulb-line'),
  },
  {
    label: () => h(RouterLink, { to: '/market' }, '市场'),
    key: 'market',
    icon: renderIcon('ri-store-line'),
  },
  {
    label: () => h(RouterLink, { to: '/contact' }, '联系'),
    key: 'contact',
    icon: renderIcon('ri-phone-line'),
  },
]
const activeKey = ref<string>('home')
</script>

<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options></n-menu>
</template>

<style scoped>
.n-menu {
  font-size: medium;
  gap: 2vw;
  width: auto;
}
:deep(.n-menu-item) {
  transition: transform 0.3s;
}
:deep(.n-menu-item):hover {
  transform: scale(1.1);
}
:deep(.n-menu-item):has(a.router-link-active) {
  transform: scale(1.1);
}
</style>
