// Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka. 
// Function akan me-return median dari deret angka tersebut. Median adalah nilai tengah dari sebuah deret bilangan. 
// Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut. 
// Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah. 
// Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).


function cariMedian(arr) {
    //jika jumlah hasil bagi arr habis
    if(arr.length % 2 === 0) {
      var angka1 = arr[arr.length/2-1];
      var angka2 = arr[(arr.length/2)];
      var hasil1 = (angka1+angka2)/2;
    //   console.log(angka1);
    //   console.log(angka2);
      return hasil1;
    }
    else {
        var hasil2 = arr[Math.floor(arr.length/2)];
        return hasil2;
      }
  }

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

//fungsi math.floor() pada javascript, 
//jadi fungsi math.floor() pada javascript adalah sebuah fungsi untuk mengembalikan nilai 
//menjadi bilangan bulat dari yang terbesar kurang dari atau sama dengan.