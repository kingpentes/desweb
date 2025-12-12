<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import ImageWithFallback from './ImageWithFallback.vue'
import {onMounted, onUnmounted, ref} from 'vue'
import SectionCard from './ui/SectionCard.vue';

const hp = ref(false)
function cekUkuran() {
    hp.value = window.innerWidth >= 768
}
onMounted (() => {
    cekUkuran()
    window.addEventListener('resize', cekUkuran)
})
onUnmounted(() => {
    window.removeEventListener('resize', cekUkuran)
})

const skills = [
    { id: 1, title: 'Manusia' },
    { id: 2, title: 'Mahasiswa', description: 'Berkuliah di ITK' },
    { id: 3, title: 'Pembelajar', description: 'Selalu ingin belajar hal baru' }
]
</script>

<template>
    <div class="min-h-screen bg-background">
    <Navbar/>
    <section class="container mx-auto px-4 py-10 sm:py-16 md:py-20">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div class="space-y-4 sm:space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-center">
            Hadri Harazit
            </h1>
            <p class="text-muted-foreground text-base sm:text-lg leading-relaxed text-center">
            berkuliah di itk
            </p>
            <div class="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
            </div>
        </div>
        <div class="relative order-first md:order-last hidden md:block">
            <div class="absolute -inset-4 bg-linear-to-tr from-primary/20 via-chart-2/20 to-transparent rounded-3xl blur-2xl" />
            <div class="relative">
            <ImageWithFallback
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Cyber Security"
                class="w-full h-auto rounded-2xl shadow-2xl border border-border/50"/>
            </div>
        </div>
        </div>
    </section>
    <SectionCard 
        title="Kemampuan yang saya punya" 
        description="Beberapa hal tentang saya"
        :items="skills"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    />
    <Footer/>
    </div>
</template>