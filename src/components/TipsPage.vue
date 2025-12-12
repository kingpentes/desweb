<script setup>
import { ref } from 'vue';
import { Shield, Key, RefreshCw, Mail, Smartphone, Globe, Database, Users, CheckCircle, ChevronDown } from 'lucide-vue-next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui';
import ImageWithFallback from './ImageWithFallback.vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Button from './ui/Button.vue';

const openFaqIndex = ref(null);

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
};

const tips = [
  {
    icon: Key,
    title: 'Gunakan Password Kuat',
    description: 'Password adalah garis pertahanan pertama Anda',
    items: [
      'Minimal 12 karakter dengan kombinasi huruf besar, kecil, angka, dan simbol',
      'Jangan gunakan informasi pribadi (tanggal lahir, nama)',
      'Gunakan password yang berbeda untuk setiap akun',
      'Pertimbangkan menggunakan password manager',
      'Aktifkan autentikasi dua faktor (2FA) di semua akun',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Update Software Secara Rutin',
    description: 'Software yang outdated adalah celah keamanan',
    items: [
      'Aktifkan automatic updates untuk sistem operasi',
      'Update aplikasi segera setelah tersedia patch keamanan',
      'Gunakan antivirus dan update database-nya secara rutin',
      'Hapus aplikasi yang tidak digunakan',
      'Periksa update firmware untuk router dan perangkat IoT',
    ],
  },
  {
    icon: Mail,
    title: 'Waspada Terhadap Email Phishing',
    description: 'Jangan mudah tertipu dengan email mencurigakan',
    items: [
      'Periksa alamat email pengirim dengan teliti',
      'Jangan klik link atau download attachment yang mencurigakan',
      'Verifikasi permintaan informasi sensitif melalui channel resmi',
      'Perhatikan kesalahan tata bahasa dan ejaan',
      'Hover mouse di atas link untuk melihat URL sebenarnya',
    ],
  },
  {
    icon: Smartphone,
    title: 'Amankan Perangkat Mobile',
    description: 'Smartphone Anda menyimpan banyak data pribadi',
    items: [
      'Aktifkan kunci layar dengan PIN/pattern/biometrik',
      'Download aplikasi hanya dari official store',
      'Periksa permission yang diminta aplikasi',
      'Aktifkan fitur Find My Device',
      'Enkripsi data di perangkat Anda',
    ],
  },
  {
    icon: Globe,
    title: 'Browsing dengan Aman',
    description: 'Lindungi privasi saat menjelajah internet',
    items: [
      'Gunakan HTTPS untuk website yang Anda kunjungi',
      'Pasang ad-blocker dan anti-tracking extension',
      'Hapus cookies dan cache secara berkala',
      'Gunakan mode incognito untuk komputer publik',
      'Pertimbangkan menggunakan VPN untuk koneksi sensitif',
    ],
  },
  {
    icon: Database,
    title: 'Backup Data Secara Rutin',
    description: 'Persiapkan diri untuk kemungkinan terburuk',
    items: [
      'Gunakan rule 3-2-1: 3 copies, 2 media berbeda, 1 offsite',
      'Jadwalkan backup otomatis',
      'Test restore backup secara berkala',
      'Enkripsi backup Anda',
      'Gunakan cloud storage dan external drive',
    ],
  },
  {
    icon: Shield,
    title: 'Batasi Informasi Pribadi Online',
    description: 'Jaga privasi di media sosial',
    items: [
      'Review dan atur privacy settings di semua platform',
      'Jangan bagikan informasi sensitif di publik',
      'Hati-hati dengan quiz dan survey online',
      'Periksa siapa yang dapat melihat postingan Anda',
      'Jangan check-in lokasi real-time',
    ],
  },
  {
    icon: Users,
    title: 'Edukasi Keluarga dan Tim',
    description: 'Keamanan adalah tanggung jawab bersama',
    items: [
      'Diskusikan keamanan siber dengan keluarga',
      'Ajarkan anak-anak tentang internet safety',
      'Buat policy keamanan untuk bisnis',
      'Lakukan training awareness secara berkala',
      'Berbagi informasi tentang ancaman terbaru',
    ],
  },
];

const quickTips = [
  'Jangan gunakan WiFi publik untuk transaksi finansial',
  'Logout dari akun setelah selesai menggunakan',
  'Hati-hati dengan USB drive dari sumber tidak dikenal',
  'Verifikasi website sebelum memasukkan informasi',
  'Laporkan aktivitas mencurigakan ke pihak berwenang',
];

const faqs = [
  {
    question: 'Seberapa sering saya harus mengganti password?',
    answer: 'Disarankan mengganti password setiap 3-6 bulan, atau segera jika ada indikasi kebocoran data. Yang lebih penting adalah menggunakan password yang kuat dan unik untuk setiap akun.',
  },
  {
    question: 'Apakah antivirus gratis cukup aman?',
    answer: 'Antivirus gratis dapat memberikan perlindungan dasar, tetapi biasanya memiliki fitur terbatas. Untuk perlindungan optimal, pertimbangkan versi premium yang menawarkan real-time protection dan fitur tambahan.',
  },
  {
    question: 'Apa yang harus dilakukan jika menjadi korban phishing?',
    answer: 'Segera ganti password akun yang terpengaruh, laporkan ke pihak berwenang, pantau aktivitas rekening bank, dan aktifkan 2FA. Jangan panik dan dokumentasikan semua bukti.',
  },
  {
    question: 'Apakah VPN wajib digunakan?',
    answer: 'VPN tidak wajib untuk penggunaan sehari-hari, tetapi sangat disarankan saat menggunakan WiFi publik atau mengakses informasi sensitif. VPN mengenkripsi koneksi Anda dan melindungi privasi.',
  },
];
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
            <span class="text-primary font-medium">Panduan Keamanan</span>
          </div>
          <div class="space-y-3">
            <h1 class="text-3xl md:text-4xl font-bold text-foreground leading-tight">Tips Keamanan Siber</h1>
            <p class="text-muted-foreground text-sm md:text-base leading-relaxed">
              Praktik terbaik untuk melindungi diri Anda dari ancaman siber di dunia digital.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Image -->
    <section class="container mx-auto px-4 -mt-8">
      <div class="rounded-2xl overflow-hidden shadow-xl border border-border/60 max-w-6xl mx-auto">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Tips Keamanan Siber"
          class="w-full h-56 md:h-64 object-cover"
        />
      </div>
    </section>

    <!-- Tips Cards Section -->
    <section class="py-10 md:py-14">
      <div class="container mx-auto max-w-6xl px-4">
        <div class="grid md:grid-cols-2 gap-6">
          <Card
            v-for="tip in tips"
            :key="tip.title"
            class="border border-border/70 shadow-sm hover:shadow-lg transition-shadow bg-card"
          >
            <CardHeader class="pb-3">
              <div class="flex items-start gap-3 mb-4">
                <div class="w-14 h-14 rounded-xl bg-linear-to-br from-primary/10 to-chart-1/10 flex items-center justify-center shrink-0 shadow-sm">
                  <component :is="tip.icon" class="w-7 h-7 text-primary" />
                </div>
                <div class="flex-1">
                  <CardTitle class="text-base md:text-lg mb-2">{{ tip.title }}</CardTitle>
                  <CardDescription class="text-xs md:text-sm leading-relaxed">
                    {{ tip.description }}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent class="pt-0">
              <ul class="space-y-2">
                <li v-for="item in tip.items" :key="item" class="flex gap-2 text-xs md:text-sm text-muted-foreground">
                  <CheckCircle class="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Quick Tips Card -->
    <section class="container mx-auto px-4 pb-14">
      <Card class="max-w-6xl mx-auto bg-linear-to-r from-primary via-primary to-chart-1 text-primary-foreground border-0 shadow-2xl shadow-primary/25">
        <CardHeader>
          <CardTitle class="text-white font-bold">Tips Cepat Sehari-hari</CardTitle>
          <CardDescription class="text-white/90">
            Kebiasaan sederhana yang bisa membuat perbedaan besar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="tip in quickTips" :key="tip" class="flex gap-3 items-start">
              <span class="text-xl shrink-0">💡</span>
              <p class="text-white text-sm md:text-base">{{ tip }}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>

    <!-- FAQ Section -->
    <section class="container mx-auto px-4 pb-16">
      <div class="max-w-3xl mx-auto space-y-8">
        <h2 class="text-2xl md:text-3xl font-bold text-foreground">Pertanyaan Umum</h2>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
                :key="index"
            class="border border-border rounded-xl overflow-hidden"
          >
            <Button
              @click="toggleFaq(index)"
              variant="outline"
              class="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
            >
              <span class="font-semibold text-sm md:text-base text-foreground">{{ faq.question }}</span>
              <ChevronDown
                :class="['w-5 h-5 text-muted-foreground transition-transform', openFaqIndex === index ? 'rotate-180' : '']"
              />
            </Button>
            <div
              v-if="openFaqIndex === index"
              class="px-6 pb-6 pt-0 text-sm md:text-base text-muted-foreground leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
