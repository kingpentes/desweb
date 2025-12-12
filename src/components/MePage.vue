<script setup>
    import { Shield, Lock, Eye, Users } from '@/config/icons'
    import ImageWithFallback from './ImageWithFallback.vue';
    import Navbar from './Navbar.vue';
    import Footer from './Footer.vue';
    import SectionCard from './ui/SectionCard.vue';
const skills = [
    { id: 1, title: 'Manusia', description: 'hanya manusia biasa', icon: Users},
    { id: 2, title: 'ngoding', description: 'seorang manusia coding', icon: Lock},
    { id: 3, title: 'Pembelajar', description: 'Selalu ingin belajar hal baru', icon: Eye }
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
            <div class="grid grid-cols-3">
            <h2 class="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-center">
                11231029
            </h2>
            <h2 class="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-center">
                informatika
            </h2>
            
            <h2 class="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-center">
                ITK
            </h2>

            </div>
            <p class="text-muted-foreground text-base sm:text-lg leading-relaxed text-center">
            berkuliah di itk, saya adalah seorang mahasiswa informatika
            </p>
            <div class="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
            </div>
        </div>
        <div class="relative order-first md:order-last hidden md:block">
            <div class="absolute -inset-4 bg-linear-to-tr from-primary/20 via-chart-2/20 to-transparent rounded-3xl blur-2xl" />
            <div class="relative">
            <ImageWithFallback
                src="https://images.tokopedia.net/img/JFrBQq/2022/4/13/1a1bfb33-0fbb-429a-9c1b-4f2e595ff4ce.jpg"
                class="w-full h-auto rounded-2xl shadow-2xl border border-border/50"/>
            </div>
        </div>
        </div>
    </section>
    <SectionCard 
        title="Kemampuan yang saya punya" 
        :items="skills"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        showIcon
    />
    <Footer/>
    </div>
</template>