import { defineStore } from 'pinia'
import { api } from '@/utils'
import { type TreeOption } from 'naive-ui'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<TreeOption[]>([])
  const isLoading = ref<boolean>(false)

  let isInitialized = false

  const fetchCategories = async () => {
    if (isInitialized) return
    if (categories.value.length > 0) return

    try {
      isLoading.value = true
      api('/api/category', categories)
      isInitialized = true
    } finally {
      isLoading.value = false
    }
  }

  return {
    categories,
    isLoading,
    fetchCategories,
  }
})
