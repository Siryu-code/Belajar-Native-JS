/* =======================================================================
   KAMUS JAVASCRIPT (gaya ES5), Materi 1 sampai 11
   -----------------------------------------------------------------------
   CARA PAKAI
   1. Simpan script.js dan index.html di FOLDER YANG SAMA. index.html sudah
      memuat script.js lewat <script src="script.js"></script> di bawah body.
      (index.html wajib untuk bagian 10 DOM dan 11 Event.)
   2. Buka index.html di browser, tekan F12, buka tab Console.
   3. Tiap console.log punya label di depannya. Komentar "// -> ..." di
      sebelah kanan adalah hasil yang SEHARUSNYA muncul. Cocokkan.
   4. Outputnya banyak. Kalau mau fokus ke satu bagian, matikan bagian lain
      dengan komentar blok (garis miring-bintang di awal, bintang-garis
      miring di akhir) atau tambahkan // di depan barisnya.
   5. Nama variabel di tiap bagian sengaja dibuat beda-beda supaya nilainya
      tidak saling menimpa.

   DAFTAR ISI
   1. Variabel
   2. Tipe data
   3. Operator
   4. Konversi tipe dan string
   5. Kondisi
   6. Loop
   7. Array
   8. Object
   9. Function
   10. DOM
   11. Event
   12. Kombinasi (gabungan materi 1-11)
   13. Tata bahasa, error umum, ringkasan ES5 vs ES6, dan cara memakai kamus

   Bagian 10 dan 11 hanya jalan di browser (membutuhkan index.html). Kalau
   script.js dijalankan lewat Node, dua bagian itu otomatis dilewati.

   Catatan: komentar bertanda [ES6] menjelaskan hal yang BARU ada di ES6
   dan sengaja TIDAK dipakai di sini, karena kita belajar gaya ES5.
======================================================================= */

/* =======================================================================
   1. VARIABEL
   Variabel = kotak bernama untuk menyimpan nilai.
   "var" artinya "buat kotak". "=" artinya "ISI kotak" (bukan "sama dengan").
======================================================================= */
console.log("===== 1. VARIABEL =====");

var namaSiswa = "Kai"; // isi teks (string)
var jumlahPemain = 2; // isi angka (number)
var sudahMulai = true; // isi benar/salah (boolean)
var belumDiisi; // dibuat tapi belum diisi -> undefined

console.log("namaSiswa:", namaSiswa); // -> Kai
console.log("jumlahPemain:", jumlahPemain); // -> 2
console.log("sudahMulai:", sudahMulai); // -> true
console.log("belumDiisi:", belumDiisi); // -> undefined

// Mengisi ulang isi kotak. Baca dari KANAN ke kiri:
// ambil isi skor (10), tambah 5, hasilnya (15) disimpan lagi ke skor.
var skor = 10;
skor = skor + 5;
console.log("skor:", skor); // -> 15

// Menyalin nilai: angka/teks/boolean disalin sebagai NILAI (terpisah).
var skorAwal = skor;
skor = 0;
console.log("skorAwal:", skorAwal, "| skor:", skor); // -> 15 | 0

// Membuat beberapa variabel sekaligus, dipisah koma.
var x1 = 1,
  x2 = 2,
  x3 = 3;
console.log("x1+x2+x3:", x1 + x2 + x3); // -> 6

// ATURAN NAMA VARIABEL
// - boleh huruf, angka, _ dan $
// - tidak boleh diawali angka (1nama = SALAH)
// - tidak boleh ada spasi (nama siswa = SALAH)
// - tidak boleh memakai kata milik JS (var, if, for, while, function, dll.)
// - huruf besar dan kecil dianggap BEDA: total, Total, TOTAL = 3 variabel
// - kebiasaan penulisan: camelCase -> namaLengkapSiswa
// - hindari nama yang sudah dipakai browser kalau var ditulis di luar
//   function: name, top, status, length, parent, self, event
//   (var di luar function menempel ke objek window dan bisa bentrok)

// BOCORAN var (khusus ES5)
// 1) "Hoisting": deklarasi var seolah-olah diangkat ke atas. Hasilnya bukan
//    error, tapi undefined. Jangan mengandalkan ini, cukup tahu saja.
console.log("hoistTes sebelum diisi:", hoistTes); // -> undefined
var hoistTes = 99;
console.log("hoistTes sesudah diisi:", hoistTes); // -> 99

// 2) var hanya dibatasi oleh function, BUKAN oleh blok { }.
if (true) {
  var bocor = "aku bocor keluar blok";
}
console.log("bocor:", bocor); // -> aku bocor keluar blok
// [ES6] let dan const dibatasi oleh blok, jadi contoh di atas akan error
//       kalau pakai let. const = tidak boleh diisi ulang.
//       Di ES5 tidak ada const, jadi nilai yang tidak boleh berubah
//       biasanya ditulis HURUF_BESAR sebagai kesepakatan: var MAKS_SKOR = 100;

/* =======================================================================
   2. TIPE DATA
   Tipe primitif ES5: string, number, boolean, null, undefined.
   Lalu object (array dan function juga termasuk object).
   "typeof" = "tipe dari": mengecek tipe sebuah nilai.
======================================================================= */
console.log("===== 2. TIPE DATA =====");

var tTeks = "halo";
var tAngka = 7;
var tDesimal = 7.5; // JS tidak punya tipe khusus desimal
var tBenar = true;
var tNull = null; // kosong yang DISENGAJA
var tUndef; // kosong karena belum diisi
var tArray = [1, 2, 3];
var tObject = { a: 1 };

console.log("typeof tTeks:", typeof tTeks); // -> string
console.log("typeof tAngka:", typeof tAngka); // -> number
console.log("typeof tDesimal:", typeof tDesimal); // -> number (sama saja)
console.log("typeof tBenar:", typeof tBenar); // -> boolean
console.log("typeof tNull:", typeof tNull); // -> object (BUG lama JS)
console.log("typeof tUndef:", typeof tUndef); // -> undefined
console.log("typeof tArray:", typeof tArray); // -> object
console.log("typeof tObject:", typeof tObject); // -> object

// Cara yang benar mengecek null dan array:
console.log("tNull === null:", tNull === null); // -> true
console.log("Array.isArray(tArray):", Array.isArray(tArray)); // -> true
console.log("Array.isArray(tObject):", Array.isArray(tObject)); // -> false

// NaN = "Not a Number": hasil hitungan yang tidak valid. Tipenya tetap number.
var tNaN = 0 / 0;
console.log("tNaN:", tNaN); // -> NaN
console.log("typeof tNaN:", typeof tNaN); // -> number
console.log("NaN === NaN:", NaN === NaN); // -> false (aneh tapi benar)
console.log("isNaN(tNaN):", isNaN(tNaN)); // -> true (cara mengecek NaN)

// Infinity = tak hingga.
console.log("1 / 0:", 1 / 0); // -> Infinity
console.log("-1 / 0:", -1 / 0); // -> -Infinity

// Kelemahan presisi desimal (terjadi di hampir semua bahasa pemrograman).
console.log("0.1 + 0.2:", 0.1 + 0.2); // -> 0.30000000000000004
console.log("dibulatkan:", Math.round((0.1 + 0.2) * 100) / 100); // -> 0.3

// [ES6] tipe Symbol ada di ES6, jarang dipakai di level basic.
//       BigInt muncul lebih belakangan (setelah ES6).

/* =======================================================================
   3. OPERATOR
   Operator = simbol untuk mengolah nilai.
======================================================================= */
console.log("===== 3. OPERATOR =====");

// --- 3a. Aritmatika ---
console.log("5 + 2:", 5 + 2); // -> 7
console.log("5 - 2:", 5 - 2); // -> 3
console.log("5 * 2:", 5 * 2); // -> 10
console.log("5 / 2:", 5 / 2); // -> 2.5
console.log("5 % 2:", 5 % 2); // -> 1  (SISA bagi, bukan persen)
console.log("10 % 5:", 10 % 5); // -> 0  (habis dibagi)
console.log("2 + 3 * 4:", 2 + 3 * 4); // -> 14 (kali didahulukan)
console.log("(2 + 3) * 4:", (2 + 3) * 4); // -> 20 (kurung didahulukan)

// Cek ganjil/genap pakai sisa bagi:
console.log("8 % 2 === 0 (genap?):", 8 % 2 === 0); // -> true
console.log("7 % 2 === 0 (genap?):", 7 % 2 === 0); // -> false

// Tambah/kurang 1:
var hitungA = 5;
hitungA++; // sama dengan hitungA = hitungA + 1
console.log("setelah ++:", hitungA); // -> 6
hitungA--; // sama dengan hitungA = hitungA - 1
console.log("setelah --:", hitungA); // -> 5

// ++ di belakang vs di depan (beda kalau hasilnya dipakai):
var post = 5;
var hasilPost = post++; // ambil nilai LAMA dulu, baru tambah
console.log("hasilPost:", hasilPost, "| post:", post); // -> 5 | 6
var pre = 5;
var hasilPre = ++pre; // tambah dulu, baru ambil nilai BARU
console.log("hasilPre:", hasilPre, "| pre:", pre); // -> 6 | 6

// --- 3b. Assignment (pengisian) ---
var nilaiOp = 10;
nilaiOp += 5; // nilaiOp = nilaiOp + 5 -> 15
nilaiOp -= 3; // nilaiOp = nilaiOp - 3 -> 12
nilaiOp *= 2; // nilaiOp = nilaiOp * 2 -> 24
nilaiOp /= 4; // nilaiOp = nilaiOp / 4 -> 6
nilaiOp %= 4; // nilaiOp = nilaiOp % 4 -> 2
console.log("nilaiOp akhir:", nilaiOp); // -> 2

// --- 3c. Perbandingan (hasil selalu true / false) ---
console.log("5 > 3:", 5 > 3); // -> true
console.log("5 < 3:", 5 < 3); // -> false
console.log("5 >= 5:", 5 >= 5); // -> true
console.log("5 <= 4:", 5 <= 4); // -> false
console.log("5 === 5:", 5 === 5); // -> true
console.log("5 !== 6:", 5 !== 6); // -> true

// == (longgar, tipe dikonversi) vs === (ketat, nilai DAN tipe harus sama).
// SARAN: selalu pakai === dan !==
console.log('5 == "5":', 5 == "5"); // -> true
console.log('5 === "5":', 5 === "5"); // -> false
console.log('0 == "":', 0 == ""); // -> true (mengejutkan)
console.log('0 === "":', 0 === ""); // -> false
console.log("null == undefined:", null == undefined); // -> true
console.log("null === undefined:", null === undefined); // -> false

// Membandingkan teks dihitung per huruf, bukan per angka:
console.log('"a" < "b":', "a" < "b"); // -> true
console.log('"10" < "9":', "10" < "9"); // -> true (teks! "1" < "9")
console.log("10 < 9:", 10 < 9); // -> false (angka)
console.log('"kai" === "Kai":', "kai" === "Kai"); // -> false (huruf besar beda)

// --- 3d. Logika ---
// &&  DAN  : true hanya jika dua-duanya true
// ||  ATAU : true jika salah satu true
// !   KEBALIKAN
console.log("true && false:", true && false); // -> false
console.log("true || false:", true || false); // -> true
console.log("!true:", !true); // -> false
console.log("!false:", !false); // -> true

var umurCek = 20;
console.log("umur 17 sampai 25:", umurCek >= 17 && umurCek <= 25); // -> true
console.log("di luar rentang 17-25:", umurCek < 17 || umurCek > 25); // -> false

// || juga dipakai untuk nilai cadangan (default):
var namaInput = "";
var namaTampil = namaInput || "Tanpa nama"; // "" dianggap false
console.log("namaTampil:", namaTampil); // -> Tanpa nama

// --- 3e. Plus (+) dengan teks = MENYAMBUNG, bukan menjumlah ---
console.log('"5" + 2:', "5" + 2); // -> 52 (teks)
console.log('"5" - 2:', "5" - 2); // -> 3  (- hanya untuk angka)
console.log('"5" * "2":', "5" * "2"); // -> 10
console.log("true + 1:", true + 1); // -> 2  (true dihitung 1)
console.log('"Halo " + namaSiswa:', "Halo " + namaSiswa); // -> Halo Kai
// [ES6] template literal `Halo ${namaSiswa}` tidak ada di ES5.

// --- 3f. Math (kotak alat angka bawaan JS) ---
console.log("Math.round(2.5):", Math.round(2.5)); // -> 3
console.log("Math.floor(2.9):", Math.floor(2.9)); // -> 2 (bulatkan ke bawah)
console.log("Math.ceil(2.1):", Math.ceil(2.1)); // -> 3 (bulatkan ke atas)
console.log("Math.abs(-5):", Math.abs(-5)); // -> 5 (nilai mutlak)
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3)); // -> 5
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3)); // -> 1
console.log("Math.sqrt(16):", Math.sqrt(16)); // -> 4 (akar)
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // -> 8 (pangkat)
// [ES6/ES2016] operator pangkat 2 ** 3 tidak ada di ES5, pakai Math.pow.
// Angka acak bulat 0 sampai 9 (hasil berbeda tiap dijalankan):
console.log("acak 0-9:", Math.floor(Math.random() * 10));

/* =======================================================================
   4. KONVERSI TIPE DAN STRING
======================================================================= */
console.log("===== 4. KONVERSI TIPE DAN STRING =====");

// --- 4a. Mengubah ke angka ---
console.log('Number("42"):', Number("42")); // -> 42
console.log('Number("halo"):', Number("halo")); // -> NaN
console.log('Number(""):', Number("")); // -> 0
console.log('Number(" 12 "):', Number(" 12 ")); // -> 12
console.log("Number(true):", Number(true)); // -> 1
console.log("Number(null):", Number(null)); // -> 0
console.log("Number(undefined):", Number(undefined)); // -> NaN
console.log('parseInt("42px", 10):', parseInt("42px", 10)); // -> 42
console.log('parseInt("px42", 10):', parseInt("px42", 10)); // -> NaN
console.log('parseFloat("3.5kg"):', parseFloat("3.5kg")); // -> 3.5
// parseInt sebaiknya selalu diberi angka kedua (10) = sistem bilangan desimal.
console.log('parseInt("101", 2):', parseInt("101", 2)); // -> 5 (biner)
console.log('isNaN("halo"):', isNaN("halo")); // -> true
console.log('isNaN("12"):', isNaN("12")); // -> false
// [ES6] Number.isNaN() lebih ketat dari isNaN(), ada di ES6.

// --- 4b. Mengubah ke teks ---
console.log("String(42):", String(42)); // -> "42"
console.log("(42).toString():", (42).toString()); // -> "42"
console.log("(3.14159).toFixed(2):", (3.14159).toFixed(2)); // -> "3.14" (hasilnya teks)

// --- 4c. Mengubah ke boolean, truthy dan falsy ---
// Nilai FALSY (dianggap false) hanya enam: false, 0, "", null, undefined, NaN.
// Selain itu dianggap TRUTHY, termasuk "0", "false", [] dan {}.
console.log("Boolean(0):", Boolean(0)); // -> false
console.log('Boolean(""):', Boolean("")); // -> false
console.log('Boolean("0"):', Boolean("0")); // -> true
console.log("Boolean([]):", Boolean([])); // -> true
console.log("Boolean({}):", Boolean({})); // -> true
console.log('!!"halo" (cara singkat):', !!"halo"); // -> true

// Konversi otomatis (implicit) vs sengaja (explicit):
console.log('"5" - 2 (otomatis):', "5" - 2); // -> 3
console.log('Number("5") + 2 (sengaja):', Number("5") + 2); // -> 7

// --- 4d. Dasar string ---
var kata = "Javascript";
console.log("kata.length:", kata.length); // -> 10
console.log("kata[0]:", kata[0]); // -> J (indeks mulai 0)
console.log("kata.charAt(4):", kata.charAt(4)); // -> s
console.log("kata[kata.length - 1]:", kata[kata.length - 1]); // -> t (terakhir)
console.log("toUpperCase():", kata.toUpperCase()); // -> JAVASCRIPT
console.log("toLowerCase():", kata.toLowerCase()); // -> javascript
console.log("slice(0, 4):", kata.slice(0, 4)); // -> Java (batas akhir TIDAK ikut)
console.log("slice(4):", kata.slice(4)); // -> script (sampai akhir)
console.log("slice(-3):", kata.slice(-3)); // -> ipt (3 huruf terakhir)
console.log("substring(2, 5):", kata.substring(2, 5)); // -> vas
console.log('indexOf("script"):', kata.indexOf("script")); // -> 4
console.log('indexOf("z"):', kata.indexOf("z")); // -> -1 (tidak ada)
console.log('lastIndexOf("a"):', kata.lastIndexOf("a")); // -> 3
console.log('" hai ".trim():', " hai ".trim()); // -> hai (buang spasi ujung)
console.log('"a,b,c".split(","):', "a,b,c".split(",")); // -> ["a","b","c"]
console.log('"abc".split(""):', "abc".split("")); // -> ["a","b","c"]
console.log('"a".concat("b", "c"):', "a".concat("b", "c")); // -> abc

// replace hanya mengganti kemunculan PERTAMA.
console.log("replace pertama saja:", "a-b-c".replace("-", "+")); // -> a+b-c
// Ganti SEMUA di ES5: pecah lalu gabung lagi.
console.log("ganti semua:", "a-b-c".split("-").join("+")); // -> a+b+c

// Mengecek "mengandung" di ES5 pakai indexOf:
console.log('mengandung "script"?', kata.indexOf("script") !== -1); // -> true
// [ES6] includes(), startsWith(), endsWith(), repeat() ada di ES6.

// String itu immutable: method TIDAK mengubah aslinya, tapi mengembalikan baru.
var asli = "belajar";
asli.toUpperCase();
console.log("asli tidak berubah:", asli); // -> belajar
asli = asli.toUpperCase(); // harus disimpan ulang
console.log("setelah disimpan:", asli); // -> BELAJAR

// Karakter khusus (escape):
console.log("baris1\nbaris2"); // \n = baris baru
console.log('dia bilang "halo"'); // \" = kutip di dalam teks
console.log("kutip tunggal di dalam: it's"); // \' = kutip tunggal

// Kombinasi: huruf pertama jadi kapital
var kataKecil = "belajar";
var kataKapital = kataKecil.charAt(0).toUpperCase() + kataKecil.slice(1);
console.log("kapital:", kataKapital); // -> Belajar

/* =======================================================================
   5. KONDISI
   if = jika, else = jika tidak / selain itu, switch = pilih.
======================================================================= */
console.log("===== 5. KONDISI =====");

// --- 5a. if / else if / else ---
// JS memeriksa dari ATAS ke bawah dan BERHENTI di kondisi pertama yang benar.
var nilaiUji = 75;
if (nilaiUji >= 90) {
  console.log("predikat A");
} else if (nilaiUji >= 70) {
  console.log("predikat B"); // -> predikat B
} else {
  console.log("predikat C");
}

// if saja (else boleh tidak ada):
if (nilaiUji > 50) {
  console.log("nilai di atas 50"); // -> nilai di atas 50
}

// Urutan penting. Kalau dibalik, hasil bisa salah:
var nilaiBesar = 95;
if (nilaiBesar >= 70) {
  console.log("urutan salah: 95 dapat B"); // -> ini yang jalan (salah!)
} else if (nilaiBesar >= 90) {
  console.log("tidak pernah tercapai");
}

// Kondisi bertingkat dengan && dan ||:
var umurKondisi = 20;
var punyaKTP = true;
if (umurKondisi >= 17 && punyaKTP) {
  console.log("boleh mendaftar"); // -> boleh mendaftar
}

// Kondisi bersarang (if di dalam if):
if (umurKondisi >= 17) {
  if (punyaKTP) {
    console.log("dewasa dan punya KTP"); // -> dewasa dan punya KTP
  } else {
    console.log("dewasa tapi belum punya KTP");
  }
}

// Truthy/falsy langsung di dalam if:
var teksKosong = "";
if (teksKosong) {
  console.log("terisi");
} else {
  console.log("teksKosong dianggap false"); // -> teksKosong dianggap false
}

// Rentang nilai (suhu): perhatikan > vs >=
var suhu = 30;
if (suhu > 30) {
  console.log("panas");
} else if (suhu >= 20) {
  console.log("hangat"); // -> hangat
} else {
  console.log("dingin");
}

// --- 5b. Ternary (if-else satu baris) ---
// bentuk: syarat ? nilaiKalauBenar : nilaiKalauSalah
var hasilStatus = nilaiUji >= 70 ? "lulus" : "remedial";
console.log("hasilStatus:", hasilStatus); // -> lulus
// Boleh bersarang, tapi cepat sulit dibaca. Pakai seperlunya.
var predikat = nilaiUji >= 90 ? "A" : nilaiUji >= 70 ? "B" : "C";
console.log("predikat:", predikat); // -> B

// --- 5c. switch ---
// Membandingkan SATU nilai dengan banyak pilihan. "break" wajib supaya
// tidak lanjut ke case di bawahnya (fall-through).
var hariKe = 3;
switch (hariKe) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu"); // -> Rabu
    break;
  default:
    console.log("hari lain");
}

// Fall-through (tanpa break), kadang justru berguna:
var kode = 1;
switch (kode) {
  case 1:
    console.log("satu"); // -> satu
  case 2:
    console.log("dua"); // -> dua (ikut jalan, tak ada break)
    break;
  default:
    console.log("lain");
}

// Mengelompokkan beberapa case yang hasilnya sama:
var bulan = 4;
switch (bulan) {
  case 1:
  case 3:
  case 5:
  case 7:
    console.log("31 hari");
    break;
  case 4:
  case 6:
    console.log("30 hari"); // -> 30 hari
    break;
  case 2:
    console.log("28 atau 29 hari");
    break;
  default:
    console.log("bulan lain");
}

// switch memakai perbandingan ketat (===), jadi tipe harus sama:
var tipeInput = "1";
switch (tipeInput) {
  case 1:
    console.log("angka 1");
    break;
  case "1":
    console.log('teks "1"'); // -> teks "1"
    break;
}

/* =======================================================================
   6. LOOP (PERULANGAN)
   for = untuk, while = selama, do = lakukan.
======================================================================= */
console.log("===== 6. LOOP =====");

// --- 6a. for ---
// for (mulai; syarat; langkahTiapPutaran) { ... }
// Dibaca: "untuk i mulai dari 0, SELAMA i < 3, tiap putaran i naik 1".
for (var i = 0; i < 3; i++) {
  console.log("for naik, i =", i); // -> 0, 1, 2
}
console.log("i bocor keluar loop:", i); // -> 3 (karena var)
// [ES6] pakai let i, maka i hanya hidup di dalam loop.

// Menghitung mundur:
for (var mundur = 3; mundur >= 1; mundur--) {
  console.log("mundur:", mundur); // -> 3, 2, 1
}

// Loncat 2 angka:
for (var loncat = 0; loncat <= 10; loncat += 2) {
  console.log("loncat:", loncat); // -> 0, 2, 4, 6, 8, 10
}

// Menjumlahkan 1 sampai 10:
var jumlah1 = 0;
for (var j1 = 1; j1 <= 10; j1++) {
  jumlah1 += j1;
}
console.log("jumlah 1-10:", jumlah1); // -> 55

// Menjumlahkan hanya yang genap:
var jumlahGenap = 0;
for (var j2 = 1; j2 <= 10; j2++) {
  if (j2 % 2 === 0) {
    jumlahGenap += j2;
  }
}
console.log("jumlah genap 1-10:", jumlahGenap); // -> 30

// Faktorial 5 (5 x 4 x 3 x 2 x 1):
var faktorial = 1;
for (var f = 1; f <= 5; f++) {
  faktorial *= f;
}
console.log("5! =", faktorial); // -> 120

// --- 6b. while ---
// Cek syarat DULU. Dipakai kalau jumlah putaran belum pasti.
// AWAS: lupa mengubah variabel syarat = loop tak terbatas (tab bisa macet).
var sisa = 3;
while (sisa > 0) {
  console.log("while, sisa =", sisa); // -> 3, 2, 1
  sisa--;
}

// Contoh while: berapa kali 100 bisa dibagi 2 sampai di bawah 1?
var angkaBagi = 100;
var kaliBagi = 0;
while (angkaBagi >= 1) {
  angkaBagi = angkaBagi / 2;
  kaliBagi++;
}
console.log("kaliBagi:", kaliBagi); // -> 7

// --- 6c. do...while ---
// Jalankan DULU, baru cek syarat. Minimal jalan 1 kali.
var dw = 10;
do {
  console.log("do-while jalan walau syarat salah, dw =", dw); // -> 10
} while (dw < 5);

// --- 6d. break dan continue ---
// break = berhenti total, continue = lewati putaran ini saja.
for (var bc = 1; bc <= 6; bc++) {
  if (bc === 2) {
    continue; // lewati 2
  }
  if (bc === 5) {
    break; // berhenti di 5
  }
  console.log("bc:", bc); // -> 1, 3, 4
}

// --- 6e. Loop di dalam loop (nested) ---
// Loop dalam jalan PENUH untuk tiap putaran loop luar.
for (var luar = 0; luar < 2; luar++) {
  for (var dalam = 0; dalam < 3; dalam++) {
    console.log("luar:", luar, "| dalam:", dalam);
  }
}
// -> 6 baris: (0,0) (0,1) (0,2) (1,0) (1,1) (1,2)

// Tabel perkalian 3x3, satu baris satu teks:
for (var ba = 1; ba <= 3; ba++) {
  var teksBaris = "";
  for (var ko = 1; ko <= 3; ko++) {
    teksBaris += ba * ko + " ";
  }
  console.log(teksBaris.trim());
}
// -> "1 2 3"  "2 4 6"  "3 6 9"

// Pola bintang:
for (var bt = 1; bt <= 4; bt++) {
  var bintang = "";
  for (var kb = 1; kb <= bt; kb++) {
    bintang += "*";
  }
  console.log(bintang);
}
// -> *  **  ***  ****

// [ES6] for...of menelusuri isi array langsung. Di ES5 pakai for + indeks.

/* =======================================================================
   7. ARRAY (LARIK)
   Satu variabel berisi banyak nilai berurutan. Nomor urut = INDEKS,
   dimulai dari 0.
======================================================================= */
console.log("===== 7. ARRAY =====");

var buah = ["apel", "jeruk", "mangga"];

// --- 7a. Dasar ---
console.log("buah[0]:", buah[0]); // -> apel
console.log("buah[2]:", buah[2]); // -> mangga
console.log("buah.length:", buah.length); // -> 3
console.log("terakhir:", buah[buah.length - 1]); // -> mangga
console.log("buah[5] (tidak ada):", buah[5]); // -> undefined (bukan error)
// Error baru muncul kalau kamu mengambil isi DARI undefined:
//   buah[5][0]  -> TypeError: Cannot read properties of undefined

buah[1] = "pisang"; // mengubah isi
console.log("setelah ubah:", buah); // -> ["apel","pisang","mangga"]

// Array boleh campur tipe:
var campurArr = [1, "dua", true, null, [3, 4]];
console.log("campurArr[4][1]:", campurArr[4][1]); // -> 4

// --- 7b. Menambah dan membuang (MENGUBAH array aslinya) ---
var angka = [1, 2, 3];
angka.push(4); // tambah di BELAKANG
console.log("push(4):", angka); // -> [1,2,3,4]
angka.pop(); // buang dari BELAKANG
console.log("pop():", angka); // -> [1,2,3]
angka.unshift(0); // tambah di DEPAN
console.log("unshift(0):", angka); // -> [0,1,2,3]
angka.shift(); // buang dari DEPAN
console.log("shift():", angka); // -> [1,2,3]

// push/pop/shift juga MENGEMBALIKAN sesuatu:
var diambil = angka.pop(); // diambil = 3, angka = [1,2]
console.log("diambil:", diambil, "| angka:", angka); // -> 3 | [1,2]
console.log("push mengembalikan panjang baru:", angka.push(9)); // -> 3

// splice(mulaiDariIndeks, berapaYangDibuang, ...yangDisisipkan)
// MENGUBAH array asli. Satu alat untuk membuang, menyisip, atau mengganti.
var sp = [1, 2, 3, 4, 5];
var terbuang = sp.splice(1, 2); // buang 2 isi mulai indeks 1
console.log("terbuang:", terbuang, "| sp:", sp); // -> [2,3] | [1,4,5]
sp.splice(1, 0, "x", "y"); // buang 0, sisipkan "x","y" di indeks 1
console.log("sisip:", sp); // -> [1,"x","y",4,5]
sp.splice(0, 1, "A"); // ganti isi indeks 0 dengan "A"
console.log("ganti:", sp); // -> ["A","x","y",4,5]
// Jangan pakai "delete arr[1]" untuk array: meninggalkan lubang kosong.

// --- 7c. Mencari, menggabung, memotong ---
var abjad = ["a", "b", "c", "b"];
console.log('indexOf("b"):', abjad.indexOf("b")); // -> 1
console.log('lastIndexOf("b"):', abjad.lastIndexOf("b")); // -> 3
console.log('indexOf("z"):', abjad.indexOf("z")); // -> -1
console.log('ada "c"?', abjad.indexOf("c") !== -1); // -> true
console.log('join("-"):', abjad.join("-")); // -> a-b-c-b
console.log("join() tanpa argumen:", abjad.join()); // -> a,b,c,b
console.log("slice(1, 3):", abjad.slice(1, 3)); // -> ["b","c"] (salinan)
console.log("abjad tidak berubah:", abjad); // -> ["a","b","c","b"]
console.log("concat:", [1, 2].concat([3, 4], [5])); // -> [1,2,3,4,5]

var balik = [1, 2, 3];
balik.reverse(); // MENGUBAH array asli
console.log("reverse():", balik); // -> [3,2,1]

// sort() bawaan mengurutkan sebagai TEKS, hasilnya mengejutkan untuk angka:
var acakAngka = [10, 9, 1, 100];
acakAngka.sort();
console.log("sort() bawaan:", acakAngka); // -> [1,10,100,9]
// Urut angka yang benar butuh function pembanding (dibahas lengkap di bagian 9):
acakAngka.sort(function (a, b) {
  return a - b;
});
console.log("sort angka:", acakAngka); // -> [1,9,10,100]

// --- 7d. Jebakan: menyalin array ---
// Array disimpan sebagai REFERENSI (alamat), bukan nilai. "=" hanya menyalin
// alamatnya, jadi dua nama menunjuk ke array yang SAMA.
var asliArr = [1, 2, 3];
var tautan = asliArr; // BUKAN salinan
tautan.push(99);
console.log("asliArr ikut berubah:", asliArr); // -> [1,2,3,99]
var salinanArr = asliArr.slice(); // slice() tanpa argumen = salinan baru
salinanArr.push(100);
console.log("asliArr aman:", asliArr); // -> [1,2,3,99]
console.log("salinanArr:", salinanArr); // -> [1,2,3,99,100]

// --- 7e. Array + loop ---
var daftarBuah = ["apel", "jeruk", "mangga"];
for (var ia = 0; ia < daftarBuah.length; ia++) {
  console.log("buah ke-" + ia + ":", daftarBuah[ia]);
}
// i = nomor kursi, daftarBuah[i] = isi di kursi itu.
// Loop-nya memakai "<" (bukan "<=") karena indeks terakhir = length - 1.

// --- 7f. Array di dalam array (2 dimensi) ---
// Anggap tabel: array luar = daftar BARIS, array dalam = isi tiap baris.
var m = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log("m[1]:", m[1]); // -> [4,5,6] (pilih baris dulu)
console.log("m[1][2]:", m[1][2]); // -> 6 (lalu pilih isi di baris itu)
console.log("jumlah baris:", m.length); // -> 2
console.log("jumlah kolom:", m[0].length); // -> 3
m[0][0] = 99; // mengubah satu sel
console.log("setelah ubah m[0][0]:", m); // -> [[99,2,3],[4,5,6]]

// Menelusuri tabel dengan loop di dalam loop:
for (var br = 0; br < m.length; br++) {
  var tampilBaris = "";
  for (var kl = 0; kl < m[br].length; kl++) {
    tampilBaris += m[br][kl] + " ";
  }
  console.log("baris " + br + ": " + tampilBaris.trim());
}
// -> baris 0: 99 2 3 | baris 1: 4 5 6

// Cara menulis 3x3 berisi 0 dengan loop (papan kosong):
var papan = [];
for (var rr = 0; rr < 3; rr++) {
  var barisBaru = []; // WAJIB dibuat baru tiap baris
  for (var cc = 0; cc < 3; cc++) {
    barisBaru.push(0);
  }
  papan.push(barisBaru);
}
papan[1][1] = 1;
for (var pb = 0; pb < papan.length; pb++) {
  console.log(papan[pb].join(" "));
}
// -> "0 0 0"  "0 1 0"  "0 0 0"

// [ES6] includes(), find(), findIndex(), Array.from(), for...of, dan spread
//       [...arr] tidak ada di ES5.
// [ES5, dibahas di bagian 9] forEach(), map(), filter(), reduce() memakai
//       function.

/* =======================================================================
   8. OBJECT
   Kumpulan data BERNAMA: tiap isi = kunci (key) : nilai (value).
======================================================================= */
console.log("===== 8. OBJECT =====");

var siswa = {
  nama: "Kai",
  jurusan: "TKJ",
  nilai: [80, 90], // nilai boleh array
  alamat: { kota: "Kota A" }, // nilai boleh object lain
};

// Aturan: kunci dan nilai dipisah ":", antar properti dipisah ",",
// properti terakhir tanpa koma. "{ }" di sini membungkus object, bukan blok.

// --- 8a. Mengambil isi ---
console.log("siswa.nama:", siswa.nama); // -> Kai
console.log('siswa["jurusan"]:', siswa["jurusan"]); // -> TKJ
console.log("siswa.nilai[1]:", siswa.nilai[1]); // -> 90
console.log("siswa.alamat.kota:", siswa.alamat.kota); // -> Kota A
console.log("siswa.umur (tidak ada):", siswa.umur); // -> undefined

// Titik = nama kunci sudah pasti. Kurung siku = nama kunci ada di variabel.
var kunci = "jurusan";
console.log("siswa[kunci]:", siswa[kunci]); // -> TKJ
console.log("siswa.kunci:", siswa.kunci); // -> undefined (cari kunci "kunci")

// Kunci dengan spasi harus pakai kutip dan kurung siku:
var tamu = { "nama lengkap": "Rani", umur: 20 };
console.log('tamu["nama lengkap"]:', tamu["nama lengkap"]); // -> Rani

// --- 8b. Mengubah, menambah, menghapus ---
siswa.jurusan = "RPL"; // ubah
siswa.kelas = "XII"; // tambah (kunci belum ada, jadi dibuat)
delete siswa.alamat; // hapus
console.log("setelah diubah:", siswa);

// --- 8c. Mengecek dan menelusuri ---
console.log('"nama" in siswa:', "nama" in siswa); // -> true
console.log('"alamat" in siswa:', "alamat" in siswa); // -> false (sudah dihapus)
console.log('siswa.hasOwnProperty("kelas"):', siswa.hasOwnProperty("kelas")); // -> true
console.log("Object.keys(siswa):", Object.keys(siswa)); // -> ["nama","jurusan","nilai","kelas"]
console.log("jumlah properti:", Object.keys(siswa).length); // -> 4

// for...in: "untuk setiap kunci k di dalam object"
for (var k in siswa) {
  console.log("kunci:", k, "| nilai:", siswa[k]); // wajib [ ], bukan titik
}
// [ES6/ES2017] Object.values() dan Object.entries() bukan ES5.

// Mengecek apakah kunci ada dengan undefined (alternatif):
console.log("siswa.umur === undefined:", siswa.umur === undefined); // -> true

// --- 8d. Array berisi object (bentuk data paling umum) ---
var kelas = [
  { nama: "Kai", nilai: 80 },
  { nama: "Rani", nilai: 90 },
];
console.log("kelas[1].nama:", kelas[1].nama); // -> Rani
console.log("kelas[0].nilai:", kelas[0].nilai); // -> 80
// Urutan baca: pilih ITEM dulu ([i]), baru ambil KUNCI (.nilai).
// Kebalikannya (kelas.nilai[i]) error, karena array tidak punya kunci "nilai".
kelas.push({ nama: "Siryu", nilai: 85 });
console.log("jumlah siswa:", kelas.length); // -> 3

// --- 8e. Jebakan: object juga REFERENSI ---
var objA = { skor: 1 };
var objB = objA; // BUKAN salinan
objB.skor = 100;
console.log("objA.skor ikut berubah:", objA.skor); // -> 100
console.log("{} === {}:", {} === {}); // -> false (alamat berbeda)
// Salinan "dalam" di ES5: ubah ke teks JSON lalu kembalikan.
var objC = JSON.parse(JSON.stringify(objA));
objC.skor = 5;
console.log("objA aman:", objA.skor, "| objC:", objC.skor); // -> 100 | 5

// --- 8f. JSON ---
// JSON = FORMAT TEKS untuk menyimpan/mengirim data. Mirip object, tapi ketat:
// kunci dan teks wajib kutip ganda, tidak boleh koma di akhir, tidak boleh
// berisi function, undefined, atau komentar.
var teksJSON = JSON.stringify({ nama: "Kai", nilai: [1, 2] });
console.log("stringify:", teksJSON); // -> {"nama":"Kai","nilai":[1,2]}
console.log("typeof teksJSON:", typeof teksJSON); // -> string
var kembali = JSON.parse(teksJSON);
console.log("parse -> kembali.nilai[1]:", kembali.nilai[1]); // -> 2

// Method = function di dalam object (kamu pakai terus: console.log).
// "console" adalah object, "log" adalah method-nya. Dibahas di bagian 9.
// [ES6] penulisan singkat { nama, umur }, destructuring, spread {...a},
//       dan Object.assign() tidak ada di ES5.

/* =======================================================================
   9. FUNCTION (FUNGSI)
   Function = blok kode yang diberi NAMA, supaya bisa dipakai berkali-kali.
   Seperti resep: ditulis sekali, dimasak berkali-kali dengan bahan beda.
   Dua tahap yang berbeda:
     MENDEFINISIKAN = menulis resepnya (belum ada yang jalan)
     MEMANGGIL      = menjalankan resepnya, WAJIB pakai ( )
======================================================================= */
console.log("===== 9. FUNCTION =====");

// --- 9a. Membuat dan memanggil ---
function sapaDunia() {
  console.log("Halo dunia!");
}
sapaDunia(); // -> Halo dunia!
sapaDunia(); // -> Halo dunia! (dipakai ulang)
console.log("tanpa ( ) hanya function-nya:", typeof sapaDunia); // -> function

// --- 9b. Parameter dan argumen ---
// Parameter = nama kotak penerima di definisi. Argumen = nilai yang dikirim.
function sapaNama(nama) {
  console.log("Halo " + nama);
}
sapaNama("Kai"); // -> Halo Kai
sapaNama("Rani"); // -> Halo Rani

function jumlahkan(a, b) {
  console.log(a + " + " + b + " = " + (a + b));
}
jumlahkan(2, 3); // -> 2 + 3 = 5

// Argumen kurang -> parameter yang tidak terisi bernilai undefined.
// Argumen berlebih -> diabaikan (tidak error).
function tampilDua(a, b) {
  console.log("a:", a, "| b:", b);
}
tampilDua(1); // -> a: 1 | b: undefined
tampilDua(1, 2, 3); // -> a: 1 | b: 2

// --- 9c. return: mengembalikan hasil ---
// console.log = MENAMPILKAN untuk dibaca manusia.
// return      = MENGIRIM nilai balik ke tempat function dipanggil (bisa disimpan).
function kaliDua(a, b) {
  return a * b;
}
var hasilKali = kaliDua(3, 4);
console.log("hasilKali:", hasilKali); // -> 12
console.log("dipakai langsung:", kaliDua(2, 5)); // -> 10
console.log("dipakai dalam hitungan:", kaliDua(2, 3) + kaliDua(1, 4)); // -> 10

// Function tanpa return mengembalikan undefined:
function tanpaReturn() {
  var x = 1;
}
console.log("tanpaReturn():", tanpaReturn()); // -> undefined

// return juga MENGHENTIKAN function. Baris sesudahnya tidak dijalankan:
function berhentiDiSini() {
  return 1;
  console.log("tidak pernah tercetak");
}
console.log("berhentiDiSini():", berhentiDiSini()); // -> 1

// return di dalam if (keluar lebih awal):
function nilaiMutlak(n) {
  if (n < 0) {
    return -n;
  }
  return n;
}
console.log("nilaiMutlak(-5):", nilaiMutlak(-5)); // -> 5
console.log("nilaiMutlak(3):", nilaiMutlak(3)); // -> 3

// Mengembalikan true/false (perbandingan sendiri sudah menghasilkan boolean):
function adalahGenap(n) {
  return n % 2 === 0;
}
function adalahGanjil(n) {
  return n % 2 !== 0; // !== 0 aman juga untuk angka negatif
}
console.log("adalahGenap(8):", adalahGenap(8)); // -> true
console.log("adalahGanjil(-3):", adalahGanjil(-3)); // -> true

// Function hanya bisa return SATU nilai. Untuk banyak nilai: pakai object/array.
function terkecilTerbesar(arr) {
  var min = arr[0];
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min: min, max: max };
}
var mm = terkecilTerbesar([4, 9, 2, 7]);
console.log("min:", mm.min, "| max:", mm.max); // -> 2 | 9

// Function menerima array dan menghitung:
function rataRata(arrayAngka) {
  var total = 0; // dibuat DI DALAM: mulai dari 0 tiap dipanggil
  for (var i = 0; i < arrayAngka.length; i++) {
    total += arrayAngka[i];
  }
  return total / arrayAngka.length;
}
console.log("rataRata:", rataRata([80, 65, 90, 70])); // -> 76.25
console.log("rataRata:", rataRata([100, 50])); // -> 75

// --- 9d. Scope (wilayah variabel) ---
// var di dalam function = LOKAL (hanya hidup di function itu).
// var di luar function  = GLOBAL (bisa DILIHAT dari dalam function).
var globalPesan = "aku global";
function lihatGlobal() {
  return globalPesan;
}
console.log("lihatGlobal():", lihatGlobal()); // -> aku global

function buatLokal() {
  var isiLokal = "aku lokal";
  return isiLokal;
}
console.log("buatLokal():", buatLokal()); // -> aku lokal
console.log("typeof isiLokal di luar:", typeof isiLokal); // -> undefined
// console.log(isiLokal);  // ReferenceError: isiLokal is not defined

// Nama sama: yang di dalam dipakai di dalam, yang di luar tidak berubah.
var skorGlobal = 1;
function tutupiSkor() {
  var skorGlobal = 99; // kotak BARU (ada "var")
  return skorGlobal;
}
console.log("tutupiSkor():", tutupiSkor(), "| skorGlobal:", skorGlobal); // -> 99 | 1

// Tanpa "var" di dalam function = mengubah variabel yang di luar.
function ubahSkorGlobal() {
  skorGlobal = 50;
}
ubahSkorGlobal();
console.log("skorGlobal sesudah diubah:", skorGlobal); // -> 50
// Sebaiknya function memakai parameter dan return, bukan mengubah yang di luar.

// Lupa "var" pada variabel yang belum ada = tanpa sadar membuat variabel
// global baru (di mode "use strict" ini jadi error).
function lupaVar() {
  terciptaGlobal = "oops";
}
lupaVar();
console.log("terciptaGlobal:", terciptaGlobal); // -> oops

// var hanya dibatasi function, bukan blok if/for:
function ujiBlok() {
  if (true) {
    var dalamIf = "terlihat";
  }
  return dalamIf;
}
console.log("ujiBlok():", ujiBlok()); // -> terlihat

// Parameter angka/teks/boolean DISALIN (aslinya aman):
function ubahParam(x) {
  x = 100;
}
var asliParam = 1;
ubahParam(asliParam);
console.log("asliParam:", asliParam); // -> 1

// Array dan object dikirim sebagai REFERENSI (aslinya ikut berubah!):
function tambahKeDaftar(arr) {
  arr.push("baru");
}
var daftarParam = ["a"];
tambahKeDaftar(daftarParam);
console.log("daftarParam:", daftarParam); // -> ["a","baru"]

// --- 9e. Nilai default (cara ES5) ---
function sapaDefault(nama) {
  if (nama === undefined) {
    nama = "tamu";
  }
  return "Halo " + nama;
}
console.log(sapaDefault()); // -> Halo tamu
console.log(sapaDefault("Kai")); // -> Halo Kai
// Cara pendek: nama = nama || "tamu"; (hati-hati: 0 dan "" juga dianggap kosong)
// [ES6] function sapa(nama = "tamu") { ... }

// --- 9f. arguments: daftar semua argumen yang dikirim ---
function jumlahBebas() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log("jumlahBebas(1,2,3,4):", jumlahBebas(1, 2, 3, 4)); // -> 10
// [ES6] rest parameter: function jumlah(...angka) { ... }

// --- 9g. Dua cara menulis function, dan hoisting ---
// a) deklarasi: bisa dipanggil SEBELUM barisnya ditulis (di-hoist)
console.log(dipanggilSebelum()); // -> bisa dipanggil sebelum ditulis
function dipanggilSebelum() {
  return "bisa dipanggil sebelum ditulis";
}
// b) ekspresi: function disimpan ke variabel, harus sudah didefinisikan dulu
console.log("typeof ekspresiBelum:", typeof ekspresiBelum); // -> undefined
// ekspresiBelum();  // TypeError: ekspresiBelum is not a function
var ekspresiBelum = function () {
  return "sudah ada";
};
console.log(ekspresiBelum()); // -> sudah ada

// --- 9h. Function sebagai nilai (callback) ---
// Function boleh dikirim ke function lain. Kirim NAMA-nya tanpa ( ).
function jalankanDuaKali(fn) {
  fn();
  fn();
}
jalankanDuaKali(function () {
  console.log("halo dari callback"); // -> tercetak 2 kali
});

function terapkan(angka, aturan) {
  return aturan(angka);
}
function kuadrat(x) {
  return x * x;
}
console.log("terapkan lewat nama:", terapkan(6, kuadrat)); // -> 36
console.log(
  "terapkan tanpa nama:",
  terapkan(5, function (x) {
    return x + 1;
  }),
); // -> 6
console.log("kuadrat(6) dijalankan:", kuadrat(6)); // -> 36
console.log("kuadrat tanpa ( ):", typeof kuadrat); // -> function

// --- 9i. Method array berbasis function (ES5) ---
var angkaF = [1, 2, 3, 4, 5, 6];

var teksFE = "";
angkaF.forEach(function (n) {
  // jalankan untuk TIAP isi
  teksFE += n + " ";
});
console.log("forEach:", teksFE.trim()); // -> 1 2 3 4 5 6

var kuadratArr = angkaF.map(function (n) {
  // ubah tiap isi -> array BARU
  return n * n;
});
console.log("map:", kuadratArr); // -> [1,4,9,16,25,36]

var genapArr = angkaF.filter(function (n) {
  // saring: simpan yang true
  return n % 2 === 0;
});
console.log("filter:", genapArr); // -> [2,4,6]

var totalReduce = angkaF.reduce(function (hasil, n) {
  // gulung jadi SATU nilai
  return hasil + n;
}, 0); // 0 = nilai awal
console.log("reduce (jumlah):", totalReduce); // -> 21

console.log(
  "some (ada yang > 5?):",
  angkaF.some(function (n) {
    return n > 5;
  }),
); // -> true
console.log(
  "every (semua > 0?):",
  angkaF.every(function (n) {
    return n > 0;
  }),
); // -> true

// Rantai: saring genap lalu kuadratkan
var genapKuadrat = angkaF
  .filter(function (n) {
    return n % 2 === 0;
  })
  .map(function (n) {
    return n * n;
  });
console.log("filter lalu map:", genapKuadrat); // -> [4,16,36]

// sort dengan pembanding:
var urutF = [10, 9, 1, 100];
urutF.sort(function (a, b) {
  return a - b;
});
console.log("sort naik:", urutF); // -> [1,9,10,100]
urutF.sort(function (a, b) {
  return b - a;
});
console.log("sort turun:", urutF); // -> [100,10,9,1]

var orangF = [
  { n: "A", u: 30 },
  { n: "B", u: 20 },
  { n: "C", u: 25 },
];
orangF.sort(function (p, q) {
  return p.u - q.u;
}); // urut menurut umur
console.log(
  "sort object:",
  orangF
    .map(function (o) {
      return o.n;
    })
    .join(","),
); // -> B,C,A

// Array of object dengan map/filter/reduce:
var kelasF = [
  { nama: "Ani", nilai: 80 },
  { nama: "Budi", nilai: 65 },
  { nama: "Cici", nilai: 90 },
];
var namaSaja = kelasF.map(function (s) {
  return s.nama;
});
var lulusF = kelasF.filter(function (s) {
  return s.nilai >= 70;
});
var totalNilaiF = kelasF.reduce(function (hasil, s) {
  return hasil + s.nilai;
}, 0);
console.log("nama:", namaSaja.join(", ")); // -> Ani, Budi, Cici
console.log("lulus:", lulusF.length); // -> 2
console.log("rata-rata:", totalNilaiF / kelasF.length); // -> 78.33333333333333

// --- 9j. IIFE: function yang dijalankan LANGSUNG ---
// Berguna untuk membuat wilayah (scope) kecil supaya variabel tidak bocor.
(function () {
  var rahasia = "hanya hidup di sini";
  console.log("IIFE:", rahasia); // -> hanya hidup di sini
})();
console.log("typeof rahasia di luar:", typeof rahasia); // -> undefined

// --- 9k. Closure: function "mengingat" variabel tempat dia dibuat ---
function buatCounter() {
  var hitung = 0; // milik buatCounter, tapi diingat function di bawah
  return function () {
    hitung++;
    return hitung;
  };
}
var counterA = buatCounter();
var counterB = buatCounter(); // counter terpisah, hitung-nya sendiri
console.log(counterA(), counterA(), counterA()); // -> 1 2 3
console.log(counterB()); // -> 1

function buatPesan(nama) {
  return function () {
    return "Halo " + nama;
  };
}
var pesanKai = buatPesan("Kai");
console.log(pesanKai()); // -> Halo Kai

// --- 9l. Rekursi: function memanggil dirinya sendiri ---
// Wajib punya "kondisi berhenti" (base case), kalau tidak -> error
// RangeError: Maximum call stack size exceeded
function faktorialRek(n) {
  if (n <= 1) {
    return 1; // kondisi berhenti
  }
  return n * faktorialRek(n - 1);
}
console.log("faktorialRek(5):", faktorialRek(5)); // -> 120

// --- 9m. Function di dalam object (method) dan this ---
var orangM = {
  nama: "Kai",
  sapa: function () {
    return "Halo, aku " + this.nama; // this = object di depan titik saat dipanggil
  },
};
console.log(orangM.sapa()); // -> Halo, aku Kai
// Hati-hati: kalau method disalin ke variabel lalu dipanggil tanpa object
// (var lepas = orangM.sapa; lepas();), "this" bukan orangM lagi.

// --- 9n. Contoh dari latihan: hitung genap dan ganjil dengan 1 loop ---
var kumpulanAngka = [3, 8, 12, 5, 6, 7];
var jumlahAngkaGenap = 0;
var jumlahAngkaGanjil = 0;
for (var ka = 0; ka < kumpulanAngka.length; ka++) {
  var angkaSekarang = kumpulanAngka[ka]; // ISI di kursi ke-ka, bukan nomor kursinya
  if (adalahGenap(angkaSekarang)) {
    jumlahAngkaGenap++;
  } else {
    jumlahAngkaGanjil++;
  }
}
console.log("genap:", jumlahAngkaGenap, "| ganjil:", jumlahAngkaGanjil); // -> 3 | 3

// --- 9o. Function yang tidak dipanggil tidak error ---
// JS hanya MENYIMPAN isi function. Salah penulisan (SyntaxError) ketahuan
// sejak file dibaca, tapi salah nama variabel di dalam function baru
// ketahuan saat function itu DIPANGGIL.
function bugBersembunyi() {
  return variabelTidakAda; // tidak error selama tidak dipanggil
}

// [ES6] arrow function: (a, b) => a + b  (penanda: simbol =>)
//       default parameter, rest parameter, dan let/const di dalam function.

/* =======================================================================
   10. DOM (DOCUMENT OBJECT MODEL)
   DOM = halaman HTML yang diubah browser menjadi OBJECT bertingkat (pohon).
   Akarnya bernama "document". Lewat DOM, JS bisa membaca dan mengubah halaman.
   - DOM adalah fitur BROWSER, bukan bagian dari bahasa JS. Di Node tidak ada.
   - Bagian ini dan bagian 11 dijalankan terhadap index.html (file pasangan
     kamus ini). Kalau dibuka tanpa index.html, elemennya tidak ketemu.
   - <script> harus di BAWAH body, supaya elemen sudah ada saat JS jalan.
======================================================================= */
console.log("===== 10. DOM =====");

if (typeof document === "undefined") {
  console.log("DOM hanya ada di browser. Buka index.html lalu lihat Console.");
} else {
  // --- 10a. Mengambil elemen ---
  // Satu elemen: getElementById, querySelector (yang pertama cocok)
  // Banyak elemen (daftar, dipakai seperti array): querySelectorAll,
  //   getElementsByClassName, getElementsByTagName
  // Tidak ketemu -> null (untuk getElementById / querySelector)
  var elJudul = document.getElementById("judulDom");
  console.log("getElementById:", elJudul.textContent); // -> Halo

  var elCatatanPertama = document.querySelector(".catatan"); // yang PERTAMA saja
  console.log("querySelector:", elCatatanPertama.textContent); // -> Catatan 1

  var daftarCatatan = document.querySelectorAll(".catatan"); // SEMUA yang cocok
  console.log("querySelectorAll length:", daftarCatatan.length); // -> 2
  console.log("indeks ke-1:", daftarCatatan[1].textContent); // -> Catatan 2

  var areaDom = document.getElementById("areaDom");
  console.log(
    "getElementsByClassName:",
    areaDom.getElementsByClassName("catatan").length,
  ); // -> 2
  console.log(
    "getElementsByTagName(p):",
    areaDom.getElementsByTagName("p").length,
  ); // -> 2

  // querySelector memakai selektor ala CSS: "#id", ".kelas", "tag", "ul li",
  // "#areaDom .catatan". Bisa dipanggil dari elemen tertentu (mencari di dalamnya).
  console.log(
    "selektor bertingkat:",
    document.querySelectorAll("#areaDom .catatan").length,
  ); // -> 2
  console.log("dari elemen:", areaDom.querySelector("ul li").textContent); // -> Apel

  // Tidak ketemu -> null. Mengambil isi dari null = TypeError.
  var tidakAda = document.getElementById("tidakAda");
  console.log("tidak ada:", tidakAda); // -> null
  if (tidakAda !== null) {
    console.log("tidak pernah tercetak");
  }
  // Penyebab null paling sering: salah ketik id (huruf besar/kecil dihitung)
  // atau <script> ditaruh SEBELUM elemennya.

  // --- 10b. Membaca dan mengubah isi ---
  // textContent = teks biasa | innerHTML = isi sebagai HTML | value = isi input
  elJudul.textContent = "Belajar DOM";
  console.log("sesudah diubah:", elJudul.textContent); // -> Belajar DOM

  elJudul.innerHTML = "Halo <em>dunia</em>"; // "dunia" jadi miring
  console.log("innerHTML:", elJudul.innerHTML); // -> Halo <em>dunia</em>
  console.log("textContent:", elJudul.textContent); // -> Halo dunia
  // Jangan pakai innerHTML untuk isi dari ketikan pengguna (bisa disisipi kode).
  elJudul.textContent = "Halo"; // kembalikan

  var elKolomDom = document.getElementById("kolomDom");
  console.log("value:", elKolomDom.value); // -> Kai
  console.log("typeof value:", typeof elKolomDom.value); // -> string (selalu teks!)
  // Ambil ISI-nya lewat .value, bukan elemennya: "Halo, " + elKolomDom.value

  // --- 10c. Mengubah tampilan lewat style ---
  // Nama properti CSS ber-tanda-hubung ditulis camelCase. Nilai selalu TEKS + satuan.
  elJudul.style.color = "blue";
  elJudul.style.backgroundColor = "lightyellow"; // background-color
  elJudul.style.fontSize = "28px"; // font-size
  console.log("style.color:", elJudul.style.color); // -> blue
  console.log("computed:", window.getComputedStyle(elJudul).color); // warna sebenarnya yang tampil

  // --- 10d. classList: mengatur class ---
  elJudul.classList.add("tebal"); // tambah
  console.log("setelah add:", elJudul.className); // -> tebal
  console.log("contains:", elJudul.classList.contains("tebal")); // -> true
  elJudul.classList.toggle("tebal"); // ada -> dihapus
  console.log("setelah toggle:", elJudul.classList.contains("tebal")); // -> false
  elJudul.classList.toggle("tebal"); // tidak ada -> ditambah
  elJudul.classList.remove("tebal"); // hapus
  console.log("setelah remove:", elJudul.className === ""); // -> true

  // --- 10e. Atribut ---
  elJudul.setAttribute("title", "Ini judul"); // beri atribut
  console.log("getAttribute:", elJudul.getAttribute("title")); // -> Ini judul
  console.log("hasAttribute:", elJudul.hasAttribute("title")); // -> true
  elJudul.removeAttribute("title"); // hapus
  console.log("data-kode:", areaDom.getAttribute("data-kode")); // -> A1
  console.log("dataset.kode:", areaDom.dataset.kode); // -> A1 (cara pendek untuk data-*)

  // --- 10f. Membuat, menempel, dan menghapus elemen ---
  // Tiga langkah: BUAT, ISI, TEMPEL. Sebelum ditempel elemen belum tampil.
  var ulDaftarDom = document.getElementById("daftarDom");
  ulDaftarDom.innerHTML = ""; // kosongkan dulu

  var buahDom = ["apel", "jeruk", "mangga"];
  for (var bi = 0; bi < buahDom.length; bi++) {
    var liBaru = document.createElement("li"); // 1. buat
    liBaru.textContent = buahDom[bi]; // 2. isi
    ulDaftarDom.appendChild(liBaru); // 3. tempel (di belakang)
  }
  console.log("jumlah li:", ulDaftarDom.children.length); // -> 3

  // Elemen yang dibuat tapi belum ditempel hanya ada di memori:
  var liLepas = document.createElement("li");
  liLepas.textContent = "belum tampil";
  console.log("liLepas parent:", liLepas.parentNode); // -> null

  // Menyisipkan SEBELUM elemen tertentu:
  var liDepan = document.createElement("li");
  liDepan.textContent = "pisang";
  ulDaftarDom.insertBefore(liDepan, ulDaftarDom.firstElementChild);
  console.log("urutan:", ulDaftarDom.textContent); // -> pisangapeljerukmangga

  // Menyalin elemen (true = beserta isinya):
  var salinLi = ulDaftarDom.firstElementChild.cloneNode(true);
  salinLi.textContent = "pisang (salinan)";
  ulDaftarDom.appendChild(salinLi);

  // Menghapus:
  ulDaftarDom.removeChild(salinLi); // lewat induknya (klasik)
  liDepan.remove(); // langsung (browser modern)
  console.log("jumlah li sesudah hapus:", ulDaftarDom.children.length); // -> 3

  // Mengosongkan elemen: innerHTML = "" atau hapus anak satu per satu
  // while (ulDaftarDom.firstChild) { ulDaftarDom.removeChild(ulDaftarDom.firstChild); }

  // --- 10g. Berpindah antar elemen (navigasi) ---
  var liPertama = ulDaftarDom.firstElementChild;
  console.log("parentElement:", liPertama.parentElement.id); // -> daftarDom
  console.log("firstElementChild:", ulDaftarDom.firstElementChild.textContent); // -> apel
  console.log("lastElementChild:", ulDaftarDom.lastElementChild.textContent); // -> mangga
  console.log("nextElementSibling:", liPertama.nextElementSibling.textContent); // -> jeruk
  console.log("previousElementSibling:", liPertama.previousElementSibling); // -> null
  // children = hanya elemen. childNodes = juga spasi/teks di antara tag (membingungkan).

  // --- 10h. DOM + loop ---
  for (var ci = 0; ci < daftarCatatan.length; ci++) {
    // indeks mulai 0, penomoran teks mulai 1 -> ci + 1
    daftarCatatan[ci].textContent = "Catatan ke-" + (ci + 1);
    daftarCatatan[ci].style.color = "darkgreen";
  }
  console.log("catatan 2:", daftarCatatan[1].textContent); // -> Catatan ke-2

  // --- 10i. Menyapa pakai isi input ---
  elJudul.textContent = "Halo, " + elKolomDom.value; // value, bukan elemennya
  console.log("judul:", elJudul.textContent); // -> Halo, Kai
  elJudul.style.color = ""; // kembalikan gaya
  elJudul.style.backgroundColor = "";
  elJudul.style.fontSize = "";

  // [ES6] Array.from(daftarCatatan), for...of dan daftar.forEach(...) pada hasil
  //       querySelectorAll. Di gaya ES5 pakai for biasa + indeks.
}

/* =======================================================================
   11. EVENT (PERISTIWA)
   Event = kejadian di halaman: klik, ketik, tekan tombol, kirim form, dst.
   event listener = "pendengar" yang menunggu event terjadi pada sebuah elemen.
   handler        = function yang dijalankan saat event terjadi.
   Pola: elemen.addEventListener("jenisEvent", function () { ... });
======================================================================= */
console.log("===== 11. EVENT =====");

if (typeof document === "undefined") {
  console.log(
    "Event hanya ada di browser. Buka index.html lalu coba klik dan ketik.",
  );
} else {
  // Catatan ES5: di dalam blok if/else, function ditulis sebagai ekspresi
  // (var nama = function () { ... };) karena deklarasi "function nama() {}" di
  // dalam blok tidak dijamin konsisten di ES5. Cara kerjanya sama; bedanya cuma
  // harus ditulis SEBELUM dipakai, dan diakhiri titik koma.

  // --- 11a. Penghitung klik ---
  // Variabel yang harus bertahan antar klik ditaruh DI LUAR handler.
  var hitungKlik = 0;
  var elTombol = document.getElementById("tombolEvent");
  elTombol.addEventListener("click", function () {
    hitungKlik++;
    elTombol.textContent = "Diklik " + hitungKlik + " kali";
  });
  // Kalau "var hitungKlik = 0" ditaruh DI DALAM handler, selalu jadi "Diklik 1 kali".

  // --- 11b. Memasang function bernama (tanpa kurung!) ---
  var sapaKlik = function () {
    console.log("Tombol diklik!");
  };
  elTombol.addEventListener("click", sapaKlik); // BENAR: kirim function-nya
  // elTombol.addEventListener("click", sapaKlik());  // SALAH: dijalankan SEKARANG,
  //   yang terpasang malah hasil return-nya (undefined), klik tidak berbuat apa-apa.
  // Satu elemen boleh punya banyak listener (jalan sesuai urutan dipasang).

  // --- 11c. Event object: info tentang kejadiannya ---
  // Browser otomatis mengirim satu argumen ke handler. Nama parameter bebas (e / event).
  elTombol.addEventListener("click", function (e) {
    console.log("e.type:", e.type); // -> click
    console.log("e.target:", e.target.id); // -> tombolEvent (elemen yang diklik)
  });

  // --- 11d. Event input: bereaksi tiap kali mengetik ---
  var elKolom = document.getElementById("kolomEvent");
  var elHasil = document.getElementById("hasilEvent");
  elHasil.textContent = "Halo, tamu";
  elKolom.addEventListener("input", function () {
    // ISI-nya = elKolom.value. (kurung penting: + dikerjakan lebih dulu dari ||)
    elHasil.textContent = "Halo, " + (elKolom.value || "tamu");
  });

  // --- 11e. Daftar belanja: ketik, klik Tambah, muncul di daftar ---
  var elTambah = document.getElementById("tombolTambah");
  var elDaftarEvent = document.getElementById("daftarEvent");

  var tambahItemBelanja = function () {
    var isi = elKolom.value;
    if (isi.trim() !== "") {
      // kosong/spasi saja -> tidak ditambah
      var li = document.createElement("li"); // buat
      li.textContent = isi; // isi
      elDaftarEvent.appendChild(li); // tempel
      elKolom.value = ""; // kosongkan kolom (hanya jika berhasil)
      elHasil.textContent = "Halo, tamu"; // mengubah value lewat kode TIDAK
      // memicu event input, jadi perbarui manual
    }
  };
  elTambah.addEventListener("click", tambahItemBelanja);

  // Bonus: tekan Enter di kolom juga menambah (function yang SAMA dipakai ulang)
  elKolom.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      tambahItemBelanja();
    }
  });

  // --- 11f. focus dan blur ---
  elKolom.addEventListener("focus", function () {
    elKolom.style.backgroundColor = "#eef";
  });
  elKolom.addEventListener("blur", function () {
    elKolom.style.backgroundColor = "";
  });

  // --- 11g. mouseover dan mouseout ---
  var elKotak = document.getElementById("kotakHover");
  elKotak.addEventListener("mouseover", function () {
    elKotak.style.backgroundColor = "gold";
  });
  elKotak.addEventListener("mouseout", function () {
    elKotak.style.backgroundColor = "";
  });

  // --- 11h. Form: submit dan preventDefault ---
  // Form secara bawaan me-refresh halaman saat dikirim. preventDefault() membatalkannya.
  var elForm = document.getElementById("formEvent");
  var elFormInput = document.getElementById("formInput");
  elForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("form dikirim, isinya:", elFormInput.value);
    elFormInput.value = "";
  });

  // --- 11i. Banyak elemen sekaligus: loop + function pembuat handler ---
  // Jebakan ES5: kalau handler memakai variabel loop "i" langsung, semua handler
  // melihat nilai i yang SAMA (nilai akhir), karena handler baru jalan saat diklik,
  // setelah loop selesai. Solusi: bungkus pemasangan dalam function (closure).
  var semuaBtn = document.querySelectorAll(".btn");
  var pasangBtn = function (el, nomor) {
    // "nomor" milik tiap pemanggilan
    el.addEventListener("click", function (e) {
      console.log("tombol", nomor, "-> teks:", e.target.textContent);
    });
  };
  for (var bt = 0; bt < semuaBtn.length; bt++) {
    pasangBtn(semuaBtn[bt], bt + 1);
  }
  // [ES6] pakai "let i" di for, kotak i dibuat baru tiap putaran, jadi tidak perlu pasangBtn.

  // --- 11j. Melepas listener: removeEventListener ---
  // Hanya bisa kalau function-nya BERNAMA (function tanpa nama tidak bisa dilepas).
  var elSekali = document.getElementById("tombolSekali");
  var hanyaSekali = function () {
    console.log("hanya sekali");
    elSekali.textContent = "Sudah (listener dilepas)";
    elSekali.removeEventListener("click", hanyaSekali);
  };
  elSekali.addEventListener("click", hanyaSekali);

  // --- 11k. Event delegation: satu listener untuk banyak anak ---
  // Cocok untuk item yang ditambahkan belakangan. Klik item daftar belanja untuk menghapusnya.
  elDaftarEvent.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      elDaftarEvent.removeChild(e.target);
    }
  });

  // --- 11l. Menunggu HTML selesai dimuat ---
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded: HTML selesai dimuat");
  });
  // (Kalau <script> sudah di bawah body, biasanya tidak wajib, tapi sering dipakai.)

  // --- 11m. Cara lain memasang event (kurang disarankan) ---
  // elemen.onclick = function () { ... };  -> hanya bisa SATU handler (yang baru menimpa)
  // <button onclick="sapa()"> di HTML       -> mencampur HTML dan JS
  // addEventListener boleh dipasang banyak kali pada elemen yang sama.

  // --- 11n. Jenis event yang sering dipakai ---
  // click, dblclick       klik, klik dua kali
  // input, change         isi kolom berubah (tiap huruf / setelah selesai)
  // keydown, keyup        tombol keyboard ditekan / dilepas (e.key = tombolnya)
  // submit                form dikirim
  // mouseover, mouseout   kursor masuk / keluar elemen
  // focus, blur           elemen dipilih / ditinggalkan
  // DOMContentLoaded      HTML selesai dimuat
  // [ES6] handler sering ditulis arrow function: el.addEventListener("click", () => { ... })
}

/* =======================================================================
   12. KOMBINASI (GABUNGAN MATERI 1-11)
   Ini bagian paling berguna sebagai bahan latihan membaca alur.
   (Beberapa contoh di akhir bagian ini memakai function.)
======================================================================= */
console.log("===== 12. KOMBINASI =====");

// --- 12a. Statistik array angka: total, rata-rata, terbesar, terkecil ---
var dataAngka = [80, 65, 90, 70];
var totalData = 0;
var terbesar = dataAngka[0]; // mulai dari isi pertama, bukan 0
var terkecil = dataAngka[0];
for (var d = 0; d < dataAngka.length; d++) {
  totalData += dataAngka[d];
  if (dataAngka[d] > terbesar) {
    terbesar = dataAngka[d];
  }
  if (dataAngka[d] < terkecil) {
    terkecil = dataAngka[d];
  }
}
var rataData = totalData / dataAngka.length;
console.log("total:", totalData); // -> 305
console.log("rata-rata:", rataData); // -> 76.25
console.log("terbesar:", terbesar); // -> 90
console.log("terkecil:", terkecil); // -> 65

// --- 12b. Menghitung berapa yang memenuhi syarat (genap) ---
var campurAngka = [3, 8, 12, 5, 6, 7];
var jumlahGenapArr = 0;
for (var g = 0; g < campurAngka.length; g++) {
  if (campurAngka[g] % 2 === 0) {
    jumlahGenapArr++;
  }
}
console.log("banyak genap:", jumlahGenapArr); // -> 3

// --- 12c. Mencari posisi sebuah nilai (tanpa indexOf) ---
var cariDi = ["a", "b", "c", "d"];
var posisi = -1; // -1 = belum ketemu
for (var cd = 0; cd < cariDi.length; cd++) {
  if (cariDi[cd] === "c") {
    posisi = cd;
    break; // sudah ketemu, hentikan loop
  }
}
console.log('posisi "c":', posisi); // -> 2

// --- 12d. Menyaring (filter manual): ambil yang memenuhi syarat ---
var semuaAngka = [5, 12, 8, 20, 3, 15];
var besarSaja = [];
for (var s = 0; s < semuaAngka.length; s++) {
  if (semuaAngka[s] > 10) {
    besarSaja.push(semuaAngka[s]);
  }
}
console.log("angka > 10:", besarSaja); // -> [12,20,15]

// --- 12e. Membalik array ke array baru ---
var asalBalik = [1, 2, 3, 4];
var hasilBalik = [];
for (var bl = asalBalik.length - 1; bl >= 0; bl--) {
  hasilBalik.push(asalBalik[bl]);
}
console.log("dibalik:", hasilBalik); // -> [4,3,2,1]

// --- 12f. Mengurutkan manual (bubble sort): loop di dalam loop + tukar ---
var urut = [5, 2, 9, 1, 7];
for (var u = 0; u < urut.length - 1; u++) {
  for (var v = 0; v < urut.length - 1 - u; v++) {
    if (urut[v] > urut[v + 1]) {
      var tmp = urut[v]; // tukar posisi lewat variabel sementara
      urut[v] = urut[v + 1];
      urut[v + 1] = tmp;
    }
  }
}
console.log("bubble sort:", urut); // -> [1,2,5,7,9]

// --- 12g. Array berisi object: total, rata-rata, tertinggi, filter, hitung ---
var dataKelas = [
  { nama: "Ani", nilai: 80 },
  { nama: "Budi", nilai: 65 },
  { nama: "Cici", nilai: 90 },
  { nama: "Dedi", nilai: 70 },
];
var totalKelas = 0;
var juara = dataKelas[0];
var lulusNama = [];
var jumlahLulus = 0;
var jumlahRemed = 0;
for (var dk = 0; dk < dataKelas.length; dk++) {
  totalKelas += dataKelas[dk].nilai;
  if (dataKelas[dk].nilai > juara.nilai) {
    juara = dataKelas[dk];
  }
  if (dataKelas[dk].nilai >= 70) {
    lulusNama.push(dataKelas[dk].nama);
    jumlahLulus++;
  } else {
    jumlahRemed++;
  }
}
console.log("rata-rata kelas:", totalKelas / dataKelas.length); // -> 76.25
console.log("nilai tertinggi:", juara.nama, juara.nilai); // -> Cici 90
console.log("yang lulus (>=70):", lulusNama); // -> ["Ani","Cici","Dedi"]
console.log("lulus:", jumlahLulus, "| remedial:", jumlahRemed); // -> 3 | 1

// --- 12h. Menghitung frekuensi kata pakai object ---
var kalimat = "apel jeruk apel mangga jeruk apel";
var daftarKata = kalimat.split(" ");
var frekuensi = {};
for (var w = 0; w < daftarKata.length; w++) {
  var kt = daftarKata[w];
  if (frekuensi[kt] === undefined) {
    frekuensi[kt] = 1; // kunci belum ada -> buat, mulai dari 1
  } else {
    frekuensi[kt]++; // sudah ada -> tambah 1
  }
}
console.log("frekuensi:", frekuensi); // -> {apel: 3, jeruk: 2, mangga: 1}

// --- 12i. Tabel (array 2 dimensi): jumlah semua sel dan cetak per baris ---
var tabel = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var jumlahSel = 0;
for (var tr = 0; tr < tabel.length; tr++) {
  for (var tc = 0; tc < tabel[tr].length; tc++) {
    jumlahSel += tabel[tr][tc];
  }
}
console.log("jumlah semua sel:", jumlahSel); // -> 45
// Jumlah diagonal (baris = kolom):
var diagonal = 0;
for (var dg = 0; dg < tabel.length; dg++) {
  diagonal += tabel[dg][dg];
}
console.log("jumlah diagonal:", diagonal); // -> 15

// --- 12j. Bilangan prima 2 sampai 20 (loop + if + break + array) ---
var daftarPrima = [];
for (var n = 2; n <= 20; n++) {
  var prima = true;
  for (var pembagi = 2; pembagi * pembagi <= n; pembagi++) {
    if (n % pembagi === 0) {
      prima = false;
      break;
    }
  }
  if (prima) {
    daftarPrima.push(n);
  }
}
console.log("prima:", daftarPrima.join(", ")); // -> 2, 3, 5, 7, 11, 13, 17, 19

// --- 12k. FizzBuzz 1 sampai 15 (kelipatan 3 = Fizz, 5 = Buzz, keduanya = FizzBuzz) ---
var hasilFB = [];
for (var fb = 1; fb <= 15; fb++) {
  if (fb % 15 === 0) {
    hasilFB.push("FizzBuzz");
  } else if (fb % 3 === 0) {
    hasilFB.push("Fizz");
  } else if (fb % 5 === 0) {
    hasilFB.push("Buzz");
  } else {
    hasilFB.push(fb);
  }
}
console.log("FizzBuzz:", hasilFB.join(", "));
// -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
// (kelipatan 15 harus dicek PERTAMA, kalau tidak, 15 hanya jadi "Fizz")

// --- 12l. String + loop: hitung huruf vokal ---
var kataUji = "pemrograman";
var jumlahVokal = 0;
for (var hv = 0; hv < kataUji.length; hv++) {
  if ("aiueo".indexOf(kataUji[hv]) !== -1) {
    jumlahVokal++;
  }
}
console.log("vokal di pemrograman:", jumlahVokal); // -> 4

// --- 12m. String + loop: membalik teks dan cek palindrom ---
var teksAsli = "katak";
var teksBalik = "";
for (var tb = teksAsli.length - 1; tb >= 0; tb--) {
  teksBalik += teksAsli[tb];
}
console.log("dibalik:", teksBalik); // -> katak
console.log("palindrom?", teksAsli === teksBalik); // -> true
console.log("kamus dibalik:", "kamus".split("").reverse().join(""));
// -> sumak (versi singkat: split -> reverse -> join)

// --- 12n. String + array + loop: kapital di awal tiap kata ---
var judul = "belajar js itu seru";
var kataJudul = judul.split(" ");
for (var kj = 0; kj < kataJudul.length; kj++) {
  kataJudul[kj] =
    kataJudul[kj].charAt(0).toUpperCase() + kataJudul[kj].slice(1);
}
console.log("judul:", kataJudul.join(" ")); // -> Belajar Js Itu Seru

// --- 12o. Mengecek tipe tiap isi array (typeof + null + Array.isArray) ---
var campurTipe = [1, "a", true, null, undefined, [1], { a: 1 }];
for (var ct = 0; ct < campurTipe.length; ct++) {
  var tipeItem = typeof campurTipe[ct];
  if (campurTipe[ct] === null) {
    tipeItem = "null";
  } else if (Array.isArray(campurTipe[ct])) {
    tipeItem = "array";
  }
  console.log("isi ke-" + ct + ":", tipeItem);
}
// -> number, string, boolean, null, undefined, array, object

// --- 12p. Object berisi array: tambah data lalu hitung ---
var kantong = { pemilik: "Kai", isi: ["buku", "pulpen"] };
kantong.isi.push("penghapus");
console.log("isi kantong:", kantong.isi.join(", ")); // -> buku, pulpen, penghapus
console.log("jumlah isi:", kantong.isi.length); // -> 3

// --- 12q. Mengubah data lewat JSON lalu membacanya lagi ---
var dataAsli = [
  { id: 1, tag: ["a", "b"] },
  { id: 2, tag: [] },
];
var disimpan = JSON.stringify(dataAsli);
var dibaca = JSON.parse(disimpan);
console.log("teks JSON:", disimpan);
console.log("dibaca[0].tag[1]:", dibaca[0].tag[1]); // -> b

// ----- Tambahan: kombinasi yang memakai function (materi 9) -----

// --- 12r. Statistik dibungkus jadi function (return object) ---
function statistik(arr) {
  var total = 0;
  var terbesarS = arr[0];
  var terkecilS = arr[0];
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
    if (arr[i] > terbesarS) {
      terbesarS = arr[i];
    }
    if (arr[i] < terkecilS) {
      terkecilS = arr[i];
    }
  }
  return {
    total: total,
    rata: total / arr.length,
    terbesar: terbesarS,
    terkecil: terkecilS,
  };
}
var statA = statistik([80, 65, 90, 70]);
var statB = statistik([100, 50]);
console.log("statA:", statA.total, statA.rata, statA.terbesar, statA.terkecil); // -> 305 76.25 90 65
console.log("statB:", statB.total, statB.rata, statB.terbesar, statB.terkecil); // -> 150 75 100 50

// --- 12s. Mengubah nilai jadi huruf, dipakai lewat map ---
function keHuruf(nilai) {
  if (nilai >= 90) {
    return "A";
  }
  if (nilai >= 70) {
    return "B";
  }
  if (nilai >= 50) {
    return "C";
  }
  return "D";
}
console.log("keHuruf:", [95, 72, 50, 30].map(keHuruf).join(" ")); // -> A B C D
// (map mengirim function NAMA-nya tanpa ( ). Function dipanggil otomatis tiap isi.)

// --- 12t. Jebakan klasik map + parseInt ---
console.log('["1","2","3"].map(parseInt):', ["1", "2", "3"].map(parseInt)); // -> [1, NaN, NaN]
// Penyebab: map mengirim 3 argumen (isi, indeks, array) dan parseInt menganggap
// argumen ke-2 (indeks) sebagai sistem bilangan.
console.log("map(Number):", ["1", "2", "3"].map(Number)); // -> [1,2,3]
console.log(
  "map dengan function pembungkus:",
  ["1", "2", "3"].map(function (t) {
    return parseInt(t, 10);
  }),
); // -> [1,2,3]

// --- 12u. Grid (array 2 dimensi) dibuat dan dicetak lewat function ---
function buatGrid(baris, kolomG, isi) {
  var grid = [];
  for (var r = 0; r < baris; r++) {
    var barisBaruG = []; // WAJIB dibuat baru tiap baris
    for (var c = 0; c < kolomG; c++) {
      barisBaruG.push(isi);
    }
    grid.push(barisBaruG);
  }
  return grid;
}
function cetakGrid(grid) {
  for (var r = 0; r < grid.length; r++) {
    console.log(grid[r].join(" "));
  }
}
var grid3 = buatGrid(3, 4, 0); // 3 baris, 4 kolom, isi 0
grid3[1][2] = 7;
cetakGrid(grid3);
// -> "0 0 0 0"  "0 0 7 0"  "0 0 0 0"

function jumlahSemuaSel(grid) {
  var total = 0;
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      total += grid[r][c];
    }
  }
  return total;
}
console.log("jumlahSemuaSel:", jumlahSemuaSel(grid3)); // -> 7

// --- 12v. Daftar tugas (to-do) lengkap dengan function dan array of object ---
// Pola yang sama dipakai di aplikasi nyata: data di array, function mengubah data.
var tugasList = [];
var idBerikut = 1;

function tambahTugas(teks) {
  tugasList.push({ id: idBerikut, teks: teks, selesai: false });
  idBerikut++;
}
function selesaikanTugas(id) {
  for (var i = 0; i < tugasList.length; i++) {
    if (tugasList[i].id === id) {
      tugasList[i].selesai = true;
      return true; // ketemu dan diubah
    }
  }
  return false; // id tidak ada
}
function hitungSelesai() {
  var n = 0;
  for (var i = 0; i < tugasList.length; i++) {
    if (tugasList[i].selesai) {
      n++;
    }
  }
  return n;
}
function ringkasTugas() {
  return tugasList
    .map(function (t) {
      return t.id + ". " + t.teks + (t.selesai ? " [x]" : " [ ]");
    })
    .join(" | ");
}
tambahTugas("belajar JS");
tambahTugas("latihan DOM");
tambahTugas("ujian");
console.log("selesaikanTugas(2):", selesaikanTugas(2)); // -> true
console.log("selesaikanTugas(99):", selesaikanTugas(99)); // -> false
console.log("hitungSelesai:", hitungSelesai()); // -> 1
console.log(ringkasTugas()); // -> 1. belajar JS [ ] | 2. latihan DOM [x] | 3. ujian [ ]

// --- 12w. Menghitung frekuensi huruf, dibungkus function ---
function hitungHuruf(teks) {
  var hasil = {};
  for (var i = 0; i < teks.length; i++) {
    var h = teks[i];
    if (hasil[h] === undefined) {
      hasil[h] = 1;
    } else {
      hasil[h]++;
    }
  }
  return hasil;
}
console.log('hitungHuruf("banana"):', hitungHuruf("banana")); // -> {b: 1, a: 3, n: 2}

// --- 12x. Menyaring, mengubah, dan menggulung dalam satu rantai ---
var transaksi = [
  { barang: "pulpen", harga: 3000, jumlah: 2 },
  { barang: "buku", harga: 8000, jumlah: 1 },
  { barang: "penghapus", harga: 2000, jumlah: 3 },
];
var totalBelanja = transaksi
  .map(function (t) {
    return t.harga * t.jumlah;
  }) // [6000, 8000, 6000]
  .reduce(function (hasil, x) {
    return hasil + x;
  }, 0); // jumlahkan
console.log("totalBelanja:", totalBelanja); // -> 20000
var mahal = transaksi
  .filter(function (t) {
    return t.harga >= 3000;
  })
  .map(function (t) {
    return t.barang;
  });
console.log("barang harga >= 3000:", mahal); // -> ["pulpen","buku"]

// --- 12y. DOM + Event + Function (versi tulisan, jalan di index.html: lihat bagian 11) ---
// Alurnya selalu sama: ambil elemen -> pasang listener -> di handler baca
// input/ubah data -> ubah DOM. Contoh di bagian 11e (daftar belanja) memakai:
//   event click + function tambahItemBelanja + value + trim + if
//   + createElement/textContent/appendChild + mengosongkan value.

/* =======================================================================
   13. TATA BAHASA, ERROR UMUM, DAN RINGKASAN ES5 vs ES6
   (hanya komentar, tidak dijalankan)
======================================================================= */

/* --- FUNGSI SIMBOL ---
   ( )   mengelompokkan hitungan | membungkus syarat if/for/while |
         MEMANGGIL function: sapa() | membungkus parameter: function (a, b)
   { }   membungkus blok kode (if, for, while, function) ATAU isi object
         (kalau muncul setelah "=" atau di dalam "( )", itu object)
   [ ]   membuat array [1,2] | mengambil isi lewat indeks arr[0] atau
         lewat nama kunci obj["kunci"]
   .     masuk ke bagian dalam sesuatu: console.log, kata.length, siswa.nama,
         document.getElementById
   ,     memisahkan item array, properti object, parameter, dan argumen
   ;     mengakhiri satu perintah. Di dalam for( ) memisahkan 3 bagian.
         JANGAN ditaruh setelah } penutup blok if/for/while/switch/function
         deklarasi. (Setelah "var x = function () { ... }" justru dipakai.)
   :     pemisah kunci:nilai di object, "case x:" di switch, dan di ternary
   ?     pembuka ternary: syarat ? a : b
   =     MENGISI variabel          ===   MEMBANDINGKAN
   !     kebalikan                 &&    DAN        ||   ATAU
   //    komentar satu baris       komentar blok = garis-miring + bintang
   function  membuat function      return   mengembalikan hasil
   =>    (ES6) arrow function      `...${x}...`  (ES6) template literal
*/

/* --- ERROR YANG SERING MUNCUL (baca pesannya di Console) ---
   ReferenceError: x is not defined
       -> memakai variabel/function yang belum dibuat, atau salah huruf
          besar/kecil (total vs Total), atau salah ketik (console,log), atau
          lupa "document." sebelum getElementById, atau memanggil variabel
          lokal dari luar function-nya.
   SyntaxError: Unexpected token ...
       -> cara menulis salah: kurung/kurawal kurang, simbol nyasar,
          koma di tempat yang salah.
   SyntaxError: Unexpected end of input
       -> ada { atau ( yang belum ditutup.
   TypeError: Cannot read properties of undefined (reading 'x')
       -> mengambil isi DARI sesuatu yang undefined. Misalnya salah urutan
          kelas.nilai[i] (benar: kelas[i].nilai), atau indeks di luar array.
   TypeError: Cannot read properties of null (reading 'addEventListener')
       -> getElementById/querySelector mengembalikan null: id salah ketik,
          atau <script> ditaruh SEBELUM elemennya di HTML.
   TypeError: x is not a function
       -> memanggil sesuatu dengan ( ) padahal bukan function, atau function
          ekspresi dipanggil sebelum didefinisikan.
   RangeError: Maximum call stack size exceeded
       -> rekursi tanpa kondisi berhenti.
   Loop tak terbatas (tab macet)
       -> variabel syarat tidak pernah berubah. Cek bagian "langkah" for
          atau perubahan variabel di dalam while.
   Hasil NaN atau "52" bukannya 7
       -> teks ikut dihitung. Ubah dulu dengan Number() atau parseInt().
          Ingat: input.value selalu TEKS.
   Hasil "undefined" padahal yakin ada isinya
       -> cek indeks mulai dari 0, nama kunci, huruf besar/kecil, atau
          function lupa return.
   "[object HTMLInputElement]" tampil di halaman
       -> yang diambil elemennya, bukan isinya. Pakai .value / .textContent.
   Event tidak merespons
       -> pakai sapa() (dengan kurung) padahal harusnya sapa, jenis event
          salah tulis ("onclick" bukan "click"), atau elemennya null.
   Hasil lama padahal kode sudah diubah
       -> simpan file lalu refresh browser (F5).
*/

/* --- RINGKASAN PERBEDAAN ES5 vs ES6 (yang sudah kita temui) ---
   ES5 (dipakai di sini)         | ES6
   ------------------------------|-------------------------------------
   var (dibatasi function)       | let dan const (dibatasi blok)
   tidak ada const               | const = tidak boleh diisi ulang
   "Halo " + nama                | `Halo ${nama}` (template literal)
   function (a) { return a; }    | (a) => a   (arrow function)
   nama = nama || "tamu"         | function f(nama = "tamu")
   arguments                     | rest parameter ...args
   indexOf(x) !== -1             | includes(x)
   for (var i...) + arr[i]       | for (let x of arr)
   daftar for + indeks pada      | daftar.forEach(...), Array.from(daftar)
     hasil querySelectorAll      |
   loop + function pembungkus    | let i di dalam for (handler per putaran)
     agar handler dapat nomor    |
   Math.pow(2, 3)                | 2 ** 3
   { nama: nama }                | { nama }
   Object.keys() ada             | Object.values(), Object.entries()
   isNaN()                       | Number.isNaN() (lebih ketat)
   replace + split/join untuk    | replaceAll()
     ganti semua                 |
   tipe: string, number, boolean,| ditambah Symbol (BigInt menyusul)
     null, undefined, object     |
   Kode ES5 tetap jalan di ES6, tapi tidak sebaliknya.
*/

/* --- CARA MEMANFAATKAN KAMUS INI SEBELUM UJIAN ---
   1. Jangan cuma dibaca. Tutup komentar "// -> ..." dengan tangan/jari,
      tebak hasilnya, baru geser dan cek.
   2. Tandai bagian yang kamu salah tebak, lalu ulangi bagian itu saja.
   3. Tulis ulang dari nol (tanpa melihat kamus) beberapa kombinasi di bagian 12,
      misalnya statistik array, daftar tugas, dan daftar belanja di bagian 11.
   4. Ujian tanpa catatan: yang harus nempel adalah pola, bukan hafalan simbol:
        ambil elemen -> pasang listener -> baca input -> ubah data -> ubah DOM
        loop + indeks (i = nomor kursi, arr[i] = isi kursi)
        buat -> isi -> tempel
        function + parameter + return
*/
