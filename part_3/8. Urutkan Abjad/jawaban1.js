// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
// Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka 
// didalam string tersebut.

//cara 1
function urutkanAbjad(str) {
    let temp = [];
    for(let i = 0; i < str.length; i++){
        temp.push(str[i]);
    }
    return temp.sort().join('');
}

//cara 2
// function urutkanAbjad(str) {
//     let split = str.split('');
//     //console.log(split)
//     let sort = split.sort();
//     //console.log(sort)
//     let join = sort.join('');
//     return join
// }

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

//Split digunakan untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli.
//Metode sort () mengurutkan array menurut abjad:
