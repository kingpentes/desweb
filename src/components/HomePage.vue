<script setup>
import { Shield, Lock, Eye, Users } from '@/config/icons'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from './ui'
import ImageWithFallback from './ImageWithFallback.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import { useNavigation } from '@/composables/useNavigation'
import { features as featuresData } from '@/data/features'

const { navigateById } = useNavigation()

// Map icons to features
const features = [
  { ...featuresData[0], icon: Shield },
  { ...featuresData[1], icon: Lock },
  { ...featuresData[2], icon: Eye },
  { ...featuresData[3], icon: Users },
]

const handleNavigationClick = (pageId) => {
  navigateById(pageId)
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />

    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-10 sm:py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div class="space-y-4 sm:space-y-6">
          <div class="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full border border-primary/20">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span class="text-primary text-xs sm:text-sm font-medium">Lindungi Diri Anda Online</span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Edukasi Keamanan Siber untuk Semua
          </h1>
          <p class="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Platform edukasi komprehensif yang membantu masyarakat Indonesia memahami dan melindungi diri dari ancaman siber di dunia digital.
          </p>
          <div class="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
            <Button 
              size="lg" 
              @click="handleNavigationClick('threats')" 
              class="shadow-lg w-full xs:w-auto"
            >
              Pelajari Ancaman Siber
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              @click="handleNavigationClick('tips')"
              class="w-full xs:w-auto"
            >
              Tips Keamanan
            </Button>
          </div>
        </div>
        <div class="relative order-first md:order-last">
          <div class="absolute -inset-4 bg-linear-to-tr from-primary/20 via-chart-2/20 to-transparent rounded-3xl blur-2xl" />
          <div class="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Cyber Security"
              class="w-full h-auto rounded-2xl shadow-2xl border border-border/50"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto px-4 py-12 sm:py-16">
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Mengapa Keamanan Siber Penting?</h2>
        <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          Di era digital ini, keamanan siber bukan lagi pilihan tapi kebutuhan. Mari bersama-sama membangun Indonesia yang lebih aman di dunia maya.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card 
          v-for="feature in features" 
          :key="feature.title" 
          class="border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
        >
          <CardHeader>
            <div class="w-14 h-14 bg-linear-to-br from-primary/10 to-chart-2/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <component :is="feature.icon" class="w-7 h-7 text-primary" />
            </div>
            <CardTitle>{{ feature.title }}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription class="leading-relaxed">{{ feature.description }}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="container mx-auto px-4 py-12 sm:py-16">
      <div class="bg-linear-to-br from-primary via-primary to-chart-2 text-primary-foreground border-0 shadow-2xl shadow-primary/25 overflow-hidden relative rounded-lg">
        <div class="absolute inset-0 bg-grid-white/5" />
        <div class="py-8 sm:py-12 px-4 relative">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div class="space-y-2">
              <div class="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">75%</div>
              <p class="opacity-90 text-sm sm:text-base md:text-lg">Serangan siber meningkat setiap tahun</p>
            </div>
            <div class="space-y-2">
              <div class="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">60%</div>
              <p class="opacity-90 text-sm sm:text-base md:text-lg">UMKM menjadi target serangan</p>
            </div>
            <div class="space-y-2">
              <div class="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">90%</div>
              <p class="opacity-90 text-sm sm:text-base md:text-lg">Serangan dapat dicegah dengan edukasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto px-4 py-10 sm:py-16 text-center">
      <div class="max-w-2xl mx-auto space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-linear-to-br from-accent/50 to-background border border-primary/10">
        <h2 class="text-2xl sm:text-3xl font-bold">Mulai Belajar Sekarang</h2>
        <p class="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Jangan tunggu sampai menjadi korban. Pelajari cara melindungi diri Anda dan keluarga dari ancaman siber sekarang juga.
        </p>
        <Button size="lg" @click="handleNavigationClick('threats')" class="shadow-lg w-full xs:w-auto">
          Mulai Eksplorasi
        </Button>
      </div>
    </section>

    <Footer />
  </div>
</template>
