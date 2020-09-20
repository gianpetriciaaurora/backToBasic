// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let karakter = 0;
    for (let i = 0; i < str.length; i++){
      if (str[i] === 'x'){
        karakter ++;
        return true;
      }else if (str[i] === 'o'){
        karakter --;
        return false;
      }
    }
  }
  
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

// pernyataan let mendeklarasikan variabel lokal cakupan-blok,
// secara opsional menginisialisasinya ke sebuah nilai.
// ++ 	Penambahan
// -- 	Pengurangan