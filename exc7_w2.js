/*play with asteriks */
console.log('barisan bintang')
var bintang = ''
for (var i = 0; i < 5; i++) {
    bintang += '*'
    if (i < 4) {
        bintang +='\n'
    }
}
console.log(bintang)

/*bintang nested 1*/
var bintang = ''
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        bintang += '*'
    }
    if (i < 4){
        bintang += '\n'
    }
}
console.log(bintang)

/*bintang nested 2*/

var bintang = ''
for (var i = 1; i <= 5; i++) {
    for (var j = 0; j < i; j++) {
        bintang += '*'
    }
    if (i < 5) {
        bintang += '\n'
    }
}
console.log(bintang)