function kalkulator(){
let a = parseFloat(prompt("Masukkan angka pertama:"));
let o = prompt("Masukkan operator + (Penjumlahan) - (Pengurangan) * (Perkalian) / (Pembagian):");
let b = parseFloat(prompt("Masukkan angka kedua:"));

let result;
let plus = (a, b) => a + b;
let minus = (a, b) => a - b;
let times = (a, b) => a * b;
let devided = (a, b) => a / b;

    if (o === '+') {
        result =`${a} + ${b} = ${plus(a, b)}`;
    } else if (o === '-') {
        result =`${a} - ${b} = ${minus(a, b)}`;
    } else if (o === '*') {
        result =`${a} x ${b} = ${times(a, b)}`;
    } else if (o === '/') {
        if (b === 0) {
            alert("Pembagian dengan nol tidak diperbolehkan!");
            return;
        }
        result =`${a} : ${b} = ${devided(a, b)}`;
    } else {
        alert("Masukkan operator yang valid (+, -, x, /)!");
        return;
    }

    alert("" + result)
}
kalkulator();