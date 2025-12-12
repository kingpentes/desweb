<script setup>
import { Search, BookOpen, FileText, AlertTriangle, CheckSquare, X } from '@/config/icons'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from './ui'
import { useNavigation } from '@/composables/useNavigation'
import { useSearch } from '@/composables/useSearch'
import { searchableContent, searchCategories } from '@/data/searchContent'
import { getCategoryColor } from '@/lib/searchUtils'

const { goToMaterial, goToArticle, navigateToPage } = useNavigation()

// Map icons to content
const allContent = searchableContent.map(item => {
  let icon
  switch(item.type) {
    case 'Halaman':
      icon = item.title === 'Ancaman Siber' ? AlertTriangle : CheckSquare
      break
    case 'Berita':
      icon = FileText
      break
    case 'Materi Belajar':
      icon = item.category === 'guide' ? BookOpen : FileText
      break
    default:
      icon = FileText
  }
  return { ...item, icon }
})

const {
  searchQuery,
  selectedCategory,
  displayedContent,
  resultCount,
  performSearch,
  handleSearchInput,
  clearSearch,
} = useSearch(allContent)

const categories = searchCategories

// Navigate to content
const navigateToContent = (item) => {
  if (item.page) {
    navigateToPage(item.page)
  } else if (item.type === 'Berita') {
    goToArticle(item.slug)
  } else {
    goToMaterial(item.slug)
  }
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />

    <!-- Header Section -->
    <section class="py-16 px-4 md:px-20 bg-linear-to-br from-primary/10 via-primary/5 to-transparent">
      <div class="container mx-auto max-w-4xl">
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-xs md:text-sm">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span class="text-primary font-medium">Temukan Materi Pembelajaran</span>
          </div>
          <div class="space-y-3">
            <h1 class="text-3xl md:text-4xl font-bold text-foreground leading-tight">Cari Materi Keamanan Siber</h1>
            <p class="text-muted-foreground text-sm md:text-base leading-relaxed">
              Cari artikel, video, tutorial, dan panduan tentang keamanan siber yang Anda butuhkan
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Search Section -->
    <section class="container mx-auto px-4 -mt-8">
      <Card class="shadow-xl border-border/50">
        <CardContent class="p-4 sm:p-6">
          <!-- Search Input -->
          <div class="relative mb-4">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              v-model="searchQuery"
              @input="handleSearchInput"
              type="text"
              placeholder="Cari artikel atau panduan... (contoh: phishing, password, malware)"
              class="w-full pl-10 pr-10 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat.value"
              @click="selectedCategory = cat.value; performSearch()"
              :class="[
                'px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer',
                selectedCategory === cat.value
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105'
              ]"
            >
              {{ cat.label }}
            </button>
          </div>
        </CardContent>
      </Card>
    </section>

    <!-- Results Section -->
    <section class="container mx-auto px-4 py-10">
      <!-- Result Count -->
      <div class="mb-6">
        <p class="text-sm text-muted-foreground">
          <span v-if="searchQuery.trim()">
            Ditemukan <strong class="text-foreground">{{ resultCount }}</strong> hasil untuk "<strong class="text-foreground">{{ searchQuery }}</strong>"
          </span>
          <span v-else>
            Menampilkan <strong class="text-foreground">{{ resultCount }}</strong> materi
          </span>
        </p>
      </div>

      <!-- No Results -->
      <div v-if="displayedContent.length === 0 && searchQuery.trim()" class="text-center py-12">
        <Search class="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
        <h3 class="text-xl font-semibold mb-2">Tidak ada hasil ditemukan</h3>
        <p class="text-muted-foreground mb-6">
          Coba gunakan kata kunci lain atau jelajahi kategori yang tersedia
        </p>
        <Button @click="clearSearch">Hapus Pencarian</Button>
      </div>

      <!-- Results Grid -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="item in displayedContent"
          :key="item.id"
          style="cursor: pointer;"
          class="hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 group"
          @click="navigateToContent(item)"
        >
          <CardHeader class="p-4 sm:p-6">
            <div class="flex items-start justify-between mb-3">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <component :is="item.icon" class="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span :class="['text-xs px-2 py-1 rounded-full border transition-colors duration-300', getCategoryColor(item.category), 'group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary']">
                {{ item.type }}
              </span>
            </div>
            <CardTitle class="text-base sm:text-lg group-hover:text-primary transition-colors duration-300">
              {{ item.title }}
            </CardTitle>
            <CardDescription class="text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
              {{ item.description }}
            </CardDescription>
          </CardHeader>
          <CardContent class="p-4 sm:p-6 pt-0">
            <Button variant="outline" class="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 text-sm">
              Lihat Detail
              <Search class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="container mx-auto px-4 pb-16">
      <Card class="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent class="p-6 sm:p-8 text-center">
          <BookOpen class="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 class="text-xl font-bold mb-2">Tidak menemukan yang Anda cari?</h3>
          <p class="text-muted-foreground mb-6">
            Jelajahi halaman Sumber Daya untuk lebih banyak materi pembelajaran dan referensi
          </p>
          <Button size="lg" @click="navigateToPage('Resources')">
            Lihat Semua Sumber Daya
          </Button>
        </CardContent>
      </Card>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
/* Custom scrollbar for search results */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--muted));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground));
}
</style>
