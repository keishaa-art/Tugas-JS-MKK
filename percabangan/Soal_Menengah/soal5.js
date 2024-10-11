//Soal 5
//Menentukan bilangan tersebut masuk dalam kuadran mana
let x = prompt('Masukan nilai X :');
let y = prompt('Masukan nilay Y :');

if (x > 0 && y > 0) {
  alert(`Nilai ${x} dan ${y} berada di kuadran 1`);
} else if (x < 0 && y > 0) {
  alert(`Nilai ${x} dan ${y} berada di kuadran 2`);
} else if (x < 0 && y < 0) {
  alert(`Nilai ${x} dan ${y} berada di kuadran 3`);
} else {
  alert(`Nilai ${x} dan ${y} berada di kuadran 4`);
}