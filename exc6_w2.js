/* Looping while*/

console.log('==while==')

var i = 1
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i + '- I love coding')
    }
    i++
}

console.log('ascending ^ == descending v')

var i = 20
while (i > 0) {
    if (i % 2 === 0){
        console.log(i + '- I will become fullstack developer')
    }
    i--
}

/*Looping for */

console.log('==for==')

for (var i = 0; i < 20; i++) {
    console.log((i + 1) + '- I love coding')
}

console.log('ascending ^ == descending v')

for (var i = 20; i > 0; i--) {
    console.log(i + '- I will become fullstack developer')
}

/* ganjil genap */
console.log('ganjil genap')

for (var i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i + '==> ANGKA GANJIL')
    }else if (i % 2 === 0){
        console.log(i + ' == > ANGKA GENAP')
    }
}

/*counter 2*/
console.log('counter 2 dan kelipatan 3')

for (var i = 1; i <= 100; i+=2){
    if (i % 3 === 0) {
        console.log(i + ' ==> kelipatan 3')
    }else{
        console.log(i)
    }
}

/*counter 5*/
console.log('counter 5 dan kelipatan 6')
for (var i = 1; i <= 100; i+=5) {
    if (i % 6 === 0) {
        console.log(i + ' ==> kelipatan 6')
    }else{
        console.log(i)
    }
}

/*counter 9*/
console.log('counter 9 dan kelipatan 10')
for (var i = 1; i <= 100; i+=9) {
    if (i % 10 === 0) {
        console.log(i + ' ==> kelipatan 10')
    }else{
        console.log(i)
    }
}