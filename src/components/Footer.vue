<script setup>
import { useRouter } from 'vue-router';
import { Shield } from 'lucide-vue-next';
import { useExternalRedirect } from '@/composables/useExternalRedirect'
const router = useRouter();

const navigateTo = (routeName) => {
  router.push({ name: routeName });
};

const {goToFacebook,
  goToTwitter, 
  goToInstagram, 
  goToLinkedIn,
  showRedirectModal, 
  pendingRedirect, 
  handleExternalRedirect, 
  confirmRedirect, 
  cancelRedirect,

} = useExternalRedirect()
</script>

<template>
  <footer class="bg-muted/30 border-t border-border mt-8 sm:mt-16">
    <div class="container mx-auto px-4 py-8 sm:py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Brand Section -->
        <div class="space-y-4 sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield class="w-6 h-6 text-primary-foreground" />
            </div>
            <span class="text-lg font-semibold">CyberSafe Indonesia</span>
          </div>
          <p class="text-muted-foreground text-sm leading-relaxed">
            Platform edukasi keamanan siber untuk membangun Indonesia yang lebih aman di dunia digital.
          </p>
        </div>
        <!-- Menu Section -->
        <div>
          <h4 class="font-semibold mb-3 sm:mb-4">Menu</h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li><button @click="navigateTo('Home')" class="hover:text-foreground transition-colors cursor-pointer">Beranda</button></li>
            <li><button @click="navigateTo('Threats')" class="hover:text-foreground transition-colors cursor-pointer">Ancaman Siber</button></li>
            <li><button @click="navigateTo('Tips')" class="hover:text-foreground transition-colors cursor-pointer">Tips Keamanan</button></li>
            <li><button @click="navigateTo('Resources')" class="hover:text-foreground transition-colors cursor-pointer">Sumber Daya</button></li>
          </ul>
        </div>
        <!-- Contact Section -->
        <div>
          <h4 class="font-semibold mb-3 sm:mb-4">Kontak</h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="break-all sm:break-normal">Email: info@cybersafe.id</li>
            <li>Telepon: +62 21 1234 5678</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
        <!-- Social Section -->
        <div>
          <h4 class="font-semibold mb-3 sm:mb-4">Ikuti Kami</h4>
          <ul class="flex flex-wrap gap-4 sm:block sm:space-y-2 text-sm text-muted-foreground">
            <!-- gunakan useExternalRedirect-->
            <li><button @click="goToFacebook" class="hover:text-foreground transition-colors cursor-pointer">Facebook</button></li>
            <li><button @click="goToTwitter" class="hover:text-foreground transition-colors cursor-pointer">Twitter</button></li>
            <li><button @click="goToInstagram" class="hover:text-foreground transition-colors cursor-pointer">Instagram</button></li>
            <li><button @click="goToLinkedIn" class="hover:text-foreground transition-colors cursor-pointer">LinkedIn</button></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 CyberSafe Indonesia. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
