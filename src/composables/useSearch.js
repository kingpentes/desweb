import { ref, computed } from 'vue'

/**
 * Composable untuk search functionality
 * @param {Array} allContent - Semua konten yang bisa dicari
 * @returns {Object} Search utilities
 */
export function useSearch(allContent) {
  const searchQuery = ref('')
  const selectedCategory = ref('all')
  const searchResults = ref([])
  const isSearching = ref(false)

  /**
   * Perform search dengan filter category dan query
   */
  const performSearch = () => {
    if (!searchQuery.value.trim()) {
      searchResults.value = []
      return
    }

    isSearching.value = true
    
    // Simulate search delay
    setTimeout(() => {
      const query = searchQuery.value.toLowerCase()
      const filtered = allContent.filter(item => {
        // Filter by category
        if (selectedCategory.value !== 'all' && item.category !== selectedCategory.value) {
          return false
        }

        // Search in title, description, and tags
        const matchTitle = item.title.toLowerCase().includes(query)
        const matchDescription = item.description.toLowerCase().includes(query)
        const matchTags = item.tags?.some(tag => tag.toLowerCase().includes(query))

        return matchTitle || matchDescription || matchTags
      })

      searchResults.value = filtered
      isSearching.value = false
    }, 300)
  }

  /**
   * Handle search input change
   */
  const handleSearchInput = () => {
    performSearch()
  }

  /**
   * Clear search query dan results
   */
  const clearSearch = () => {
    searchQuery.value = ''
    searchResults.value = []
  }

  /**
   * Get displayed content berdasarkan search atau filter
   */
  const displayedContent = computed(() => {
    if (searchQuery.value.trim()) {
      return searchResults.value
    }
    return selectedCategory.value === 'all' 
      ? allContent 
      : allContent.filter(item => item.category === selectedCategory.value)
  })

  /**
   * Get result count
   */
  const resultCount = computed(() => {
    if (searchQuery.value.trim()) {
      return searchResults.value.length
    }
    return displayedContent.value.length
  })

  return {
    // State
    searchQuery,
    selectedCategory,
    searchResults,
    isSearching,
    
    // Computed
    displayedContent,
    resultCount,
    
    // Methods
    performSearch,
    handleSearchInput,
    clearSearch,
  }
}
