//Soal 3
//Menentukan nilai akhir mahasiswa/i
let nilaiUTS = parseFloat(prompt('Masukan nilai UTS anda :'));
let nilaiUAS = parseFloat(prompt('Masukan nilai UAS anda :'));
let nilaiTugas = parseFloat(prompt('Masukan nilai Tugas anda :'));

let NA = (nilaiUTS * 0.35) + (nilaiUAS * 0.45) + (nilaiTugas * 0.20);
let akreditasi;

if (NA >= 80 && NA <= 100) {
  akreditasi = "A";
} else if (NA >= 70 && NA <= 80) {
  akreditasi = "B";
} else if (NA >= 50 && NA <= 70) {
  akreditasi = "C";
} else if (NA >= 40 && NA <= 50) {
  akreditasi = "D";
} else {
  akreditasi = "E";
}

alert('Nilai Akhir Anda : ' + NA.toFixed(2));
alert('Akreditasi Anda : ' + akreditasi);