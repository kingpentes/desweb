export const threats = [
  {
    badge: 'Umum',
    title: 'Phishing',
    description:
      'Upaya penipuan untuk mendapatkan data sensitif dengan menyamar sebagai pihak terpercaya melalui email, pesan, atau situs palsu.',
    items: [
      'Selalu periksa alamat email dan URL dengan teliti',
      'Jangan klik tautan mencurigakan',
      'Aktifkan autentikasi dua faktor (2FA)',
    ],
    riskLevel: 'Tinggi',
  },
  {
    badge: 'Teknis',
    title: 'Malware',
    riskLevel: 'Tinggi',
    description:
      'Perangkat lunak berbahaya yang dapat mencuri data, merusak sistem, atau mengambil alih perangkat Anda.',
    items: [
      'Gunakan antivirus yang selalu diperbarui',
      'Hanya instal aplikasi dari sumber resmi',
      'Rutin lakukan pemindaian keamanan',
    ],
  },
  {
    badge: 'Serius',
    title: 'Ransomware',
    riskLevel: 'Sangat Tinggi',
    description:
      'Jenis malware yang mengenkripsi data dan meminta tebusan untuk mengembalikannya.',
    items: [
      'Selalu buat salinan cadangan (backup) data penting',
      'Jangan membuka lampiran email yang mencurigakan',
      'Pastikan sistem operasi selalu up-to-date',
    ],
  },
  {
    badge: 'Identitas',
    title: 'Pencurian Identitas',
    riskLevel: 'Tinggi',
    description:
      'Penggunaan data pribadi Anda tanpa izin untuk tujuan penipuan atau kejahatan lainnya.',
    items: [
      'Jangan bagikan data pribadi di media sosial secara berlebihan',
      'Gunakan kata sandi yang kuat dan unik',
      'Pantau aktivitas akun keuangan Anda secara berkala',
    ],
  },
  {
    badge: 'Manipulasi',
    title: 'Social Engineering',
    riskLevel: 'Tinggi',
    description:
      'Upaya memanipulasi psikologis korban untuk mengungkapkan informasi rahasia atau melakukan tindakan tertentu.',
    items: [
      'Selalu verifikasi identitas pihak yang meminta informasi',
      'Jangan mudah panik saat mendapat ancaman atau tekanan',
      'Laporkan percobaan penipuan pada pihak berwenang atau internal',
    ],
  },
  {
    badge: 'Teknis',
    title: 'Serangan Brute Force',
    riskLevel: 'Sedang',
    description:
      'Upaya menebak kata sandi dengan mencoba berbagai kombinasi secara otomatis.',
    items: [
      'Gunakan kata sandi panjang dan unik',
      'Aktifkan pembatasan percobaan login (account lockout)',
      'Gunakan password manager untuk mengelola kredensial',
    ],
  },
]
