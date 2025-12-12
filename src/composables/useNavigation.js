import { useRouter } from 'vue-router'

/**
 * Composable untuk handle navigasi dengan router
 * @returns {Object} Navigation utilities
 */
export function useNavigation() {
  const router = useRouter()

  /**
   * Navigate ke page by name
   * @param {string} pageName - Nama route (e.g., 'Threats', 'Tips', 'About')
   */
  const navigateToPage = (pageName) => {
    router.push({ name: pageName })
  }

  /**
   * Navigate ke page by id (dengan capitalize otomatis)
   * @param {string} pageId - ID page (e.g., 'threats', 'tips', 'about')
   */
  const navigateById = (pageId) => {
    const pageName = pageId.charAt(0).toUpperCase() + pageId.slice(1)
    router.push({ name: pageName })
  }

  /**
   * Navigate ke material detail
   * @param {string} slug - Slug material
   */
  const goToMaterial = (slug) => {
    router.push({ name: 'MaterialDetail', params: { slug } })
  }

  /**
   * Navigate ke article detail
   * @param {string} slug - Slug artikel
   */
  const goToArticle = (slug) => {
    router.push({ name: 'ArticleDetail', params: { slug } })
  }

  /**
   * Navigate ke search page
   */
  const goToSearch = () => {
    router.push({ name: 'Search' })
  }

  /**
   * Navigate ke homepage
   */
  const goToHome = () => {
    router.push({ name: 'Home' })
  }

  return {
    navigateToPage,
    navigateById,
    goToMaterial,
    goToArticle,
    goToSearch,
    goToHome,
  }
}
