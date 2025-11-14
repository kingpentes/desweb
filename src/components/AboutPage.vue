<script setup>
import { Shield, Target, Users, Heart, Award, Mail, Phone, MapPin } from 'lucide-vue-next';
import ImageWithFallback from './ImageWithFallback.vue';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from './ui';

const props = defineProps({
  onNavigate: {
    type: Function,
    required: true
  }
});

const missions = [
	{
		icon: Target,
		title: 'Misi Kami',
		description: 'Meningkatkan kesadaran dan pengetahuan masyarakat Indonesia tentang keamanan siber melalui edukasi yang mudah dipahami dan dapat diakses oleh semua kalangan.',
	},
	{
		icon: Users,
		title: 'Untuk Siapa',
		description: 'Platform ini ditujukan untuk seluruh masyarakat Indonesia, mulai dari individu, keluarga, pelajar, hingga pelaku UMKM yang ingin melindungi diri di dunia digital.',
	},
	{
		icon: Heart,
		title: 'Komitmen Kami',
		description: 'Menyediakan informasi yang akurat, terpercaya, dan selalu diperbarui sesuai dengan perkembangan ancaman siber terkini untuk melindungi masyarakat Indonesia.',
	},
	{
		icon: Award,
		title: 'Standar Kualitas',
		description: 'Semua konten dikurasi dan divalidasi oleh profesional keamanan siber untuk memastikan informasi yang kami sajikan berkualitas tinggi dan relevan.',
	},
];

const values = [
	{
		title: 'Aksesibilitas',
		description: 'Informasi keamanan siber harus dapat diakses dan dipahami oleh semua orang, tanpa memandang latar belakang teknis mereka.',
	},
	{
		title: 'Keamanan untuk Semua',
		description: 'Keamanan siber adalah hak setiap individu dan harus menjadi prioritas bersama dalam era digital.',
	},
	{
		title: 'Edukasi Berkelanjutan',
		description: 'Ancaman siber terus berkembang, sehingga edukasi harus menjadi proses yang berkelanjutan dan konsisten.',
	},
	{
		title: 'Kolaborasi',
		description: 'Keamanan siber memerlukan kolaborasi antara pemerintah, industri, akademisi, dan masyarakat.',
	},
];

const stats = [
	{ number: '10K+', label: 'Pengguna Teredukasi' },
	{ number: '50+', label: 'Artikel & Panduan' },
	{ number: '24/7', label: 'Akses Informasi' },
	{ number: '100%', label: 'Gratis' },
];

const team = [
	{
		role: 'Keamanan Siber',
		description: 'Profesional bersertifikasi dengan pengalaman di industri',
	},
	{
		role: 'Edukator',
		description: 'Ahli dalam menyampaikan materi teknis dengan bahasa sederhana',
	},
	{
		role: 'Developer',
		description: 'Tim pengembang yang memastikan platform selalu up-to-date',
	},
];
</script>

<template>
	<div class="min-h-screen bg-background">
		<!-- Navbar -->
		<nav class="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
			<div class="container mx-auto px-4 py-4">
				<div class="flex items-center justify-between">
					<!-- Logo -->
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
							<Shield class="w-6 h-6 text-primary-foreground" />
						</div>
						<span class="text-xl font-semibold text-foreground">CyberSafe Indonesia</span>
					</div>
					
					<!-- Navigation Menu -->
					<div class="hidden md:flex items-center gap-1">
						<button 
							class="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
							@click="props.onNavigate('home')"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
								<polyline points="9 22 9 12 15 12 15 22"></polyline>
							</svg>
							Beranda
						</button>
						<button class="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
							</svg>
							Ancaman Siber
						</button>
						<button class="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M9 11l3 3L22 4"></path>
								<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
							</svg>
							Tips Keamanan
						</button>
						<button class="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
								<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
							</svg>
							Sumber Daya
						</button>
						<button class="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M12 16v-4"></path>
								<path d="M12 8h.01"></path>
							</svg>
							Tentang
						</button>
					</div>
				</div>
			</div>
		</nav>

		<!-- Header Section -->
		<section class="bg-linear-to-r from-chart-5/10 to-chart-1/10 py-16">
			<div class="container mx-auto px-4">
				<div class="max-w-3xl mx-auto text-center">
					<h1 class="mb-4">Tentang CyberSafe Indonesia</h1>
					<p class="text-muted-foreground text-lg">
						Platform edukasi keamanan siber untuk membangun Indonesia yang lebih aman di dunia digital
					</p>
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
					v-for="mission in missions"
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
			<Card class="bg-linear-to-r from-primary to-chart-1">
				<CardContent class="py-12">
					<div class="grid md:grid-cols-4 gap-8 text-center text-primary-foreground">
						<div v-for="stat in stats" :key="stat.label">
							<div class="text-4xl md:text-5xl mb-2">{{ stat.number }}</div>
							<p class="opacity-90">{{ stat.label }}</p>
						</div>
					</div>
				</CardContent>
			</Card>
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
						<Button size="lg">Kirim Pesan</Button>
					</div>
				</CardContent>
			</Card>
		</section>

		<!-- Footer CTA -->
		<section class="container mx-auto px-4 pb-16">
			<Card class="bg-linear-to-r from-chart-1/10 to-chart-5/10 border-chart-1/20">
				<CardContent class="py-12 text-center">
					<h3 class="mb-4">Mari Bersama Membangun Indonesia yang Lebih Aman</h3>
					<p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
						Setiap orang berperan dalam menciptakan ekosistem digital yang aman. Mulai dengan edukasi diri sendiri, lalu sebarkan pengetahuan kepada orang-orang di sekitar Anda.
					</p>
					<Button size="lg">Mulai Belajar Sekarang</Button>
				</CardContent>
			</Card>
		</section>

		<!-- Footer -->
		<footer class="bg-muted/30 border-t border-border mt-16">
			<div class="container mx-auto px-4 py-12">
				<div class="grid md:grid-cols-4 gap-8">
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
								<Shield class="w-6 h-6 text-primary-foreground" />
							</div>
							<span class="text-lg font-semibold">CyberSafe Indonesia</span>
						</div>
						<p class="text-muted-foreground text-sm">
							Platform edukasi keamanan siber untuk membangun Indonesia yang lebih aman di dunia digital.
						</p>
					</div>
					<div>
						<h4 class="font-semibold mb-4">Menu</h4>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li><button @click="props.onNavigate('home')" class="hover:text-foreground transition-colors">Beranda</button></li>
							<li><a href="#" class="hover:text-foreground transition-colors">Ancaman Siber</a></li>
							<li><a href="#" class="hover:text-foreground transition-colors">Tips Keamanan</a></li>
							<li><a href="#" class="hover:text-foreground transition-colors">Sumber Daya</a></li>
						</ul>
					</div>
					<div>
						<h4 class="font-semibold mb-4">Kontak</h4>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li>Email: info@cybersafe.id</li>
							<li>Telepon: +62 21 1234 5678</li>
							<li>Jakarta, Indonesia</li>
						</ul>
					</div>
					<div>
						<h4 class="font-semibold mb-4">Ikuti Kami</h4>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li><a href="#" class="hover:text-foreground transition-colors">Facebook</a></li>
							<li><a href="#" class="hover:text-foreground transition-colors">Twitter</a></li>
							<li><a href="#" class="hover:text-foreground transition-colors">Instagram</a></li>
							<li><a href="#" class="hover:text-foreground transition-colors">LinkedIn</a></li>
						</ul>
					</div>
				</div>
				<div class="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
					<p>&copy; 2024 CyberSafe Indonesia. All rights reserved.</p>
				</div>
			</div>
		</footer>
	</div>
</template>

