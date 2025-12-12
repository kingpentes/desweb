<script setup>
import { Shield, AlertTriangle, Lock, Bug, Mail } from '@/config/icons'
import threatsImage from '../img/threats.png'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from './ui'
import RiskBadge from './ui/riskBadge.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import { threats as threatsData } from '@/data/threats'

// Map icons to threats data
const threats = threatsData.map(threat => {
  let icon
  switch(threat.title) {
    case 'Phishing':
      icon = Mail
      break
    case 'Malware':
      icon = Bug
      break
    case 'Ransomware':
      icon = Lock
      break
    case 'Pencurian Identitas':
      icon = Shield
      break
    case 'Social Engineering':
      icon = AlertTriangle
      break
    case 'Serangan Brute Force':
      icon = Lock
      break
    default:
      icon = Shield
  }
  return { ...threat, icon }
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />

    <!-- Header / Hero Section -->
    <section class="py-16 px-4 md:px-20 bg-linear-to-br from-destructive/10 via-destructive/5 to-transparent">
      <div class="container mx-auto">
        <div class="space-y-6 max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-destructive/10 rounded-full border border-destructive/20 text-xs md:text-sm">
            <div class="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span class="text-destructive font-medium">Ancaman Siber yang Perlu Anda Ketahui</span>
          </div>
          <div class="space-y-3">
            <h1 class="text-3xl md:text-4xl font-bold text-foreground leading-tight">Ancaman Siber di Era Digital</h1>
            <p class="text-muted-foreground text-sm md:text-base leading-relaxed">
              Memahami berbagai jenis ancaman siber adalah langkah pertama untuk melindungi diri Anda di dunia digital.
              Di bawah ini adalah ancaman-ancaman umum yang sering terjadi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Image -->
    <section class="container mx-auto px-4">
      <div class="rounded-2xl overflow-hidden shadow-xl border border-border/60 max-w-4xl mx-auto">
        <img
          :src="threatsImage"
          alt="Ancaman Siber"
          class="w-full h-56 md:h-72 object-cover"
        />
      </div>
    </section>

    <!-- Threat Cards -->
    <section class="py-10 md:py-14">
      <div class="container mx-auto max-w-6xl px-4">
        <div class="grid md:grid-cols-2 gap-6">
          <Card
            v-for="threat in threats"
            :key="threat.title"
            class="border border-border/70 shadow-sm hover:shadow-lg transition-shadow bg-card"
          >
            <CardHeader class="pb-3">
              <div class="flex items-center justify-between gap-3 mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <component :is="threat.icon" class="w-6 h-6 text-destructive" />
                  </div>
                  <div class="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
                    <span>{{ threat.badge }}</span>
                  </div>
                </div>
                <RiskBadge :level="threat.riskLevel" />
              </div>
              <CardTitle class="text-base md:text-lg">{{ threat.title }}</CardTitle>
              <CardDescription class="text-xs md:text-sm mt-1 leading-relaxed">
                {{ threat.description }}
              </CardDescription>
            </CardHeader>
            <CardContent class="pt-0">
              <p class="text-xs font-semibold mb-2 text-foreground">Contoh Serangan:</p>
              <ul class="list-disc list-inside space-y-1.5 text-xs md:text-sm text-muted-foreground">
                <li v-for="item in threat.items" :key="item">
                  {{ item }}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Reminder Banner -->
    <section class="container mx-auto px-4 pb-14">
      <Card class="max-w-4xl mx-auto bg-destructive/5 border-destructive/40">
        <CardContent class="py-4 md:py-5 flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
          <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-destructive text-destructive-foreground shrink-0">
            <Bug class="w-5 h-5" />
          </div>
          <div class="space-y-1">
            <h3 class="font-semibold text-sm md:text-base">Tetap Waspada!</h3>
            <p class="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Ancaman siber terus berkembang dan semakin canggih. Edukasi, kewaspadaan, dan kebiasaan digital yang baik adalah kunci
              untuk melindungi diri Anda, keluarga, dan organisasi dari serangan yang merugikan.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>

    <Footer />
  </div>
</template>
