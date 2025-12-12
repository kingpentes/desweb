<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Shield, Home, AlertTriangle, CheckSquare, BookOpen, Info, Menu, X, Search } from 'lucide-vue-next';
import Button from './ui/button.vue';

const router = useRouter();
const route = useRoute();

// Mobile menu state
const isMobileMenuOpen = ref(false);

const currentPage = computed(() => {
  return route.name?.toLowerCase() || 'home';
});

const navigateTo = (routeName) => {
  router.push({ name: routeName });
  isMobileMenuOpen.value = false; 
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Close mobile menu on route change
watch(route, () => {
  isMobileMenuOpen.value = false;
});

// Prevent body scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Menu items configuration
const menuItems = [
  { name: 'Home', label: 'Beranda', icon: Home, page: 'home' },
  { name: 'Threats', label: 'Ancaman Siber', icon: AlertTriangle, page: 'threats' },
  { name: 'Tips', label: 'Tips Keamanan', icon: CheckSquare, page: 'tips' },
  { name: 'Resources', label: 'Sumber Daya', icon: BookOpen, page: 'resources' },
  { name: 'Search', label: 'Cari Materi', icon: Search, page: 'search' },
  { name: 'About', label: 'Tentang', icon: Info, page: 'about' },
  { name: 'TentangSaya', label: 'About me', icon: Info, page: 'mePage' }

];
</script>

<template>
  <nav class="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2 sm:gap-3 cursor-pointer" @click="navigateTo('Home')">
          <div class="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield class="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
          </div>
          <span class="text-base sm:text-xl font-semibold text-foreground">
            <span class="hidden xs:inline">CyberSafe Indonesia</span>
            <span class="xs:hidden">CyberSafe</span>
          </span>
        </div>
        
        <!-- Desktop Navigation Menu -->
        <div class="hidden md:flex items-center gap-1">
          <Button 
            v-for="item in menuItems"
            :key="item.name"
            :variant="currentPage === item.page ? 'default' : 'ghost'"
            class="flex items-center gap-2"
            @click="navigateTo(item.name)"
          >
            <component :is="item.icon" class="w-4 h-4" />
            {{ item.label }}
          </Button>
        </div>

        <!-- Mobile Hamburger Button -->
        <button 
          class="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-foreground" />
          <X v-else class="w-6 h-6 text-foreground" />
        </button>
      </div>
    </div>
  </nav>

  <Transition name="fade">
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
      @click="closeMobileMenu"
    />
  </Transition>

  <Transition name="slide">
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed top-0 right-0 h-full w-72 bg-background border-l border-border shadow-2xl z-50 md:hidden"
    >
      <div class="flex items-center justify-between p-4 border-b border-border">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shield class="w-5 h-5 text-primary-foreground" />
          </div>
          <span class="font-semibold text-foreground">Menu</span>
        </div>
        <button 
          class="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
          @click="closeMobileMenu"
          aria-label="Close menu"
        >
          <X class="w-5 h-5 text-foreground" />
        </button>
      </div>

      <!-- Mobile Menu Items -->
      <div class="p-4 space-y-2">
        <button
          v-for="item in menuItems"
          :key="item.name"
          class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
          :class="[
            currentPage === item.page 
              ? 'bg-primary text-primary-foreground' 
              : 'hover:bg-accent text-foreground'
          ]"
          @click="navigateTo(item.name)"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span class="font-medium">{{ item.label }}</span>
        </button>
      </div>

      <!-- Mobile Menu Footer -->
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
        <p class="text-xs text-muted-foreground text-center">
          © 2024 CyberSafe Indonesia
        </p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition for drawer */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
