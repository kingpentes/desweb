<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { Send, Bot, User, MessageCircle, ArrowLeft, Sparkles, Shield } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Button from './ui/button.vue';
import { Card, CardContent, CardHeader, CardTitle } from './ui';

const router = useRouter();

// Chat state
const messages = ref([
  {
    id: 1,
    type: 'bot',
    content: 'Halo! 👋 Selamat datang di CyberSafe Chat. Saya adalah asisten virtual yang siap membantu Anda memahami keamanan siber. Silakan ajukan pertanyaan Anda!',
    timestamp: new Date()
  }
]);

const userInput = ref('');
const isTyping = ref(false);
const chatContainer = ref(null);

// Suggested questions
const suggestedQuestions = [
  'Apa itu phishing?',
  'Bagaimana cara membuat password yang kuat?',
  'Apa itu ransomware?',
  'Bagaimana cara mengamankan WiFi rumah?',
  'Apa itu 2FA?'
];

// Predefined responses (simple bot logic)
const botResponses = {
  'phishing': 'Phishing adalah upaya penipuan untuk mendapatkan data sensitif (seperti password, nomor kartu kredit) dengan menyamar sebagai pihak terpercaya melalui email, pesan, atau situs palsu. Tips menghindari phishing:\n• Periksa alamat email pengirim dengan teliti\n• Jangan klik tautan mencurigakan\n• Verifikasi melalui channel resmi\n• Aktifkan 2FA di semua akun',
  
  'password': 'Tips membuat password yang kuat:\n• Minimal 12 karakter\n• Kombinasi huruf besar, kecil, angka, dan simbol\n• Jangan gunakan informasi pribadi\n• Gunakan password berbeda untuk setiap akun\n• Pertimbangkan menggunakan password manager\n• Aktifkan 2FA untuk keamanan ekstra',
  
  'ransomware': 'Ransomware adalah jenis malware yang mengenkripsi data korban dan meminta tebusan untuk mengembalikannya. Cara mencegah:\n• Backup data secara rutin\n• Update software secara teratur\n• Jangan buka lampiran email mencurigakan\n• Gunakan antivirus yang selalu diperbarui\n• Jangan unduh software dari sumber tidak resmi',
  
  'wifi': 'Cara mengamankan WiFi rumah:\n• Ganti password default router\n• Gunakan enkripsi WPA3 atau WPA2\n• Sembunyikan SSID jika perlu\n• Aktifkan firewall router\n• Update firmware router secara berkala\n• Gunakan password WiFi yang kuat',
  
  '2fa': 'Two-Factor Authentication (2FA) adalah lapisan keamanan tambahan yang mengharuskan dua bentuk verifikasi:\n1. Sesuatu yang Anda tahu (password)\n2. Sesuatu yang Anda miliki (kode dari aplikasi/SMS)\n\nManfaat 2FA:\n• Melindungi akun meski password bocor\n• Memberikan notifikasi jika ada login mencurigakan\n• Sangat disarankan untuk email, banking, dan sosial media',
  
  'malware': 'Malware adalah perangkat lunak berbahaya yang dapat mencuri data, merusak sistem, atau mengambil alih perangkat. Jenis-jenis malware:\n• Virus - menyebar melalui file\n• Trojan - menyamar sebagai software legit\n• Spyware - memata-matai aktivitas\n• Ransomware - mengunci data\n\nCara mencegah: gunakan antivirus, update software, hati-hati saat download.',
  
  'default': 'Terima kasih atas pertanyaan Anda! Saya adalah bot sederhana dengan pengetahuan terbatas. Untuk informasi lebih detail, silakan kunjungi halaman:\n• Ancaman Siber - untuk jenis-jenis ancaman\n• Tips Keamanan - untuk panduan praktis\n• Sumber Daya - untuk materi pembelajaran\n\nAtau hubungi lembaga seperti BSSN atau ID-CERT untuk bantuan profesional.'
};

const getBotResponse = (message) => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('phishing') || lowerMessage.includes('penipuan')) {
    return botResponses.phishing;
  } else if (lowerMessage.includes('password') || lowerMessage.includes('kata sandi') || lowerMessage.includes('sandi')) {
    return botResponses.password;
  } else if (lowerMessage.includes('ransomware') || lowerMessage.includes('ransom')) {
    return botResponses.ransomware;
  } else if (lowerMessage.includes('wifi') || lowerMessage.includes('router') || lowerMessage.includes('jaringan')) {
    return botResponses.wifi;
  } else if (lowerMessage.includes('2fa') || lowerMessage.includes('two factor') || lowerMessage.includes('autentikasi')) {
    return botResponses['2fa'];
  } else if (lowerMessage.includes('malware') || lowerMessage.includes('virus') || lowerMessage.includes('trojan')) {
    return botResponses.malware;
  } else {
    return botResponses.default;
  }
};

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!userInput.value.trim()) return;
  
  // Add user message
  const userMessage = {
    id: messages.value.length + 1,
    type: 'user',
    content: userInput.value,
    timestamp: new Date()
  };
  messages.value.push(userMessage);
  
  const userQuestion = userInput.value;
  userInput.value = '';
  
  await scrollToBottom();
  
  // Show typing indicator
  isTyping.value = true;
  
  // Simulate bot thinking
  setTimeout(async () => {
    isTyping.value = false;
    
    const botMessage = {
      id: messages.value.length + 1,
      type: 'bot',
      content: getBotResponse(userQuestion),
      timestamp: new Date()
    };
    messages.value.push(botMessage);
    
    await scrollToBottom();
  }, 1000 + Math.random() * 1000);
};

const askSuggested = (question) => {
  userInput.value = question;
  sendMessage();
};

const formatTime = (date) => {
  return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
};

const goBack = () => {
  router.back();
};

onMounted(() => {
  scrollToBottom();
});
</script>

<template>
  <div class="min-h-screen bg-background flex flex-col">
    <Navbar />
    
    <!-- Header -->
    <div class="border-b border-border bg-card/50 backdrop-blur-sm sticky top-16 z-40">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center gap-4">
          <Button variant="ghost" size="sm" @click="goBack" class="gap-2">
            <ArrowLeft class="w-4 h-4" />
            <span class="hidden sm:inline">Kembali</span>
          </Button>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center">
              <MessageCircle class="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 class="text-lg font-semibold">CyberSafe Chat</h1>
              <p class="text-xs text-muted-foreground flex items-center gap-1">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Asisten Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Area -->
    <div class="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-4xl">
      <!-- Messages Container -->
      <div 
        ref="chatContainer"
        class="flex-1 overflow-y-auto space-y-4 mb-4 pr-2"
        style="max-height: calc(100vh - 320px);"
      >
        <!-- Messages -->
        <div
          v-for="message in messages"
          :key="message.id"
          :class="[
            'flex gap-3',
            message.type === 'user' ? 'justify-end' : 'justify-start'
          ]"
        >
          <!-- Bot Avatar -->
          <div 
            v-if="message.type === 'bot'"
            class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center flex-shrink-0"
          >
            <Bot class="w-4 h-4 text-white" />
          </div>
          
          <!-- Message Bubble -->
          <div
            :class="[
              'max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3',
              message.type === 'user' 
                ? 'bg-primary text-primary-foreground rounded-br-md' 
                : 'bg-card border border-border rounded-bl-md'
            ]"
          >
            <p class="text-sm whitespace-pre-line leading-relaxed">{{ message.content }}</p>
            <p 
              :class="[
                'text-xs mt-1',
                message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
              ]"
            >
              {{ formatTime(message.timestamp) }}
            </p>
          </div>
          
          <!-- User Avatar -->
          <div 
            v-if="message.type === 'user'"
            class="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0"
          >
            <User class="w-4 h-4 text-accent-foreground" />
          </div>
        </div>
        
        <!-- Typing Indicator -->
        <div v-if="isTyping" class="flex gap-3 justify-start">
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center flex-shrink-0">
            <Bot class="w-4 h-4 text-white" />
          </div>
          <div class="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3">
            <div class="flex gap-1">
              <span class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 0ms;"></span>
              <span class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 150ms;"></span>
              <span class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 300ms;"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Suggested Questions -->
      <div v-if="messages.length <= 2" class="mb-4">
        <p class="text-sm text-muted-foreground mb-2 flex items-center gap-2">
          <Sparkles class="w-4 h-4" />
          Pertanyaan yang sering ditanyakan:
        </p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="question in suggestedQuestions"
            :key="question"
            @click="askSuggested(question)"
            class="px-3 py-1.5 text-sm bg-accent hover:bg-accent/80 rounded-full transition-colors"
          >
            {{ question }}
          </button>
        </div>
      </div>

      <!-- Input Area -->
      <div class="border-t border-border pt-4">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input
            v-model="userInput"
            type="text"
            placeholder="Ketik pertanyaan Anda tentang keamanan siber..."
            class="flex-1 px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
          />
          <Button type="submit" size="lg" :disabled="!userInput.trim()" class="px-4 sm:px-6">
            <Send class="w-5 h-5" />
            <span class="hidden sm:inline ml-2">Kirim</span>
          </Button>
        </form>
        <p class="text-xs text-muted-foreground mt-2 text-center">
          💡 Tip: Tanyakan tentang phishing, password, ransomware, atau keamanan WiFi
        </p>
      </div>
    </div>

    <!-- Info Card -->
    <div class="container mx-auto px-4 pb-8 max-w-4xl">
      <Card class="bg-primary/5 border-primary/20">
        <CardContent class="py-4">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield class="w-5 h-5 text-primary" />
            </div>
            <div>
              <p class="text-sm font-medium">Catatan Penting</p>
              <p class="text-xs text-muted-foreground leading-relaxed mt-1">
                Ini adalah chatbot sederhana untuk edukasi. Untuk insiden keamanan siber serius, 
                hubungi BSSN atau ID-CERT secara langsung.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
/* Custom scrollbar for chat */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: var(--muted-foreground);
}
</style>
