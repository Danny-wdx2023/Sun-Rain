import { defineStore } from 'pinia'
import { api } from '@/utils'

type Product = {
  id: number
  name: string
  photos: string[]
  parameter: {
    botanicalName: string
    grade: string
    spec: string
  }
  slogan: string
  description: string
}
type ProductArray = Product[]

export const useProductsStore = defineStore('product', () => {
  const products = ref<ProductArray>([])
  const isLoading = ref<boolean>(false)

  let isInitialized = false

  const fetchProducts = async () => {
    if (isInitialized) return
    if (products.value.length > 0) return

    try {
      isLoading.value = true
      api('/api/products', products)
      isInitialized = true
    } finally {
      isLoading.value = false
    }
  }

  return {
    products,
    isLoading,
    fetchProducts,
  }
})
