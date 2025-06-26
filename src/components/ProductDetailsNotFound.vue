<template>
  <span>地址有误，请检查地址栏内地址或联系我们。</span>
  <n-flex :gap="10">
    <n-button @click="$router.push('/')">返回首页</n-button>
    <n-button @click="$router.push('/products/grid-view')">返回产品页</n-button>
  </n-flex>
</template>
