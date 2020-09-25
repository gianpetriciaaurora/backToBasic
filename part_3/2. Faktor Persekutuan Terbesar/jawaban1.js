// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.


function fpb(angka1, angka2) {
  var hasil = 0;
  for(let i = 0; i < angka2; i++){
    //angka1 dan angka2 yang habis dibagi i paling terakhir
    if(angka1 % i === 0 && angka2 % i === 0){
        hasil = i;
    }
  }
  return hasil;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1