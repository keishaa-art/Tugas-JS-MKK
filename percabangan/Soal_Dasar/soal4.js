// //soal 4
// //Menentukan apakah itu kelipatan atau bukan
let a = prompt("Masukan Data");
let b = prompt("Masukan Data");
if (a >= b && a>0){
    if (a % b == 0) {
        alert(`${a} kelipatan dari ${b}`);
      } else {
        alert( `${a} bukan kelipatan dari ${b}`);
      }
      
}
