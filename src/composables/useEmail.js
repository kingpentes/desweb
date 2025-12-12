/**
 * Composable untuk handle email operations
 * @returns {Object} Email utilities
 */
export function useEmail() {
  /**
   * Send email dengan konfirmasi - membuka Gmail web compose
   * @param {string} email - Email address tujuan
   * @param {string} subject - Subject email (optional)
   * @param {string} body - Body email (optional)
   */
  const sendEmail = (email, subject = '', body = '') => {
    const confirmed = confirm(
      `Anda akan diarahkan ke Gmail untuk mengirim pesan ke ${email}. Lanjutkan?`
    )
    
    if (confirmed) {
      // Gmail compose URL format
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    }
  }

  /**
   * Send email ke default CyberSafe email
   */
  const sendToCyberSafe = () => {
    sendEmail(
      'info@cybersafe.id', 
      'Pesan dari Website CyberSafe',
      'Halo Tim CyberSafe,\n\nSaya ingin bertanya tentang...\n\n'
    )
  }

  return {
    sendEmail,
    sendToCyberSafe,
  }
}
