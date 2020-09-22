function dataHandling(inputan) {
   for(i = 0; i < input.length; i++){
       for(j = 0; j < input.length; j++){
           if(j == 0){
               console.log('Nomor ID     : ' + inputan[i][j, 0])
           }
           else if (j == 1){
               console.log('Nama Lengkap : ' + inputan[i][j, 1])
           }
           else if(j == 2){
               console.log('TTL          : ' + inputan[i][j, 2] + ' ' +inputan[i][j, 3])
           }
           else if(j == 3){
               console.log('Hobi         : ' + inputan[i][j, 4] +'\n')
           }
       }
   }
}

console.log(dataHandling([["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]]))
