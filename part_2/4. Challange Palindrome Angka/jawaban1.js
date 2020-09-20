// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
// Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, 
// jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
// Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
// Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

function angkaPalindrome(num) {
    
    while (true) {
        num++;
        var angka = num.toString()
        var angkaReverse = angka.split('').reverse().join(''); //Pisahkan, balik, dan gabungkan string untuk mendapatkan teks terbalik
        if (angka === angkaReverse) {
          return Number(angka);
        }
      }
  }

  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001



//Perulangan while mengulang melalui blok kode selama kondisi yang ditentukan benar.
//nomor yang sama setelah dibalik. Misalnya 545, 151, 34543, 343, 171, 48984 adalah nomor palindrome
