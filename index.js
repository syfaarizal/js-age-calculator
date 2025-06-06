// Challenge Day 2
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