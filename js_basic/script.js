var giliran = 1;
var pemain = "hitam";

giliran = giliran + 1;

console.log(giliran);

var suhu = 30;

if (suhu > 30) {
  console.log("panas");
} else if (suhu >= 20) {
  console.log("hangat");
} else {
  console.log("dingin");
}

var nilai = 75

if (nilai >= 75) {
    console.log('lulus');
} else if (nilai >= 50) {
    console.log('remidial');
} else {
    console.log('tidak lulus');
}

var total = 0;

for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    total += i
  }
}

console.log(total);

// var nilai = [80, 65, 90, 70];
// var Total = 0;
// var rataRata;

// for (var i = 0; i < nilai.length; i++) {
//   Total += nilai[i];
// }

// rataRata = Total / nilai.length;

// console.log(Total);
// console.log(rataRata);

var siswa = {
  nama: "Kai",
  umur: 17,
  jurusan: "tkj"
};

var totalNilai = 0;
var rata_rata;
var kelas = [
  { nama: "Kai", nilai: 80 },
  { nama: "Rani", nilai: 90 }
];

kelas.push({ nama: "Siryu", nilai: 85 });

for (var i = 0; i < kelas.length; i++) {
  totalNilai += kelas[i].nilai;
}
rata_rata = totalNilai / kelas.length;

console.log(totalNilai);
console.log(rata_rata);

console.log(kelas);

function rataRata(arrayAngka) {
  var TOTAL = 0;

  for (var i = 0; i < arrayAngka.length; i++) {
    TOTAL += arrayAngka[i];
  }

  var hasilRataRata = TOTAL / arrayAngka.length;
  
  return hasilRataRata;
}

var uji1 = rataRata([80, 65, 90, 70]);
var uji2 = rataRata([100, 50]);
  
console.log(uji1);
console.log(uji2);

function adalahGenap(n) {
  return n % 2 === 0;
}

function adalahGanjil(n) {
  return n % 2 !== 0;
}

var kumpulanAngka = [3, 8, 12, 5, 6, 7];
var jumlahAngkaGenap = 0;
var jumlahAngkaGanjil = 0;

for (var i = 0; i < kumpulanAngka.length; i++) {
  var angkaSekarang = kumpulanAngka[i];

  if (adalahGenap(angkaSekarang)) {
    jumlahAngkaGenap++;
  } else if (adalahGanjil(angkaSekarang)) {
    jumlahAngkaGanjil++;
  }
}

console.log("Banyaknya angka ganjil: " + jumlahAngkaGanjil);
console.log("Banyaknya angka genap: " + jumlahAngkaGenap);

// Latihan 2, tulis kode (tutup materi dulu, ketik sendiri di script.js):

// Ubah teks <h1> jadi "Belajar DOM" dan warna teksnya jadi biru.
// Pakai loop untuk mengubah teks semua <p class="catatan"> jadi "Catatan ke-1", "Catatan ke-2", dan seterusnya. Hati-hati dengan nomor urutnya: indeks mulai dari 0, sedangkan penomoran di teks mulai dari 1.
// Hapus dulu <li>Apel</li> dari HTML, lalu dari array var buah = ["apel", "jeruk", "mangga"]; isi <ul id="daftar"> dengan satu <li> per isi array. Pakai loop, dan ingat tiga langkah: buat, isi, tempel.

// Bonus: ubah <h1> supaya isinya "Halo, " ditambah isi kolomNama, jadi Halo, Kai.
var judul = document.getElementById("judul");

judul.textContent = "Belajar DOM";
judul.style.color = "blue";

var semuaCatatan = document.querySelectorAll(".catatan");
for (var i = 0; i < semuaCatatan.length; i++) {
  semuaCatatan[i].textContent = "Catatan Ke-" + i + 1;
}

var ulDaftar = document.getElementById("daftar");
ulDaftar.innerHTML = "";

var buah = ["apel", "jeruk", "mangga"];

for (var i = 0; i < buah.length; i++) {
  var liBaru = document.createElement("li");

  liBaru.textContent = buah[i];

  ulDaftar.appendChild(liBaru);
}

var kolom = document.getElementById("kolomNama");
  
judul.textContent = "Halo, " + kolom.value;

var liBaru = document.createElement("li");
liBaru.textContent = "pisang";
ulDaftar.appendChild(liBaru);