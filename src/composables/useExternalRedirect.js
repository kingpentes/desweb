import { ref } from 'vue'

/**
 * Composable untuk handle external redirect dengan modal konfirmasi
 * @returns {Object} External redirect utilities
 */
export function useExternalRedirect() {
  const showRedirectModal = ref(false)
  const pendingRedirect = ref({
    title: '',
    url: '',
    type: ''
  })

  /**
   * Show confirmation modal sebelum redirect ke URL external
   * @param {Object} item - Item yang memiliki title dan url
   * @param {string} type - Tipe redirect (e.g., 'tool', 'training', 'organization')
   */
  const handleExternalRedirect = (item, type = 'external') => {
    pendingRedirect.value = {
      title: item.title || item.name,
      url: item.url,
      type: type
    }
    showRedirectModal.value = true
  }

  /**
   * Confirm dan redirect ke URL
   */
  const confirmRedirect = () => {
    if (pendingRedirect.value.url) {
      window.open(pendingRedirect.value.url, '_blank', 'noopener,noreferrer')
    }
    showRedirectModal.value = false
    pendingRedirect.value = { title: '', url: '', type: '' }
  }

  /**
   * Cancel redirect
   */
  const cancelRedirect = () => {
    showRedirectModal.value = false
    pendingRedirect.value = { title: '', url: '', type: '' }
  }

  /**
   * Direct redirect tanpa konfirmasi (dengan alert)
   * @param {string} url - URL tujuan
   * @param {string} message - Pesan konfirmasi
   */
  const redirectWithConfirm = (url, message) => {
    const confirmed = confirm(message)
    if (confirmed) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  /**
   * Redirect ke ID-CERT
   */
  const goToIDCERT = () => {
    redirectWithConfirm(
      'https://www.cert.or.id/',
      'Anda akan diarahkan ke website ID-CERT (Indonesia Computer Emergency Response Team) untuk melaporkan insiden keamanan siber. Lanjutkan?'
    )
  }

  /**
   * Redirect ke BSSN
   */
  const goToBSSN = () => {
    redirectWithConfirm(
      'https://bssn.go.id/aduan-siber/',
      'Anda akan diarahkan ke website BSSN (Badan Siber dan Sandi Negara) untuk pelaporan dan aduan keamanan siber. Lanjutkan?'
    )
  }

  const goToFacebook = () => {
    redirectWithConfirm(
      'https://www.facebook.com/cybersafe.id',
      'Anda akan diarahkan ke halaman Facebook CyberSafe. Lanjutkan?'
    )
  }

  const goToTwitter = () => {
    redirectWithConfirm(
      'https://twitter.com/cybersafe_id',
      'Anda akan diarahkan ke halaman Twitter CyberSafe. Lanjutkan?'
    )
  }

  const goToInstagram = () => {
    redirectWithConfirm(
      'https://www.instagram.com/razit27/',
      'Anda akan diarahkan ke halaman Instagram CyberSafe. Lanjutkan?'
    )
  }

  const goToLinkedIn = () => {
    redirectWithConfirm(
      'https://www.linkedin.com/company/cybersafe-id/',
      'Anda akan diarahkan ke halaman LinkedIn CyberSafe. Lanjutkan?'
    )
  }


  return {
    showRedirectModal,
    pendingRedirect,
    handleExternalRedirect,
    confirmRedirect,
    cancelRedirect,
    redirectWithConfirm,
    goToIDCERT,
    goToBSSN,
    goToFacebook,
    goToTwitter,
    goToInstagram,
    goToLinkedIn,
  }
}
