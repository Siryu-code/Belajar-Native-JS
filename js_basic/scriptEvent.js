var tombol = document.getElementById("tombol");

function sapa() {
    console.log("Tombol diklik!");
}

tombol.addEventListener("clik", sapa);

tombol.addEventListener("click", function () {
    document.getElementById("judul").textContent = "sudah diklik"
});

tombol.addEventListener("click", function (e) {
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.textContent);
});

document.getElementById("kolom").addEventListener("keydown", function (e) {
    console.log(e.key);
});

var kolom = document.getElementById("kolom");
var hasil = document.getElementById("hasil");

kolom.addEventListener("input", function () {
    hasil.textContent = "Kamu Mengetik: " + kolom.value;
});

var hitung = 0;

tombol.addEventListener("click", function () {
    hitung++;
    tombol.textContent = "Diklik " + hitung + " kali";
});

var semuaTombol = document.querySelectorAll(".btn")

for (var i = 0; i < semuaTombol.length; i++) {
    semuaTombol[i].addEventListener("clik", function (e) {
        console.log(e.target.textContent);
    });
}

var kolom = document.getElementById("kolom");
var hasil = document.getElementById("hasil");

kolom.addEventListener("input", function () {
    hasil.textContent = "Halo, " + (kolom.value || "tamu");
});

var tambah = document.getElementById("tambah");
var kolom = document.getElementById("kolom");
var daftar = document.getElementById("daftar");

tambah.addEventListener("click", function () {
  var isiKolom = kolom.value;

  if (isiKolom.trim() !== "") {
    var li = document.createElement("li");

    li.textContent = isiKolom;

    daftar.appendChild(li);

    kolom.value = "";
  }
});
