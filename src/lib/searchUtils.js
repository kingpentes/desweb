/**
 * Get category badge color classes
 * @param {string} category - Category value (article, guide)
 * @returns {string} Tailwind classes
 */
export function getCategoryColor(category) {
  const colors = {
    article: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    guide: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  }
  return colors[category] || 'bg-gray-500/10 text-gray-600 border-gray-500/20'
}

/**
 * Get icon component berdasarkan category atau type
 * @param {string} type - Type of content
 * @returns {string} Icon name
 */
export function getIconForType(type) {
  const iconMap = {
    'article': 'FileText',
    'guide': 'BookOpen',
    'video': 'Video',
    'tutorial': 'BookOpen',
  }
  return iconMap[type] || 'FileText'
}
