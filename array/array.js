//soal no 1
// function RataRata(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     let total = arr.reduce((acc, val) => acc + val, 0);
//     return total / arr.length;
// }

// let arrayDouble = [20, 40, 50, 60, 70];
// let rataRata = RataRata(arrayDouble);
// alert("Nilai rata-rata: " + rataRata);

//  RataRata();

// // soal no 2
// function urutkanAngka(arr) {
//     // Mengurutkan array dari kecil ke besar
//     return arr.sort((a, b) => a - b);
// }

// // Mendapatkan input dari pengguna melalui prompt
// let input = prompt("Masukkan angka-angka dipisahkan dengan koma:");
// if (input) {
//     let arrayDouble = input.split(',').map(Number); // Mengubah input string menjadi array angka

//     // Mengurutkan angka
//     let arrayUrut = urutkanAngka(arrayDouble);

//     // Menampilkan hasil dengan alert
//     alert("Array terurut: " + arrayUrut.join(', '));
// } else {
//     alert("Tidak ada input yang dimasukkan.");
// }

// //Soal no 3
// function cariAngkaTerbesar(arr) {
//     return Math.max(...arr); // Menggunakan spread operator untuk mencari nilai terbesar
// }

// // Mendapatkan input dari pengguna melalui prompt
// let input = prompt("Masukkan angka-angka dipisahkan dengan koma:");
// if (input) {
//     let arrayDouble = input.split(',').map(Number); // Mengubah input string menjadi array angka

//     // Mencari angka terbesar
//     let angkaTerbesar = cariAngkaTerbesar(arrayDouble);

//     // Menampilkan hasil dengan alert
//     alert("Angka terbesar: " + angkaTerbesar);
// } else {
//     alert("Tidak ada input yang dimasukkan.");
// }
 
// soal no 4
function fibonacci() {
    let n = parseInt(prompt("Masukkan jumlah angka Fibonacci yang ingin ditampilkan:"));

    if (isNaN(n) || n <= 0) {
        alert("Silakan masukkan angka positif yang valid.");
        return;
    }

    const fib = [0, 1]; 

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Menghitung angka Fibonacci selanjutnya
    }

    // Menampilkan hasil dalam alert
    alert("Deret Fibonacci: " + fib.slice(0, n).join(", "));
}

// Memanggil fungsi
fibonacci();