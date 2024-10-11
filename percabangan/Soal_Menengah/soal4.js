//Soal 4
//Menentukan bilangan terbesar di antara 3 angka
let x = prompt('Masukan Angka Pertama :');
let y = prompt('Masukan Angka Kedua :');
let z = prompt('Masukan Angka Ketiga :');


if (x > y && x > z) {
    alert(`${x} Terbesar`);
  } else if (y > x && y > z) {
    alert(`${y} adalah angka terbesar`);
  } else if (z > x && z > y) {
    alert(`${z} adalah angka terbesar`);
  } else {
    alert('Angka tersebut sama besar');
  }