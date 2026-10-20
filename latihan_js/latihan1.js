var angka = 0;

var elAngka = document.getElementById("angka");
var elBtnTambah = document.getElementById("btnTambah");
var elBtnReset = document.getElementById("btnReset");

elBtnTambah.addEventListener("click", function () {
    angka++;
    elAngka.textContent = angka;
});

elBtnReset.addEventListener("click", function () {
    angka = 0;
    elAngka.textContent = angka;
});

var inputNama = document.getElementById("inputNama");
var btnSapa = document.getElementById("btnSapa");
var hasilSapa = document.getElementById("hasilSapa");

btnSapa.addEventListener("click", function () {
    var nama = inputNama.value.trim();

    if (nama === "") {
        hasilSapa.textContent = "Nama tidak boleh kosong";
    } else {
        hasilSapa.textContent = "Halo, " + nama + "!";
    }
});

var inputNilai = document.getElementById("inputNilai");
var btnCek = document.getElementById("btnCek");
var hasilNilai = document.getElementById("hasilNilai");

btnCek.addEventListener("click", function () {
    var teks = String(inputNilai);
    var nilai = Number(teks);

    if (teks === "") {
        hasilNilai.textContent = "Isi nilai dulu";
    } else if (nilai < 0 || nilai > 100) {
        hasilNilai.textContent = "Nilai harus 0-100";
    } else if (nilai >= 75) {
        hasilNilai.textContent = "Lulus";
    } else {
        hasilNilai.textContent = "Tidak lulus";
    }
});

var btnTampil = document.getElementById("btnTampil");
var daftarBuah = document.getElementById("daftarBuah");

btnTampil.addEventListener("click", function () {
    var buah = ["Apel", "Jeruk", "Mangga", "Pisang"];

    daftarBuah.innerHTML = "";

    for (var i = 0; i < buah.length; i++) {
        var li = document.createElement("li");
        li.textContent = buah[i];
        daftarBuah.appendChild(li);
    }
});