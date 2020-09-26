// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai `true` jika di dalam string tersebut terdapat karakter a dan b 
// yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai `false`.


function checkAB(num) {
    let array = []
    for(let i = 0; i < num.length; i++ ){
        array.push(num[i]);
        //console.log(array)
    } 
        for(let j = 1; j <array.length; j++){
            if(array[j] == 'a'){
                if(array[j+4] == 'b'){
                    return true;
                }
            } 
        }
    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false