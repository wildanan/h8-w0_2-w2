/*soal 1*/
console.log('==1==')

function shoutOut(str) {
    return str
}
console.log(shoutOut('Halo Function')) // Menampilkan "Halo Function!" di console

/*soal 2*/

console.log('==2==')

function calculateMultiply (num1, num2) {
    return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

/*soal 3*/

console.log('==3==')

function processSentence(name,age,address,hobby) {
    return 'Nama saya ' + name +', umur saya '+ age +' tahun, alamat saya di '+ address +', dan saya punya hobby yaitu '+ hobby + '!'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"