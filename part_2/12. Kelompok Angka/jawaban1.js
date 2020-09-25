// Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang 
// berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut 
// berisikan 3 kategori/kelompok:
//  - kelompok pertama (baris pertama) merupakan angka-angka genap
//  - kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
//  - kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3

//  Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]


 
function mengelompokkanAngka(arr) {
  var hasil = [[],[],[]];
  for(let i = 0; i < arr.length; i++){
      if(arr[i] % 3 == 0){   //mencari angka kelipat 3
        hasil[2].push(arr[i])
      }
      if(arr[i] % 2 == 1){  //bilangan ganjil
        hasil[1].push(arr[i])
      } 
      if(arr[i] % 2 == 0){  //bilangan genap
          hasil[0].push(arr[i]) 
      } 
     
  }
  return hasil
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// var numbers = [1,2,3,4,5];
// var newNumbers = numbers.filter(function(number){
// return (number % 2 !== 0); 
// nilai atau value dari variable newNumbers akan di kembalikan menjadi bilangan ganjil menjadi [1,3,5]
// pengertian module (%) : Operator modulo (%) menghitung sisa operasi divisi. 
// Dalam hal ini, ia menghitung sisa i dibagi dengan 2. Jika x adalah bilangan genap, 
// hasilnya adalah 0 dan jika itu adalah bilangan ganjil, hasilnya adalah 1


