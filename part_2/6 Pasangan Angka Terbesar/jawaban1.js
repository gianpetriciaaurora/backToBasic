// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
// Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut.
// Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.


function pasanganTerbesar(num) {
  var minAngka = 0;
  var maxAngka = 0;
  var listAngka = num.toString()
  for(i = 0; i < listAngka.length - 1; i++){
    minAngka =  listAngka[i] + listAngka[i + 1] // memisahkan atau membuat list menjadi 2 angka dari jumlah angka
    if(minAngka > maxAngka){
        maxAngka = minAngka
    }
  }
  return maxAngka;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99