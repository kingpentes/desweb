<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ArrowLeft, Calendar, User, Share2, Bookmark, Clock, ChevronRight, Newspaper } from 'lucide-vue-next';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Button from './ui/button.vue';
import { Card, CardContent, CardHeader, CardTitle } from './ui';

const route = useRoute();
const router = useRouter();

// Articles data
const articles = {
  'tren-kejahatan-siber-2025': {
    id: 'tren-kejahatan-siber-2025',
    title: 'Tren Kejahatan Siber 2025',
    description: 'Analisis mendalam tentang ancaman siber terbaru dan prediksi ke depan',
    date: '15 Oktober 2025',
    author: 'Dr. Budi Santoso',
    readTime: '12 menit',
    category: 'Analisis',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: [
      {
        type: 'paragraph',
        text: 'Tahun 2025 menandai era baru dalam lanskap keamanan siber global. Dengan semakin canggihnya teknologi, para pelaku kejahatan siber juga terus mengembangkan metode serangan mereka. Artikel ini akan membahas tren kejahatan siber terbaru yang perlu Anda waspadai.'
      },
      {
        type: 'heading',
        text: 'AI-Powered Attacks'
      },
      {
        type: 'paragraph',
        text: 'Penggunaan kecerdasan buatan (AI) dalam serangan siber meningkat drastis. Para penyerang kini menggunakan AI untuk:\n\n• Membuat email phishing yang lebih meyakinkan dan personal\n• Mengotomatisasi serangan brute force dengan lebih efisien\n• Menghasilkan deepfake untuk social engineering\n• Mengidentifikasi kerentanan sistem secara otomatis\n\nAI juga digunakan untuk menghindari deteksi oleh sistem keamanan tradisional.'
      },
      {
        type: 'heading',
        text: 'Ransomware-as-a-Service (RaaS)'
      },
      {
        type: 'paragraph',
        text: 'Model bisnis ransomware berevolusi menjadi layanan yang dapat "disewa". Kelompok kriminal menyediakan tools dan infrastruktur untuk siapa saja yang ingin melakukan serangan ransomware, dengan pembagian hasil. Ini membuat serangan ransomware semakin merata dan sulit dilacak.'
      },
      {
        type: 'heading',
        text: 'Supply Chain Attacks'
      },
      {
        type: 'paragraph',
        text: 'Serangan rantai pasokan menjadi vektor serangan yang semakin populer. Alih-alih menyerang target langsung, penyerang mengkompromikan vendor atau supplier yang memiliki akses ke sistem target. Kasus SolarWinds adalah contoh terkenal dari jenis serangan ini.'
      },
      {
        type: 'heading',
        text: 'IoT dan Smart Device Vulnerabilities'
      },
      {
        type: 'paragraph',
        text: 'Dengan semakin banyaknya perangkat IoT di rumah dan kantor, muncul celah keamanan baru. Perangkat smart home, kamera keamanan, dan bahkan peralatan medis menjadi target serangan. Banyak dari perangkat ini tidak mendapat update keamanan yang memadai.'
      },
      {
        type: 'heading',
        text: 'Rekomendasi untuk Organisasi'
      },
      {
        type: 'paragraph',
        text: 'Untuk menghadapi tren ini, organisasi disarankan untuk:\n\n1. Mengimplementasikan Zero Trust Architecture\n2. Melakukan security awareness training secara rutin\n3. Memiliki incident response plan yang teruji\n4. Melakukan vulnerability assessment berkala\n5. Menggunakan Multi-Factor Authentication untuk semua akses\n6. Memantau supplier dan vendor secara ketat'
      }
    ],
    tags: ['Cybersecurity', 'AI', 'Ransomware', 'Trends'],
    relatedArticles: ['kebijakan-perlindungan-data', 'ransomware-sektor-pendidikan']
  },
  'kebijakan-perlindungan-data': {
    id: 'kebijakan-perlindungan-data',
    title: 'Kebijakan Perlindungan Data di Indonesia',
    description: 'Update terbaru tentang regulasi dan undang-undang perlindungan data pribadi',
    date: '10 Oktober 2025',
    author: 'Maya Putri, S.H.',
    readTime: '15 menit',
    category: 'Regulasi',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: [
      {
        type: 'paragraph',
        text: 'Indonesia telah mengambil langkah signifikan dalam perlindungan data pribadi dengan lahirnya Undang-Undang Perlindungan Data Pribadi (UU PDP). Artikel ini membahas perkembangan terbaru dan implikasinya bagi individu dan organisasi.'
      },
      {
        type: 'heading',
        text: 'UU Perlindungan Data Pribadi'
      },
      {
        type: 'paragraph',
        text: 'UU PDP memberikan kerangka hukum yang komprehensif untuk perlindungan data pribadi di Indonesia. Beberapa poin penting dalam UU ini:\n\n• Definisi yang jelas tentang data pribadi\n• Hak subjek data (akses, koreksi, penghapusan)\n• Kewajiban pengendali dan pemroses data\n• Sanksi administratif dan pidana\n• Pembentukan lembaga pengawas'
      },
      {
        type: 'heading',
        text: 'Hak-Hak Subjek Data'
      },
      {
        type: 'paragraph',
        text: 'Sebagai pemilik data, Anda memiliki hak untuk:\n\n• Mengetahui data apa yang dikumpulkan tentang Anda\n• Meminta akses ke data pribadi Anda\n• Memperbaiki data yang tidak akurat\n• Menghapus data (right to be forgotten)\n• Membatasi pemrosesan data\n• Memindahkan data ke layanan lain (portability)\n• Menolak pemrosesan untuk tujuan tertentu'
      },
      {
        type: 'heading',
        text: 'Kewajiban Organisasi'
      },
      {
        type: 'paragraph',
        text: 'Organisasi yang mengumpulkan dan memproses data pribadi wajib:\n\n• Mendapatkan persetujuan yang sah\n• Menerapkan prinsip minimalisasi data\n• Menjaga keamanan data\n• Melaporkan kebocoran data dalam waktu yang ditentukan\n• Menunjuk Data Protection Officer (DPO)\n• Melakukan Data Protection Impact Assessment (DPIA)'
      },
      {
        type: 'heading',
        text: 'Sanksi Pelanggaran'
      },
      {
        type: 'paragraph',
        text: 'Pelanggaran UU PDP dapat dikenakan sanksi berupa:\n\n• Peringatan tertulis\n• Penghentian sementara kegiatan pemrosesan\n• Penghapusan data pribadi\n• Denda administratif hingga miliaran rupiah\n• Sanksi pidana penjara'
      }
    ],
    tags: ['Regulasi', 'UU PDP', 'Privasi', 'Compliance'],
    relatedArticles: ['tren-kejahatan-siber-2025', 'ransomware-sektor-pendidikan']
  },
  'ransomware-sektor-pendidikan': {
    id: 'ransomware-sektor-pendidikan',
    title: 'Kasus Ransomware di Sektor Pendidikan',
    description: 'Studi kasus serangan ransomware dan cara pencegahannya',
    date: '5 Oktober 2025',
    author: 'Ahmad Rizki, M.Kom.',
    readTime: '10 menit',
    category: 'Studi Kasus',
    heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: [
      {
        type: 'paragraph',
        text: 'Sektor pendidikan menjadi salah satu target utama serangan ransomware dalam beberapa tahun terakhir. Artikel ini menganalisis kasus-kasus serangan di Indonesia dan memberikan rekomendasi pencegahan.'
      },
      {
        type: 'heading',
        text: 'Mengapa Sektor Pendidikan?'
      },
      {
        type: 'paragraph',
        text: 'Institusi pendidikan menjadi target menarik karena:\n\n• Anggaran keamanan siber yang terbatas\n• Jaringan terbuka untuk mendukung kolaborasi\n• Data sensitif mahasiswa dan penelitian\n• Banyak perangkat yang tidak terkelola\n• Kesadaran keamanan yang masih rendah\n• Tekanan untuk tetap beroperasi'
      },
      {
        type: 'heading',
        text: 'Kasus 1: Universitas XYZ'
      },
      {
        type: 'paragraph',
        text: 'Pada awal 2025, Universitas XYZ mengalami serangan ransomware yang mengenkripsi seluruh sistem akademik. Penyerang meminta tebusan 50 Bitcoin (sekitar 30 miliar rupiah).\n\nDampak serangan:\n• Kegiatan akademik terhenti 2 minggu\n• Data penelitian penting terancam hilang\n• Biaya pemulihan mencapai miliaran rupiah\n• Reputasi institusi tercoreng'
      },
      {
        type: 'heading',
        text: 'Kasus 2: SMA Negeri ABC'
      },
      {
        type: 'paragraph',
        text: 'Sekolah menengah juga tidak luput dari serangan. SMA Negeri ABC kehilangan akses ke database nilai siswa menjelang ujian akhir. Serangan masuk melalui email phishing yang diklik oleh staf administrasi.'
      },
      {
        type: 'heading',
        text: 'Strategi Pencegahan'
      },
      {
        type: 'paragraph',
        text: 'Rekomendasi untuk institusi pendidikan:\n\n1. Implementasi backup 3-2-1 (3 copy, 2 media berbeda, 1 offsite)\n2. Segmentasi jaringan untuk membatasi penyebaran\n3. Training keamanan siber untuk seluruh civitas\n4. Patch management yang ketat\n5. Endpoint detection and response (EDR)\n6. Disaster recovery plan yang teruji\n7. Cyber insurance untuk mitigasi finansial'
      }
    ],
    tags: ['Ransomware', 'Pendidikan', 'Studi Kasus', 'Prevention'],
    relatedArticles: ['tren-kejahatan-siber-2025', 'kebijakan-perlindungan-data']
  }
};

const currentArticle = computed(() => {
  const slug = route.params.slug;
  return articles[slug] || null;
});

const relatedArticlesData = computed(() => {
  if (!currentArticle.value) return [];
  return currentArticle.value.relatedArticles
    .map(id => articles[id])
    .filter(Boolean);
});

const goBack = () => {
  router.push({ name: 'Resources' });
};

const goToArticle = (slug) => {
  router.push({ name: 'ArticleDetail', params: { slug } });
};

const shareArticle = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: currentArticle.value.title,
        text: currentArticle.value.description,
        url: window.location.href
      });
    } catch (err) {
      console.log('Share cancelled');
    }
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert('Link berhasil disalin!');
  }
};
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    
    <!-- Not Found State -->
    <div v-if="!currentArticle" class="container mx-auto px-4 py-16 text-center">
      <h1 class="text-2xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
      <p class="text-muted-foreground mb-6">Artikel yang Anda cari tidak tersedia.</p>
      <Button @click="goBack" class="gap-2">
        <ArrowLeft class="w-4 h-4" />
        Kembali ke Sumber Daya
      </Button>
    </div>

    <!-- Article Content -->
    <template v-else>
      <!-- Hero Section -->
      <section class="relative">
        <div class="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent"></div>
        <div class="container mx-auto px-4 py-8 sm:py-12 relative">
          <Button variant="ghost" size="sm" @click="goBack" class="gap-2 mb-6">
            <ArrowLeft class="w-4 h-4" />
            Kembali ke Berita & Artikel
          </Button>
          
          <div class="max-w-4xl">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-medium">
                {{ currentArticle.category }}
              </span>
              <span class="px-3 py-1 bg-accent rounded-full text-sm text-muted-foreground flex items-center gap-1">
                <Calendar class="w-3 h-3" />
                {{ currentArticle.date }}
              </span>
              <span class="px-3 py-1 bg-accent rounded-full text-sm text-muted-foreground flex items-center gap-1">
                <Clock class="w-3 h-3" />
                {{ currentArticle.readTime }}
              </span>
            </div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {{ currentArticle.title }}
            </h1>
            <p class="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
              {{ currentArticle.description }}
            </p>
            <div class="flex items-center justify-between flex-wrap gap-4">
              <div class="flex items-center gap-2 text-sm text-muted-foreground">
                <div class="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <User class="w-4 h-4" />
                </div>
                <span>{{ currentArticle.author }}</span>
              </div>
              <div class="flex gap-2">
                <Button variant="outline" size="sm" @click="shareArticle" class="gap-2">
                  <Share2 class="w-4 h-4" />
                  Bagikan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hero Image -->
      <section class="container mx-auto px-4 -mt-4">
        <div class="max-w-4xl mx-auto">
          <div class="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-border/50">
            <img 
              :src="currentArticle.heroImage" 
              :alt="currentArticle.title"
              class="w-full h-48 sm:h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="container mx-auto px-4 py-8 sm:py-12">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Main Content -->
            <div class="lg:col-span-2 space-y-6">
              <template v-for="(block, index) in currentArticle.content" :key="index">
                <h2 
                  v-if="block.type === 'heading'" 
                  class="text-xl sm:text-2xl font-bold text-foreground mt-8 first:mt-0"
                >
                  {{ block.text }}
                </h2>
                <p 
                  v-else-if="block.type === 'paragraph'" 
                  class="text-muted-foreground leading-relaxed whitespace-pre-line"
                >
                  {{ block.text }}
                </p>
              </template>

              <!-- Tags -->
              <div class="pt-6 border-t border-border">
                <p class="text-sm font-medium mb-3">Tags:</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in currentArticle.tags" 
                    :key="tag"
                    class="px-3 py-1 bg-accent rounded-full text-sm text-muted-foreground"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1 space-y-6">
              <!-- Related Articles -->
              <Card v-if="relatedArticlesData.length > 0">
                <CardHeader class="pb-3">
                  <CardTitle class="text-lg flex items-center gap-2">
                    <Newspaper class="w-5 h-5 text-green-500" />
                    Artikel Terkait
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-3">
                  <button
                    v-for="article in relatedArticlesData"
                    :key="article.id"
                    @click="goToArticle(article.id)"
                    class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors text-left"
                  >
                    <div>
                      <p class="font-medium text-sm line-clamp-2">{{ article.title }}</p>
                      <p class="text-xs text-muted-foreground mt-1">{{ article.date }}</p>
                    </div>
                    <ChevronRight class="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </template>

    <Footer />
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
