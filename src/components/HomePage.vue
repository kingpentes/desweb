<script setup>
import { Shield, Lock, Eye, Users } from 'lucide-vue-next';
import Card from './ui/card.vue';
import CardContent from './ui/CardContent.vue';
import CardDescription from './ui/CardDescription.vue';
import CardHeader from './ui/CardHeader.vue';
import CardTitle from './ui/CardTitle.vue';
import Button from './ui/button.vue';
import ImageWithFallback from './ImageWithFallback.vue';

const props = defineProps({
  onNavigate: {
    type: Function,
    required: true
  }
});

const features = [
  {
    icon: Shield,
    title: 'Perlindungan Data',
    description: 'Pelajari cara melindungi data pribadi dan informasi sensitif Anda dari ancaman siber.',
  },
  {
    icon: Lock,
    title: 'Keamanan Digital',
    description: 'Pahami pentingnya keamanan digital dalam kehidupan sehari-hari di era teknologi.',
  },
  {
    icon: Eye,
    title: 'Deteksi Ancaman',
    description: 'Kenali berbagai jenis ancaman siber dan cara mengidentifikasi serangan yang mungkin terjadi.',
  },
  {
    icon: Users,
    title: 'Edukasi Publik',
    description: 'Tingkatkan kesadaran masyarakat tentang pentingnya keamanan siber untuk semua.',
  },
];

const handleNavigationClick = (pageId) => {
  props.onNavigate(pageId);
};
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Navbar -->
    <nav class="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield class="w-6 h-6 text-primary-foreground" />
            </div>
            <span class="text-xl font-semibold text-foreground">CyberSafe Indonesia</span>
          </div>
          
          <!-- Navigation Menu -->
          <div class="hidden md:flex items-center gap-1">
            <button class="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Beranda
            </button>
            <button class="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Ancaman Siber
            </button>
            <button class="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 11l3 3L22 4"></path>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              Tips Keamanan
            </button>
            <button class="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              Sumber Daya
            </button>
            <button 
              class="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
              @click="handleNavigationClick('about')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              Tentang
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span class="text-primary text-sm font-medium">Lindungi Diri Anda Online</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Edukasi Keamanan Siber untuk Semua
          </h1>
          <p class="text-muted-foreground text-lg leading-relaxed">
            Platform edukasi komprehensif yang membantu masyarakat Indonesia memahami dan melindungi diri dari ancaman siber di dunia digital.
          </p>
          <div class="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              @click="handleNavigationClick('threats')" 
              class="shadow-lg"
            >
              Pelajari Ancaman Siber
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              @click="handleNavigationClick('tips')"
            >
              Tips Keamanan
            </Button>
          </div>
        </div>
        <div class="relative">
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
    <section class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Mengapa Keamanan Siber Penting?</h2>
        <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Di era digital ini, keamanan siber bukan lagi pilihan tapi kebutuhan. Mari bersama-sama membangun Indonesia yang lebih aman di dunia maya.
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card 
          v-for="(feature, index) in features" 
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
    <section class="container mx-auto px-4 py-16">
      <Card class="bg-linear-to-br from-primary via-primary to-chart-2 text-primary-foreground border-0 shadow-2xl shadow-primary/25 overflow-hidden relative">
        <div class="absolute inset-0 bg-grid-white/5" />
        <CardContent class="py-12 relative">
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="space-y-2">
              <div class="text-5xl md:text-6xl font-bold mb-2">75%</div>
              <p class="opacity-90 text-lg">Serangan siber meningkat setiap tahun</p>
            </div>
            <div class="space-y-2">
              <div class="text-5xl md:text-6xl font-bold mb-2">60%</div>
              <p class="opacity-90 text-lg">UMKM menjadi target serangan</p>
            </div>
            <div class="space-y-2">
              <div class="text-5xl md:text-6xl font-bold mb-2">90%</div>
              <p class="opacity-90 text-lg">Serangan dapat dicegah dengan edukasi</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto px-4 py-16 text-center">
      <div class="max-w-2xl mx-auto space-y-6 p-8 rounded-3xl bg-linear-to-br from-accent/50 to-background border border-primary/10">
        <h2 class="text-3xl font-bold">Mulai Belajar Sekarang</h2>
        <p class="text-muted-foreground text-lg leading-relaxed">
          Jangan tunggu sampai menjadi korban. Pelajari cara melindungi diri Anda dan keluarga dari ancaman siber sekarang juga.
        </p>
        <Button size="lg" @click="handleNavigationClick('threats')" class="shadow-lg">
          Mulai Eksplorasi
        </Button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-muted/30 border-t border-border mt-16">
      <div class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield class="w-6 h-6 text-primary-foreground" />
              </div>
              <span class="text-lg font-semibold">CyberSafe Indonesia</span>
            </div>
            <p class="text-muted-foreground text-sm">
              Platform edukasi keamanan siber untuk membangun Indonesia yang lebih aman di dunia digital.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Menu</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><button @click="handleNavigationClick('home')" class="hover:text-foreground transition-colors">Beranda</button></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Ancaman Siber</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Tips Keamanan</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Sumber Daya</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Kontak</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@cybersafe.id</li>
              <li>Telepon: +62 21 1234 5678</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Ikuti Kami</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">Facebook</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CyberSafe Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
