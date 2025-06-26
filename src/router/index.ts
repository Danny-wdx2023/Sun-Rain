import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/products',
      children: [
        {
          path: '',
          name: 'ProductHome',
          component: () => import('@/views/ProductsView.vue'),
        },
        {
          path: 'grid-view',
          name: 'ProductsGridView',
          component: () => import('@/views/ProductsGridView.vue'),
        },
        {
          path: ':id',
          name: 'ProductDetails',
          component: () => import('@/views/ProductDetailsView.vue'),
        },
      ],
    },
    {
      path: '/market',
      name: 'MarketView',
      component: () => import('@/views/MarketView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactView.vue'),
    },
  ],
})

export default router
