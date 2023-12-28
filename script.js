
function tampilkanSambutan() {
    var nama = document.getElementById('namaInput').value;
    var pesanSambutan = 'Selamat datang, ' + nama + '!';
    document.getElementById('pesanSambutan').innerHTML = pesanSambutan;
}

function hitungRataRa() {
    var nilai1 = parseFloat(document.getElementById('nilai1').value);
    var nilai2 = parseFloat(document.getElementById('nilai2').value);
    var nilai3 = parseFloat(document.getElementById('nilai3').value);
    var rataRata = (nilai1 + nilai2 + nilai3) / 3;
    document.getElementById('rataRata').innerHTML = 'Nilai rata-rata: ' + rataRata.toFixed(2);
    // Menentukan status lulus atau tidak
    var batasLulus = 60;
    var status = rataRata >= batasLulus ? 'Lulus' : 'Tidak Lulus';
    document.getElementById('statusLulus').innerHTML = 'Status: ' + status;
}

function hitungTotal() {
    var totalBelanja = parseFloat(document.getElementById('totalBelanja').value);
    if (isNaN(totalBelanja)) {
        alert("Masukkan jumlah belanja yang valid.");
        return;
    }
    var diskon = 0.10; // 10%
    var batasDiskon = 200000;
    // Menghitung total pembayaran setelah diskon
    var totalPembayaran = totalBelanja;
    if (totalBelanja > batasDiskon) {
        totalPembayaran = totalBelanja - (totalBelanja * diskon);
    }
    document.getElementById('totalPembayaran').innerHTML = 'Total Pembayaran: ' + totalPembayaran.toFixed(2);
}

function konversiNilai() {
    var nilai = parseFloat(document.getElementById('nilaiInput1').value);
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        alert('Masukkan nilai antara 0 dan 100');
        return;
    }
    var nilaiHuruf = '';
    if (nilai >= 90) {
        nilaiHuruf = 'A';
    } else if (nilai >= 80) {
        nilaiHuruf = 'B';
    } else if (nilai >= 70) {
        nilaiHuruf = 'C';
    } else if (nilai >= 60) {
        nilaiHuruf = 'D';
    } else {
        nilaiHuruf = 'E';
    }
    document.getElementById('hasilKonversi').innerHTML = 'Nilai huruf Anda: ' + nilaiHuruf;
}

function hitungRataRata() {
    var mtk = parseFloat(document.getElementById('mtkInput').value);
    var ipa = parseFloat(document.getElementById('ipaInput').value);
    var ips = parseFloat(document.getElementById('ipsInput').value);
    var bing = parseFloat(document.getElementById('bingInput').value);
    if (isNaN(mtk) || isNaN(ipa) || isNaN(ips) || isNaN(bing)) {
        alert('Masukkan nilai numerik untuk semua mata pelajaran');
        return;
    }
    var rataRata = (mtk + ipa + ips + bing) / 4;
    document.getElementById('hasilRataRata').innerHTML = 'Rata-rata nilai: ' + rataRata.toFixed(2);
}
function nilaiTertinggi() {
    var mtk = parseFloat(document.getElementById('mtkInput').value);
    var ipa = parseFloat(document.getElementById('ipaInput').value);
    var ips = parseFloat(document.getElementById('ipsInput').value);
    var bing = parseFloat(document.getElementById('bingInput').value);
    if (isNaN(mtk) || isNaN(ipa) || isNaN(ips) || isNaN(bing)) {
        alert('Masukkan nilai numerik untuk semua mata pelajaran');
        return;
    }
    var nilaiTertinggi = Math.max(mtk, ipa, ips, bing);
    document.getElementById('hasilTertinggi').innerHTML = 'Nilai tertinggi: ' + nilaiTertinggi;
}

function hitungJumlahKata() {
    var paragraf = document.getElementById('paragrafInput').value.trim();
    if (paragraf === '') {
        alert('Masukkan paragraf terlebih dahulu');
        return;
    }
    var jumlahKata = paragraf.split(/\s+/).length;
    document.getElementById('hasilJumlahKata').innerHTML = 'Jumlah kata dalam paragraf: ' + jumlahKata;
}

function tambahBarang() {
    var inputBarang = document.getElementById("namaBarang").value;
    var daftarBarang = document.getElementById("daftarBarang");
if (inputBarang !== "") {
     var listItem = document.createElement("li");
   listItem.appendChild(document.createTextNode(inputBarang));
      daftarBarang.appendChild(listItem);
      document.getElementById("namaBarang").value = "";
} else {
  alert("Silakan masukkan nama barang!");
  }
}

function stringManp() {
    var tanggal = document.getElementById("tanggal").value;
    var pecahTanggal = tanggal.split("-");
      var tanggalBaru = pecahTanggal[1] + "/" + pecahTanggal[0] + "/" + pecahTanggal[2];
      document.getElementById("resTgl").value = tanggalBaru;
}

function hitungTotalNilai() {
    var nilai = document.getElementById("nilaiInput").value;
    nilai = nilai.split(",");
      var total = 0;
      for (var i = 0; i < nilai.length; i++) {
            total += parseInt(nilai[i]);
      }
    document.getElementById("resInput").value = total;
}

function hitung() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var operator = document.getElementById("operator").value;
    var hasil;
switch (operator) {
  case "tambah":
    hasil = angka1 + angka2;
    break;
  case "kurang":
    hasil = angka1 - angka2;
    break;
  case "kali":
    hasil = angka1 * angka2;
    break;
  case "bagi":
    hasil = angka1 / angka2;
    break;
  default:
    hasil = "Pilih operasi yang valid";
    }
    document.getElementById("hasil").innerText = hasil;
  }

  function toggleDiv(divId) {
    document.querySelectorAll('section[id="mainTugas"] div').forEach(section => {
        section.style.display = 'none';
      });

    if(document.getElementById(divId).style.display == 'block') 
    { 
        document.getElementById(divId).style.display = 'none'; 
    }
    else 
    { 
        document.getElementById(divId).style.display = 'block'; 
    }
  }


  function pesanTiket(imageName) {
    alert("Anda telah memesan tiket untuk " + imageName + ".");
}