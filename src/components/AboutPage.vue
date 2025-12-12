<script setup>
import { Target, Users, Heart, Award, Mail, Phone, MapPin } from '@/config/icons'
import ImageWithFallback from './ImageWithFallback.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from './ui'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import { useNavigation } from '@/composables/useNavigation'
import { useEmail } from '@/composables/useEmail'
import { missions, values, stats, team } from '@/data/about'

const { navigateToPage } = useNavigation()
const { sendToCyberSafe } = useEmail()

const sendEmail = () => {
  sendToCyberSafe()
}

const startLearning = () => {
  navigateToPage('Resources')
}

const missionsWithIcons = [
	{ ...missions[0], icon: Target },
	{ ...missions[1], icon: Users },
	{ ...missions[2], icon: Heart },
	{ ...missions[3], icon: Award },
]
</script>

<template>
	<div class="min-h-screen bg-background">
		<Navbar />

		<!-- Header Section -->
		<section class="py-16 px-4 md:px-20 bg-linear-to-br from-chart-5/10 via-chart-5/5 to-transparent">
			<div class="container mx-auto max-w-4xl">
				<div class="space-y-6">
					<div class="inline-flex items-center gap-2 px-3 py-1.5 bg-chart-5/10 rounded-full border border-chart-5/20 text-xs md:text-sm">
						<div class="w-2 h-2 bg-chart-5 rounded-full animate-pulse" />
						<span class="text-chart-5 font-medium">Tentang Platform</span>
					</div>
					<div class="space-y-3">
						<h1 class="text-3xl md:text-4xl font-bold text-foreground leading-tight">Tentang CyberSafe Indonesia</h1>
						<p class="text-muted-foreground text-sm md:text-base leading-relaxed">
							Platform edukasi keamanan siber untuk membangun Indonesia yang lebih aman di dunia digital
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Hero Image -->
		<section class="container mx-auto px-4 -mt-8">
			<div class="rounded-xl overflow-hidden shadow-xl">
				<ImageWithFallback
					src="https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNDQ4Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
					alt="Team Collaboration"
					class="w-full h-64 object-cover"
				/>
			</div>
		</section>

		<!-- Mission Section -->
		<section class="container mx-auto px-4 py-16">
			<div class="text-center mb-12">
				<h2 class="mb-4">Mengapa Kami Ada?</h2>
				<p class="text-muted-foreground max-w-2xl mx-auto">
					Di tengah meningkatnya ancaman siber, kami percaya bahwa edukasi adalah kunci untuk melindungi masyarakat Indonesia di dunia digital.
				</p>
			</div>
			<div class="grid md:grid-cols-2 gap-6">
				<Card
					v-for="mission in missionsWithIcons"
					:key="mission.title"
					class="hover:shadow-lg transition-shadow"
				>
					<CardHeader>
						<div class="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center mb-4">
							<component :is="mission.icon" class="w-6 h-6 text-chart-1" />
						</div>
						<CardTitle>{{ mission.title }}</CardTitle>
						<CardDescription>{{ mission.description }}</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</section>

		<!-- Stats Section -->
		<section class="container mx-auto px-4 pb-16">
			<div class="bg-linear-to-r from-primary to-chart-1 rounded-lg">
				<div class="py-12">
					<div class="grid md:grid-cols-4 gap-8 text-center text-primary-foreground">
						<div v-for="stat in stats" :key="stat.label">
							<div class="text-4xl md:text-5xl mb-2">{{ stat.number }}</div>
							<p class="opacity-90">{{ stat.label }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Values Section -->
		<section class="container mx-auto px-4 pb-16">
			<div class="text-center mb-12">
				<h2 class="mb-4">Nilai-Nilai Kami</h2>
				<p class="text-muted-foreground max-w-2xl mx-auto">
					Prinsip yang menjadi landasan setiap langkah kami dalam mengedukasi masyarakat tentang keamanan siber.
				</p>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<Card
					v-for="(value, index) in values"
					:key="value.title"
					class="text-center hover:shadow-lg transition-shadow"
				>
					<CardHeader>
						<div class="w-12 h-12 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-chart-2">{{ index + 1 }}</span>
						</div>
						<CardTitle class="text-lg">{{ value.title }}</CardTitle>
						<CardDescription>{{ value.description }}</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</section>

		<!-- Team Section -->
		<section class="container mx-auto px-4 pb-16">
			<div class="text-center mb-12">
				<h2 class="mb-4">Tim Kami</h2>
				<p class="text-muted-foreground max-w-2xl mx-auto">
					Didukung oleh tim profesional yang berdedikasi untuk memberikan edukasi keamanan siber terbaik.
				</p>
			</div>
			<div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
				<Card v-for="member in team" :key="member.role" class="text-center">
					<CardHeader>
						<div class="w-16 h-16 bg-linear-to-br from-chart-3 to-chart-5 rounded-full mx-auto mb-4" />
						<CardTitle class="text-lg">{{ member.role }}</CardTitle>
						<CardDescription>{{ member.description }}</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</section>

		<!-- Contact Section -->
		<section class="container mx-auto px-4 pb-16">
			<Card class="max-w-4xl mx-auto">
				<CardHeader class="text-center">
					<CardTitle>Hubungi Kami</CardTitle>
					<CardDescription>
						Ada pertanyaan atau saran? Kami senang mendengar dari Anda.
					</CardDescription>
				</CardHeader>
				<CardContent class="space-y-6">
					<div class="grid md:grid-cols-3 gap-6">
						<div class="flex flex-col items-center text-center gap-3">
							<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
								<Mail class="w-6 h-6 text-primary" />
							</div>
							<div>
								<h4>Email</h4>
								<p class="text-muted-foreground">info@cybersafe.id</p>
							</div>
						</div>
						<div class="flex flex-col items-center text-center gap-3">
							<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
								<Phone class="w-6 h-6 text-primary" />
							</div>
							<div>
								<h4>Telepon</h4>
								<p class="text-muted-foreground">+62 21 1234 5678</p>
							</div>
						</div>
						<div class="flex flex-col items-center text-center gap-3">
							<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
								<MapPin class="w-6 h-6 text-primary" />
							</div>
							<div>
								<h4>Lokasi</h4>
								<p class="text-muted-foreground">Jakarta, Indonesia</p>
							</div>
						</div>
					</div>
					<div class="text-center pt-6">
						<Button size="lg" @click="sendEmail">Kirim Pesan</Button>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Footer CTA -->
		<section class="container mx-auto px-4 pb-16">
			<div class="bg-linear-to-r from-chart-1/10 to-chart-5/10 border-chart-1/20">
				<div class="py-12 text-center">
					<h2 class="text-2xl font-semibold leading-none tracking-tight">Bergabunglah dengan Kami</h2>
					<h3 class="my-4">Mari Bersama Membangun Indonesia yang Lebih Aman</h3>
					<p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
						Setiap orang berperan dalam menciptakan ekosistem digital yang aman. Mulai dengan edukasi diri sendiri, lalu sebarkan pengetahuan kepada orang-orang di sekitar Anda.
					</p>
					<Button size="lg" @click="startLearning">Mulai Belajar Sekarang</Button>
				</div>
			</div>
		</section>

		<Footer />
	</div>
</template>

