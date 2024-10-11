//Soal 2
//Menentukan jenis akar persamaan
// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Masukkan angka pertama :");
let b = prompt("Masukkan angka kedua : ");
let c = prompt("Masukkan angka :");

// calculate discriminant
let d = b * b - 4 * a * c;

// condition for real and different roots
if (d > 0) {
    root1 = (-b + Math.sqrt(d)) / (2 * a);
    root2 = (-b - Math.sqrt(d)) / (2 * a);

    // result
    alert(`Akar persamaan kuadrat adalah ${root1} dan ${root2}`);
}

// condition for real dan equal roots
else if (d == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    alert(`Akar persamaan kuadrat adalah ${root1} dan ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);

    // result
    alert(
    `Akar persamaan kuadrat adalah ${realPart} + ${imagPart}i dan ${realPart} - ${imagPart}i`
  );
}
