// Buatlah sebuah fungsi bernama processSentence(), 
// yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut:
//  "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
function processSentence(){
    var name = "Gian Petricia Aurora";
    var age = 24;
    var address = "Surau Karing Jorong V Sungai Jariang Kabupatan Agam";
    var hobby = "Gaming PUBG";

    var fullSentence = 'Nama saya ' + name + ', Umur ' + age + ' Tahun ' 
    + ', Alamat saya di ' + address + ' dan saya punya hobby yaitu ' + hobby;  

    return(fullSentence)
} console.log(processSentence()); 