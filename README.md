# Vela Armonia

Landing page sinematik bertema properti mewah. Animasinya bergerak
mengikuti scroll (zoom, parallax, roda gigi berputar, pesawat).
Hanya HTML, CSS, dan JavaScript murni tanpa library.

## Struktur File

```
vela-armonia/
├── index.html   -> struktur halaman & scene
├── style.css    -> tampilan & warna
├── script.js    -> animasi saat scroll
└── README.md    -> dokumentasi
```

## Cara Menjalankan Lokal

Klik dua kali `index.html`, atau jalankan:

```
npx serve
```

## Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub (contoh: `vela-armonia`).
2. Upload semua file ke repository.
3. Buka Settings -> Pages.
4. Source: Deploy from a branch, Branch: `main`, Folder: `/ (root)`.
5. Klik Save dan tunggu 1-2 menit.
6. Situs aktif di `https://USERNAME.github.io/vela-armonia`.

## Cara Mengganti dengan Foto

1. Buat folder `images/` lalu masukkan foto.
2. Di `style.css`, ubah background scene, contoh:

```css
.s0 .bg { background: url(images/awan.jpg) center/cover; }
.s1 .bg { background: url(images/menara.jpg) center/cover; }
```

Efek zoom dan transisi tetap jalan.

## Cara Mengubah Teks

Edit isi `<h2>`, `<small>`, dan `<p>` di `index.html`.

## Menambah Scene Baru

1. Salin satu blok `<section class="scene sX">` di `index.html`.
2. Tambah warna latarnya di `style.css`.
3. Tambah tinggi `#track` (kira-kira +100vh per scene).

## Lisensi

Bebas dipakai dan dimodifikasi.
