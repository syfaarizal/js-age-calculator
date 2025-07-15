# 🧮 JavaScript Challenge — Day 2: Kalkulator Umur

Ini adalah bagian dari tantangan harian JavaScript saya (Code Sprint 30).  
Di challenge ini, saya membuat program kalkulator umur berdasarkan input tahun lahir dari user.

## 🎯 Tujuan Challenge

- Belajar mengambil input dari user
- Melatih logika dasar `if-else`
- Menggunakan objek `Date` untuk mendapatkan tahun saat ini
- Menghindari kesalahan tipe data dengan `parseInt()`
- Menangani input tidak valid dari user
- Memformat output agar lebih mudah dibaca

---

## 💻 Deskripsi Program

Program akan:
1. Meminta user memasukkan **tahun lahir**
2. Menghitung **umur saat ini**
3. Menampilkan pesan seperti:

<pre><code>Kamu lahir pada tahun 2005. ```
Sekarang tahun 2025. ```
Artinya kamu berusia 20 tahun 🎉 ```
Tahun depan kamu akan berusia 21 tahun.</code></pre>


Jika input dari user tidak valid (misal huruf atau kosong), program akan memberi peringatan.  
Jika user memasukkan tahun lahir dari masa depan, akan muncul pesan:

<pre><code>Kamu berasal dari masa depan? 🛸</code></pre>


---

## 📦 Source Code Utama

```js
const birthYear = prompt("Masukan tahun lahir anda: ");
const lahir = parseInt(birthYear);
const tahunSkrg = new Date().getFullYear();
const usia = tahunSkrg - lahir;
const tahunDpn = usia + 1;

if (isNaN(lahir)) {
    console.log("Input tidak valid. Harap masukkan angka tahun lahir.");
} else if (lahir > tahunSkrg) {
    console.log("Kamu berasal dari masa depan? 🛸");
} else {
    console.log(`Kamu lahir pada tahun ${birthYear}.\nSekarang tahun ${tahunSkrg}.\nArtinya kamu berusia ${usia} tahun 🎉\nTahun depan kamu akan berusia ${tahunDpn} tahun.`);
}
```

## 📌 Author

Made with logika dan sedikit vibes ngelawak oleh  
**Syifa Fauziyah Arizal**  
[GitHub](https://github.com/syfaarizal) • [Portfolio](https://syfaarizal.github.io/sicoder-main-portfolio/)

---

> “Logic might be binary, but the way we treat users shouldn't be.”  
> Let’s go to [Day 3: Mini Kalkulator Interaktif](#) 📝