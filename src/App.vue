<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
    <RouterLink to="/market">Market</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>
