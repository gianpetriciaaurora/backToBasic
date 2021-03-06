// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri 
// dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
// Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
// Code

function targetTerdekat(arr) {
 let indexOfO = -1;
 let indexOfX = -1;
 let nilaiNol = 0;
  for(let i = 0; i < arr.length -1; i++){
    if (arr[i] == 'o' && i > indexOfX) {
        indexOfO = i;
      } 
      
      if (arr[i] == 'x' && i > indexOfO) {
        indexOfX = i;
      }
      if (indexOfO !== -1 && indexOfX !== -1) {
        return Math.abs(indexOfO - indexOfX)
      }
      }
      return nilaiNol
  }

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// Fungsi abs () mengembalikan nilai absolut sebuah angka.
// Jika fungsi abs () diberikan nilai non-numerik, array dengan satu dari satu elemen,
// atau objek kosong sebagai parameter angka, fungsi abs () akan mengembalikan NaN (bukan angka).