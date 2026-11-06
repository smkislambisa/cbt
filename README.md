# AbdUmar CBT — SMK Islam 1 Blitar

Fondasi Tahap 1 aplikasi ujian online sekolah dengan UI responsif, navigasi modul, dashboard, form dasar, dan titik integrasi Firebase.

## Isi Tahap 1
- Dashboard administrator dan sidebar seluruh menu utama.
- Halaman ringkasan data siswa/guru/kelas/mapel.
- UI Bank Soal dan Manajemen Ujian.
- Kerangka halaman Monitoring, Penilaian, Laporan, Ruang Kelas, Absensi, Rapor, Pengguna, dan Pengaturan.
- Login Firebase Authentication (aktif setelah konfigurasi Firebase diisi).
- Firestore dan Storage rules default-deny sebagai pengaman awal.
- Mode demo pratinjau saat Firebase belum dikonfigurasi.

> Penting: Tahap 1 adalah fondasi UI dan integrasi awal, belum merupakan sistem ujian produksi. Penyimpanan jawaban, penilaian server-side, role claims, import Excel, monitoring real-time, dan rapor dikembangkan pada tahap berikutnya. Jangan gunakan untuk ujian resmi sebelum tahap keamanan dan pengujian selesai.

## Menjalankan lokal
Karena aplikasi memakai JavaScript module, jalankan melalui web server lokal, bukan membuka `index.html` langsung.

```bash
python -m http.server 8080
```

Buka `http://localhost:8080`.

## Konfigurasi Firebase
1. Buat project di https://console.firebase.google.com/.
2. Tambahkan aplikasi Web.
3. Salin konfigurasi SDK ke `js/firebase-config.js`.
4. Aktifkan Authentication > Sign-in method > Email/Password.
5. Buat Firestore Database dan Storage.
6. Untuk pengujian awal, deploy rules yang disertakan. Rules sengaja menolak akses koleksi aplikasi sampai aturan role dikembangkan pada Tahap 2.

## Deploy GitHub Pages
1. Buat repository GitHub, misalnya `abdumar-cbt`.
2. Upload seluruh isi folder ini ke root repository.
3. Buka Settings > Pages.
4. Pilih Deploy from a branch, branch `main`, folder `/root`.
5. Akses `https://USERNAME.github.io/abdumar-cbt/`.

Alternatif Firebase Hosting: install Firebase CLI, jalankan `firebase login`, `firebase init hosting`, lalu `firebase deploy`.

## Struktur
```
assets/style.css
js/app.js
js/firebase-config.js
index.html
firestore.rules
storage.rules
firebase.json
README.md
```

## Rencana tahap berikutnya
- Tahap 2: skema Firestore, profil user, role-based access control, provisioning akun.
- Tahap 3: bank soal penuh, lima tipe soal, editor, import Excel/CSV.
- Tahap 4: CBT, jadwal, token, timer, autosave, resume, submit, grading server-side.
- Tahap 5: monitoring peserta dan audit log.
- Tahap 6: analitik hasil, export, rapor dan remedial.
- Tahap 7: ruang kelas dan absensi.

## Keamanan
Firebase web config bukan rahasia, tetapi akses data wajib dibatasi Security Rules. Jangan pernah menaruh service-account JSON, private key, atau kredensial Admin SDK pada frontend atau repository publik. Untuk ujian sesungguhnya, kunci jawaban dan kalkulasi nilai harus berada di backend tepercaya (Cloud Functions), bukan dikirim ke browser peserta.
