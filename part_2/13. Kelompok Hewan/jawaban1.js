// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
//Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array 
//yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). 
//Untuk kasus ini, anggap saja semua text lowercase.
// Contoh jika `animals` adalah `["ayam", "kucing", "bebek", "bangau", "zebra"]`
// maka akan menampilkan output: `[ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]`
// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
  var hewan = animals.sort();
  var zoo = [];

  for (let i = 0; i < hewan.length; i++) {
    var grup = [];
    if (zoo.length === 0) {
      grup.push(hewan[i]);
      zoo.push(grup)
    } else {
      var flag = false
      for (let j=0; j < zoo.length; j++) {
        var compare=zoo[j][0][0]
        if(compare==hewan[i][0]){
          zoo[j].push(hewan[i])
          flag=true
        }
      }

      if(flag==false){
        grup.push(hewan[i])
        zoo.push(grup)
      }
    }
  }

  return zoo;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

// The sort() metode macam item dari array.
// Urutan dapat berupa alfabet, dan baik naik (up) atau turun (down) .
// Secara default, sort() metode macam nilai-nilai sebagai string dalam urutan abjad dan menaik.
// Ini bekerja baik untuk string ("Apple" comes before "Banana") . 
// Namun, jika angka diurutkan sebagai string, "25" lebih besar dari "100" , karena "2" lebih besar dari "1" .
// Karena ini, sort() metode akan menghasilkan hasil yang salah ketika menyortir nomor. 


// push ( some_value ) : merupakan fungsi yang digunakan untuk memasukkan value ke sebuah array dan disimpan di paling akhir / paling kanan.
// pop ( ) : digunakan untuk menghapus / remove isi array paling akhir.
// shift ( ) : digunakan untuk menghapus / remove isi array paling awal.
// unshift ( some_value ) : fungsi yang digunakan untuk memasukkan value ke sebuah array tetapi disimpan di paling awal / ujung kiri.

//cara lain
// function groupAnimals(animals) {
//     var abjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
//                 'q','r','s','t','u','v','w','x','y','z'];
//     var temp = [];
    
//     for(var i = 0; i < abjad.length; i++){
//         var temp1=[];
//         for(var j = 0; j < animals.length; j++){
//             if (animals[j][0] == abjad[i]) {
//                 temp1.push(animals[j]);
//             }
//         }
//         if (temp1 != '') {
//             temp.push(temp1)
//         }
//     }
//     return temp
//   }