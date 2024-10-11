//Soal 1 - Dasar
// let n = prompt("Masukkan Angka : ");
// for(let a = 1; a <= n;a++) {
//     alert(a);
// }

//Soal 2 - Dasar
// let a = prompt("Masukan angka pertama : ");
// let b = prompt("Masukan angka kedua : ");
// while (a <= b) { 
//     alert(a);
//     a++;
//   } 

// //Soal 3 - Dasar
// let a = prompt("Masukan angka pertama : ");
// let b = prompt("Masukan angka kedua : ");
// for (let i = a; i <= b; i++) {
//     if (i % 2 !== 0){
//         alert(i);
//     }
// }

//Soal 4 - Dasar
// let a = prompt("Masukan angka pertama : ");
// let b = prompt("Masukan angka kedua : ");
// for (let i = a; i <= b; i++) {
//     if (i % 5 == 0){
//         alert(i);
//     }
// }

//Soal 5 - Menengah
// let a = prompt("Masukan angka pertama : ");
// let b = prompt("Masukan angka kedua : ");
// let r = "0";
// for (let i = a; i <= b; i++) {
//     if (i % 2 !== 0){
//         r++;
//     }
// }
// alert(r);

//Soal 6 - Menengah
let a = prompt("Masukan angka pertama : ");
let b = prompt("Masukan angka kedua : ");
let r = '';
for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) {
        r += i;
    }
}
alert(r);
