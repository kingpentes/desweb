<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ArrowLeft, BookOpen, Clock, User, CheckCircle, ExternalLink } from 'lucide-vue-next';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Button from './ui/button.vue';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui';

const route = useRoute();
const router = useRouter();

// Material data
const materials = {
  'cybersecurity-basics': {
    id: 'cybersecurity-basics',
    title: 'Cybersecurity Basics',
    type: 'Artikel',
    readTime: '15 menit',
    author: 'Tim CyberSafe',
    description: 'Panduan lengkap untuk pemula yang ingin memahami dasar-dasar keamanan siber',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: [
      {
        title: 'Apa itu Keamanan Siber?',
        text: 'Keamanan siber (cybersecurity) adalah praktik melindungi sistem, jaringan, dan program dari serangan digital. Serangan ini biasanya bertujuan untuk mengakses, mengubah, atau menghancurkan informasi sensitif; memeras uang dari pengguna; atau mengganggu proses bisnis normal.'
      },
      {
        title: 'Mengapa Keamanan Siber Penting?',
        text: 'Di era digital ini, hampir semua aspek kehidupan kita terhubung dengan internet. Dari perbankan, belanja, hingga komunikasi pribadi - semuanya dapat menjadi target serangan siber. Keamanan siber melindungi data pribadi, informasi keuangan, dan privasi Anda.'
      },
      {
        title: 'Ancaman Siber Umum',
        text: 'Beberapa ancaman siber yang paling umum meliputi:\n• Phishing - upaya penipuan melalui email atau pesan palsu\n• Malware - perangkat lunak berbahaya termasuk virus dan ransomware\n• Social Engineering - manipulasi psikologis untuk mendapatkan informasi\n• Man-in-the-Middle Attack - penyadapan komunikasi\n• DDoS Attack - serangan yang membanjiri server dengan traffic'
      },
      {
        title: 'Langkah Dasar Perlindungan',
        text: 'Untuk melindungi diri dari ancaman siber:\n1. Gunakan password yang kuat dan unik untuk setiap akun\n2. Aktifkan autentikasi dua faktor (2FA)\n3. Selalu update software dan sistem operasi\n4. Hati-hati dengan email dan link mencurigakan\n5. Gunakan antivirus yang terpercaya\n6. Backup data secara rutin'
      }
    ],
    keyPoints: [
      'Keamanan siber melindungi data dan privasi Anda',
      'Ancaman siber terus berkembang setiap hari',
      'Edukasi adalah kunci pencegahan',
      'Praktik keamanan dasar dapat mencegah 90% serangan'
    ],
    relatedMaterials: ['password-management', 'phishing-detection']
  },
  'password-management': {
    id: 'password-management',
    title: 'Password Management Guide',
    type: 'Tutorial',
    readTime: '10 menit',
    author: 'Tim CyberSafe',
    description: 'Cara mengelola password dengan aman dan efektif menggunakan password manager',
    heroImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: [
      {
        title: 'Mengapa Password Manager?',
        text: 'Password manager adalah aplikasi yang menyimpan dan mengelola password Anda dengan aman. Dengan password manager, Anda hanya perlu mengingat satu master password, sementara aplikasi akan mengingat semua password lainnya untuk Anda.'
      },
      {
        title: 'Ciri Password yang Kuat',
        text: 'Password yang kuat memiliki karakteristik:\n• Minimal 12-16 karakter\n• Kombinasi huruf besar dan kecil\n• Mengandung angka dan simbol\n• Tidak menggunakan informasi pribadi\n• Tidak menggunakan kata-kata umum dari kamus\n• Unik untuk setiap akun'
      },
      {
        title: 'Rekomendasi Password Manager',
        text: 'Beberapa password manager yang terpercaya:\n• Bitwarden (gratis & open source)\n• 1Password (berbayar, fitur lengkap)\n• LastPass (freemium)\n• Dashlane (berbayar)\n• KeePass (gratis, offline)\n\nPilih yang sesuai dengan kebutuhan dan budget Anda.'
      },
      {
        title: 'Tips Keamanan Password',
        text: '• Aktifkan 2FA untuk password manager Anda\n• Jangan pernah bagikan master password\n• Gunakan passphrase yang mudah diingat tapi sulit ditebak\n• Review dan update password secara berkala\n• Hapus akun yang tidak digunakan lagi'
      }
    ],
    keyPoints: [
      'Satu password untuk semua adalah resiko besar',
      'Password manager menyederhanakan keamanan',
      'Aktifkan 2FA untuk perlindungan ekstra',
      'Update password secara berkala'
    ],
    relatedMaterials: ['cybersecurity-basics', 'phishing-detection']
  },
  'phishing-detection': {
    id: 'phishing-detection',
    title: 'Phishing Detection Workshop',
    type: 'Video',
    readTime: '20 menit',
    author: 'Tim CyberSafe',
    description: 'Video interaktif untuk melatih kemampuan mendeteksi email dan website phishing',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: [
      {
        title: 'Mengenali Email Phishing',
        text: 'Tanda-tanda email phishing:\n• Alamat email pengirim mencurigakan\n• Salam yang tidak personal ("Dear Customer")\n• Kesalahan ejaan dan tata bahasa\n• Mengandung urgensi atau ancaman\n• Link yang tidak sesuai dengan teks\n• Meminta informasi sensitif'
      },
      {
        title: 'Website Phishing',
        text: 'Cara mendeteksi website phishing:\n• Periksa URL dengan teliti (typosquatting)\n• Cari ikon gembok HTTPS\n• Perhatikan kualitas desain website\n• Waspada dengan pop-up yang meminta data\n• Jangan percaya website dengan banyak iklan mencurigakan'
      },
      {
        title: 'Teknik Verifikasi',
        text: 'Langkah verifikasi sebelum klik:\n1. Hover mouse di atas link untuk melihat URL asli\n2. Cek alamat email pengirim secara lengkap\n3. Hubungi perusahaan melalui channel resmi\n4. Gunakan website seperti VirusTotal untuk scan link\n5. Jangan download attachment dari email mencurigakan'
      },
      {
        title: 'Apa yang Harus Dilakukan',
        text: 'Jika menerima email phishing:\n• Jangan klik link apapun\n• Jangan balas email\n• Laporkan sebagai spam/phishing\n• Hapus email tersebut\n• Jika sudah terlanjur klik, segera ganti password dan aktifkan 2FA'
      }
    ],
    keyPoints: [
      'Selalu verifikasi pengirim email',
      'Jangan percaya urgensi palsu',
      'Hover sebelum klik link',
      'Laporkan email phishing'
    ],
    relatedMaterials: ['cybersecurity-basics', 'password-management']
  },
  'mobile-security': {
    id: 'mobile-security',
    title: 'Mobile Security Checklist',
    type: 'Checklist',
    readTime: '8 menit',
    author: 'Tim CyberSafe',
    description: 'Daftar periksa lengkap untuk mengamankan smartphone Android dan iOS',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: [
      {
        title: 'Keamanan Layar Kunci',
        text: '✅ Aktifkan kunci layar (PIN/Pattern/Biometrik)\n✅ Gunakan PIN minimal 6 digit\n✅ Aktifkan biometrik (sidik jari/Face ID)\n✅ Atur waktu auto-lock singkat (30 detik - 1 menit)\n✅ Nonaktifkan notifikasi sensitif di lock screen'
      },
      {
        title: 'Keamanan Aplikasi',
        text: '✅ Download hanya dari official store (Play Store/App Store)\n✅ Periksa permission aplikasi sebelum install\n✅ Hapus aplikasi yang tidak digunakan\n✅ Update aplikasi secara rutin\n✅ Nonaktifkan install dari sumber tidak dikenal'
      },
      {
        title: 'Keamanan Data',
        text: '✅ Aktifkan enkripsi perangkat\n✅ Backup data secara rutin ke cloud/komputer\n✅ Aktifkan Find My Device (Android) / Find My iPhone (iOS)\n✅ Siapkan opsi remote wipe jika hilang\n✅ Gunakan VPN saat di WiFi publik'
      },
      {
        title: 'Pengaturan Privasi',
        text: '✅ Review permission lokasi untuk setiap app\n✅ Batasi akses kamera dan mikrofon\n✅ Nonaktifkan Bluetooth saat tidak digunakan\n✅ Hati-hati dengan public charging (juice jacking)\n✅ Aktifkan 2FA untuk semua akun penting'
      }
    ],
    keyPoints: [
      'Kunci layar adalah pertahanan pertama',
      'Hanya install app dari sumber resmi',
      'Backup dan enkripsi data Anda',
      'Aktifkan Find My Device'
    ],
    relatedMaterials: ['cybersecurity-basics', 'password-management']
  }
};

const currentMaterial = computed(() => {
  const slug = route.params.slug;
  return materials[slug] || null;
});

const goBack = () => {
  router.push({ name: 'Resources' });
};
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div class="container mx-auto px-4 py-8 sm:py-12 relative">
        <Button variant="ghost" size="sm" @click="goBack" class="gap-2 mb-6">
          <ArrowLeft class="w-4 h-4" />
          Kembali ke Sumber Daya
        </Button>
        
        <div class="max-w-4xl">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {{ currentMaterial.type }}
            </span>
            <span class="px-3 py-1 bg-accent rounded-full text-sm text-muted-foreground flex items-center gap-1">
              <Clock class="w-3 h-3" />
              {{ currentMaterial.readTime }}
            </span>
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {{ currentMaterial.title }}
          </h1>
          <p class="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
            {{ currentMaterial.description }}
          </p>
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <User class="w-4 h-4" />
            <span>{{ currentMaterial.author }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Image -->
    <section class="container mx-auto px-4 -mt-4">
      <div class="max-w-4xl mx-auto">
        <div class="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-border/50">
          <img 
            :src="currentMaterial.heroImage" 
            :alt="currentMaterial.title"
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
          <div class="lg:col-span-2 space-y-8">
            <div 
              v-for="(section, index) in currentMaterial.content" 
              :key="index"
              class="prose prose-slate max-w-none"
            >
              <h2 class="text-xl sm:text-2xl font-bold text-foreground mb-3">
                {{ section.title }}
              </h2>
              <p class="text-muted-foreground leading-relaxed whitespace-pre-line">
                {{ section.text }}
              </p>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- Key Points Card -->
            <Card>
              <CardHeader class="pb-3">
                <CardTitle class="text-lg flex items-center gap-2">
                  <BookOpen class="w-5 h-5 text-primary" />
                  Poin Penting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-3">
                  <li 
                    v-for="point in currentMaterial.keyPoints" 
                    :key="point"
                    class="flex gap-2 text-sm"
                  >
                    <CheckCircle class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span class="text-muted-foreground">{{ point }}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto px-4 pb-12">
      <div class="max-w-4xl mx-auto">
        <Card class="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/20">
          <CardContent class="py-6 sm:py-8 text-center">
            <h3 class="text-xl font-bold mb-2">Punya Pertanyaan?</h3>
            <p class="text-muted-foreground mb-4 text-sm sm:text-base">
              Diskusikan dengan asisten virtual kami di Chat Room
            </p>
            <Button @click="router.push({ name: 'ChatRoom' })" class="gap-2">
              Buka Chat Room
              <ExternalLink class="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
    <Footer />
  </div>
</template>
