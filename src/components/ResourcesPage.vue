<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    
    <!-- Header Section -->
    <section class="py-16 px-4 md:px-20 bg-linear-to-br from-cyan-500/10 via-cyan-500/5 to-transparent">
      <div class="container mx-auto max-w-4xl">
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-xs md:text-sm">
            <div class="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span class="text-cyan-600 font-medium">Pusat Informasi</span>
          </div>
          <div class="space-y-3">
            <h1 class="text-3xl md:text-4xl font-bold text-foreground leading-tight">Sumber Daya & Referensi</h1>
            <p class="text-muted-foreground text-sm md:text-base leading-relaxed">
              Kumpulan sumber daya, tools, dan referensi untuk memperdalam pengetahuan Anda tentang keamanan siber.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Image -->
    <section class="container mx-auto px-4 -mt-4 sm:-mt-8">
      <div class="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-border/50">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1608986596619-eb50cc56831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjA0MTIwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Learning Resources"
          class="w-full h-48 sm:h-64 object-cover"
        />
      </div>
    </section>

    <!-- Main Content -->
    <section class="container mx-auto px-4 py-10 sm:py-16">
      <Tabs default-value="learning" class="space-y-6 sm:space-y-8">
        <TabsList class="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 gap-1 bg-muted/50 backdrop-blur-sm">
          <TabsTrigger value="learning" class="text-xs sm:text-sm py-2 sm:py-2.5">Materi Belajar</TabsTrigger>
          <TabsTrigger value="news" class="text-xs sm:text-sm py-2 sm:py-2.5">Berita & Artikel</TabsTrigger>
          <TabsTrigger value="tools" class="text-xs sm:text-sm py-2 sm:py-2.5">Tools & Panduan</TabsTrigger>
          <TabsTrigger value="training" class="text-xs sm:text-sm py-2 sm:py-2.5">Pelatihan</TabsTrigger>
        </TabsList>

        <!-- Learning Resources Tab -->
        <TabsContent value="learning" class="space-y-6">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Materi Pembelajaran</h2>
            <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card 
                v-for="(resource, index) in learningResources" 
                :key="resource.title"
                class="hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group"
                :style="{ animationDelay: `${index * 0.05}s` }"
              >
                <CardHeader class="p-4 sm:p-6">
                  <div class="flex items-start justify-between mb-3 sm:mb-4">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500/10 to-blue-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm flex-shrink-0">
                      <component :is="resource.icon" class="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
                    </div>
                    <span class="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-secondary rounded-full text-muted-foreground">{{ resource.type }}</span>
                  </div>
                  <CardTitle class="text-base sm:text-lg">{{ resource.title }}</CardTitle>
                  <CardDescription class="leading-relaxed text-sm">{{ resource.description }}</CardDescription>
                </CardHeader>
                <CardContent class="p-4 sm:p-6 pt-0">
                  <Button 
                    variant="outline" 
                    class="w-full gap-2 hover:bg-blue-500/5 hover:border-blue-500/30 text-sm"
                    @click="goToMaterial(resource.slug)"
                  >
                    Lihat Materi
                    <ExternalLink class="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <!-- Organizations Section -->
          <div class="mt-8 sm:mt-12">
            <h3 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Organisasi & Lembaga</h3>
            <div class="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <Card 
                v-for="(org, index) in organizations" 
                :key="org.name"
                class="hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                :style="{ animationDelay: `${(index + 4) * 0.05}s` }"
              >
                <CardHeader class="p-4 sm:p-6">
                  <CardTitle class="text-base sm:text-lg group-hover:text-primary transition-colors">{{ org.name }}</CardTitle>
                  <CardDescription class="leading-relaxed text-sm">{{ org.description }}</CardDescription>
                </CardHeader>
                <CardContent class="p-4 sm:p-6 pt-0">
                  <div class="flex items-center gap-2 text-sm text-muted-foreground">
                    <div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe class="w-4 h-4 text-primary" />
                    </div>
                    <span class="group-hover:text-primary transition-colors truncate">{{ org.website }}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <!-- News Tab -->
        <TabsContent value="news" class="space-y-6">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Berita & Artikel Terbaru</h2>
            <div class="space-y-3 sm:space-y-4">
              <Card 
                v-for="(news, index) in newsResources" 
                :key="news.title"
                class="hover:shadow-xl hover:border-green-500/30 transition-all duration-300 group"
                :style="{ animationDelay: `${index * 0.05}s` }"
              >
                <CardHeader class="p-4 sm:p-6">
                  <div class="flex items-start gap-3 sm:gap-4">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Newspaper class="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <CardTitle class="mb-2 group-hover:text-green-500 transition-colors text-base sm:text-lg">{{ news.title }}</CardTitle>
                      <CardDescription class="leading-relaxed text-sm">{{ news.description }}</CardDescription>
                      <div class="mt-3 sm:mt-4 flex flex-col xs:flex-row xs:items-center justify-between gap-2">
                        <span class="text-xs sm:text-sm text-muted-foreground">{{ news.date }}</span>
                        <Button 
                          variant="link" 
                          class="gap-2 text-green-500 hover:text-green-500/80 p-0 h-auto text-sm justify-start xs:justify-end"
                          @click="goToArticle(news.slug)"
                        >
                          Baca Selengkapnya
                          <ExternalLink class="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </TabsContent>

        <!-- Tools Tab -->
        <TabsContent value="tools" class="space-y-6">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Tools & Panduan Praktis</h2>
            <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card 
                v-for="(tool, index) in tools" 
                :key="tool.title"
                class="hover:shadow-xl hover:border-purple-500/30 transition-all duration-300 group"
                :style="{ animationDelay: `${index * 0.05}s` }"
              >
                <CardHeader class="p-4 sm:p-6">
                  <div class="flex items-start justify-between mb-3 sm:mb-4">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm flex-shrink-0">
                      <BookOpen class="w-6 h-6 sm:w-7 sm:h-7 text-purple-500" />
                    </div>
                    <span class="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-secondary rounded-full text-muted-foreground">{{ tool.category }}</span>
                  </div>
                  <CardTitle class="group-hover:text-purple-500 transition-colors text-base sm:text-lg">{{ tool.title }}</CardTitle>
                  <CardDescription class="leading-relaxed text-sm">{{ tool.description }}</CardDescription>
                </CardHeader>
                <CardContent class="p-4 sm:p-6 pt-0">
                  <Button 
                    variant="outline" 
                    class="w-full gap-2 hover:bg-purple-500/5 hover:border-purple-500/30 text-sm"
                    @click="handleExternalRedirect(tool, 'tool')"
                  >
                    Gunakan Tool
                    <ExternalLink class="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <!-- Training Tab -->
        <TabsContent value="training" class="space-y-6">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Program Pelatihan & Sertifikasi</h2>
            <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card 
                v-for="(program, index) in trainingPrograms" 
                :key="program.title"
                class="hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 group"
                :style="{ animationDelay: `${index * 0.05}s` }"
              >
                <CardHeader class="p-4 sm:p-6">
                  <div class="flex items-start justify-between mb-3 sm:mb-4">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm flex-shrink-0">
                      <GraduationCap class="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" />
                    </div>
                    <span class="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-600">
                      {{ program.level }}
                    </span>
                  </div>
                  <CardTitle class="group-hover:text-orange-500 transition-colors text-base sm:text-lg">{{ program.title }}</CardTitle>
                  <CardDescription class="leading-relaxed text-sm">
                    <span class="block mb-2 text-foreground/70">Penyelenggara: {{ program.provider }}</span>
                    {{ program.description }}
                  </CardDescription>
                </CardHeader>
                <CardContent class="p-4 sm:p-6 pt-0">
                  <Button 
                    variant="outline" 
                    class="w-full gap-2 hover:bg-orange-500/5 hover:border-orange-500/30 text-sm"
                    @click="handleExternalRedirect(program, 'training')"
                  >
                    Info Pendaftaran
                    <ExternalLink class="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto px-4 pb-10 sm:pb-16">
      <div class="bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-blue-500/10 border-cyan-500/20 shadow-xl overflow-hidden relative rounded-lg">
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px); background-size: 20px 20px;" />
        <div class="py-8 sm:py-12 px-4 text-center relative">
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/25">
            <BookOpen class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Butuh Bantuan Lebih Lanjut?</h3>
          <p class="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Jika Anda mengalami insiden keamanan siber atau memerlukan konsultasi, jangan ragu untuk menghubungi lembaga yang kompeten.
          </p>
          <div class="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <Button size="lg" class="gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all w-full xs:w-auto" @click="goToIDCERT">
              Hubungi ID-CERT
              <ExternalLink class="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" class="gap-2 hover:bg-primary/5 w-full xs:w-auto" @click="goToBSSN">
              Lapor ke BSSN
              <ExternalLink class="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Redirect Confirmation Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="showRedirectModal" 
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <!-- Backdrop -->
          <div 
            class="absolute inset-0 bg-black/50 backdrop-blur-sm"
            @click="cancelRedirect"
          />
          
          <!-- Modal Content -->
          <div class="relative bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              :class="pendingRedirect.type === 'tool' ? 'bg-purple-500/10' : 'bg-orange-500/10'"
            >
              <ExternalLink 
                class="w-8 h-8" 
                :class="pendingRedirect.type === 'tool' ? 'text-purple-500' : 'text-orange-500'"
              />
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-center mb-2">
              Anda akan meninggalkan CyberSafe
            </h3>
            
            <!-- Description -->
            <p class="text-muted-foreground text-center text-sm mb-4">
              Anda akan diarahkan ke website eksternal untuk mengakses:
            </p>
            
            <!-- Item Info -->
            <div class="bg-accent/50 rounded-lg p-4 mb-6">
              <p class="font-semibold text-center">{{ pendingRedirect.title }}</p>
              <p class="text-xs text-muted-foreground text-center mt-1 break-all">
                {{ pendingRedirect.url }}
              </p>
            </div>
            
            <!-- Warning -->
            <div class="flex items-start gap-2 text-xs text-muted-foreground mb-6 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
              <svg class="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>
                CyberSafe tidak bertanggung jawab atas konten di website eksternal. 
                Pastikan Anda hanya memasukkan informasi di website yang terpercaya.
              </span>
            </div>
            
            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                class="flex-1"
                @click="cancelRedirect"
              >
                Batal
              </Button>
              <Button 
                class="flex-1 gap-2"
                :class="pendingRedirect.type === 'tool' ? 'bg-purple-500 hover:bg-purple-600' : 'bg-orange-500 hover:bg-orange-600'"
                @click="confirmRedirect"
              >
                Lanjutkan
                <ExternalLink class="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <Footer />
  </div>
</template>

<script setup>
import { BookOpen, Video, FileText, Newspaper, GraduationCap, ExternalLink, Globe } from '@/config/icons'
import Card from './ui/card.vue'
import CardContent from './ui/CardContent.vue'
import CardDescription from './ui/CardDescription.vue'
import CardHeader from './ui/CardHeader.vue'
import CardTitle from './ui/CardTitle.vue'
import Button from './ui/button.vue'
import Tabs from './ui/tabs.vue'
import TabsContent from './ui/TabsContent.vue'
import TabsList from './ui/TabsList.vue'
import TabsTrigger from './ui/TabsTrigger.vue'
import ImageWithFallback from './ImageWithFallback.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import { useNavigation } from '@/composables/useNavigation'
import { useExternalRedirect } from '@/composables/useExternalRedirect'
import { 
  learningResources as learningData, 
  newsResources, 
  tools, 
  organizations, 
  trainingPrograms 
} from '@/data/resources'

const { goToMaterial, goToArticle, goToSearch } = useNavigation()
const { 
  showRedirectModal, 
  pendingRedirect, 
  handleExternalRedirect, 
  confirmRedirect, 
  cancelRedirect,
  goToIDCERT,
  goToBSSN 
} = useExternalRedirect()

// Map icons to learning resources
const learningResources = learningData.map(resource => {
  let icon
  switch(resource.type) {
    case 'Video':
      icon = Video
      break
    case 'Tutorial':
      icon = BookOpen
      break
    default:
      icon = FileText
  }
  return { ...resource, icon }
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
  opacity: 0;
}

/* Animate-in utility */
.animate-in {
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.zoom-in-95 {
  animation-name: zoomIn95;
}

@keyframes zoomIn95 {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
