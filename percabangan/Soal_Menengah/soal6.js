//Soal 6
function CountDay(date, month) {
    let day = date; 
    if (month > 1) day += 31; // Januari
    if (month > 2) day += 28; // Februari
    if (month > 3) day += 31; // Maret
    if (month > 4) day += 30; // April
    if (month > 5) day += 31; // Mei
    if (month > 6) day += 30; // Juni
    if (month > 7) day += 31; // Juli
    if (month > 8) day += 31; // Agustus
    if (month > 9) day += 30; // September
    if (month > 10) day += 31; // Oktober
    if (month > 11) day += 30; // November
    if (month > 12) day += 31; // Desember
  
    return day;
  }
  
  let date = prompt("Masukkan Tanggal : ");
  let month = prompt("Masukkan Bulan : ");
  let result = CountDay(parseInt(date), parseInt(month));
  alert("Hari ke - " + result);
  
  