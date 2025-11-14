# UI Components - CyberEdu

Komponen UI yang sudah dibuat untuk aplikasi CyberEdu menggunakan Vue 3 + Tailwind CSS.

## 📦 Komponen yang Tersedia

### Button (`ui/button.vue`)
Tombol dengan berbagai variant dan ukuran.

**Props:**
- `variant`: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
- `size`: 'default' | 'sm' | 'lg' | 'icon'
- `type`: 'button' | 'submit' | 'reset'
- `class`: string (optional)

**Contoh:**
\`\`\`vue
<Button variant="outline" size="lg">Click Me</Button>
\`\`\`

---

### Card Components

#### Card (`ui/card.vue`)
Container utama untuk card.

#### CardHeader (`ui/CardHeader.vue`)
Header section dari card.

#### CardTitle (`ui/CardTitle.vue`)
Judul card (h3).

#### CardDescription (`ui/CardDescription.vue`)
Deskripsi card (paragraph).

#### CardContent (`ui/CardContent.vue`)
Konten utama card.

#### CardFooter (`ui/CardFooter.vue`)
Footer card.

**Contoh:**
\`\`\`vue
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description here</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
\`\`\`

---

### Alert Dialog Components

#### AlertDialog (`ui/alert-dialog.vue`)
Container utama untuk dialog konfirmasi.

**Props:**
- `open`: boolean

**Events:**
- `update:open`: (value: boolean) => void

#### AlertDialogContent (`ui/AlertDialogContent.vue`)
Konten dialog dengan overlay.

#### AlertDialogHeader (`ui/AlertDialogHeader.vue`)
Header section dialog.

#### AlertDialogTitle (`ui/AlertDialogTitle.vue`)
Judul dialog.

#### AlertDialogDescription (`ui/AlertDialogDescription.vue`)
Deskripsi dialog.

#### AlertDialogFooter (`ui/AlertDialogFooter.vue`)
Footer dengan action buttons.

#### AlertDialogAction (`ui/AlertDialogAction.vue`)
Tombol aksi utama (primary).

#### AlertDialogCancel (`ui/AlertDialogCancel.vue`)
Tombol batal.

**Contoh:**
\`\`\`vue
<AlertDialog :open="isOpen" @update:open="isOpen = $event">
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Konfirmasi</AlertDialogTitle>
      <AlertDialogDescription>
        Apakah Anda yakin?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Batal</AlertDialogCancel>
      <AlertDialogAction @click="handleConfirm">Ya</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
\`\`\`

---

### ImageWithFallback (`figma/ImageWithFallback.vue`)
Komponen gambar dengan fallback otomatis jika gagal load.

**Props:**
- `src`: string (required)
- `alt`: string (required)
- `fallback`: string (optional)
- `class`: string (optional)

**Contoh:**
\`\`\`vue
<ImageWithFallback
  src="https://example.com/image.jpg"
  alt="Description"
  class="w-full rounded-lg"
/>
\`\`\`

---

## 🎨 Color System

Menggunakan CSS variables untuk theming:

- `--primary`: Warna utama (biru)
- `--secondary`: Warna sekunder
- `--accent`: Warna aksen
- `--muted`: Warna muted/redup
- `--destructive`: Warna untuk aksi destruktif (merah)
- `--background`: Background utama
- `--foreground`: Warna teks utama
- `--border`: Warna border
- `--chart-1` sampai `--chart-5`: Warna untuk chart

---

## 📚 Dependencies

- `lucide-vue-next`: Icon library
- `class-variance-authority`: Variant styling
- `clsx`: Conditional class names
- `tailwind-merge`: Merge Tailwind classes

---

## 💡 Cara Menggunakan

Import komponen yang dibutuhkan:

\`\`\`vue
<script setup>
import Button from './components/ui/button.vue'
import Card from './components/ui/card.vue'
// ... dll
</script>
\`\`\`

Atau gunakan di template langsung setelah import!
