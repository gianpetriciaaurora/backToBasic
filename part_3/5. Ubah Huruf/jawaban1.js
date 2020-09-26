// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
    var newString = '';
    for(let i = 0; i < kata.length; i++){
        //fromCharCode
        newString = newString + String.fromCharCode(kata.charCodeAt(i) +1)
    }
    return newString;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu


// function ubahHuruf(kata) {
//     var abjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
//     'r','s','t','u','v','w','x','y','z'];
//     var hasil = '';
//     for(var i = 0; i < kata.length; i++){
//         for(var j = 0; j < abjad.length; j++){
//             if (kata[i] == abjad[j]) {
//                 hasil+=abjad[j+1]
//             }
//         }
//     }
//     return hasil
// }

