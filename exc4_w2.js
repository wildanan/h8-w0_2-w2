var tanggal = 31
var bulan = 2
var tahun = 2017

switch (bulan) {
    case 1: {
        bulan = ' Januari ' 
        break}
    case 2: {
        bulan = ' Februari ' 
        break}
    case 3: {
        bulan = ' Maret '
        break}
    case 4: {
        bulan = ' April '
        break}
    case 5: {
        bulan = ' Mei '
        break}
    case 6: {
        bulan = ' Juni '
        break}
    case 7: {
        bulan = ' Juli ' 
        break}
    case 8: {
        bulan = ' Agustus ' 
        break}
    case 9: {
        bulan = ' September ' 
        break}
    case 10: {
        bulan = ' Oktober ' 
        break}
    case 11: {
        bulan = ' November ' 
        break}
    case 12: {
        bulan = ' Desember ' 
        break}
    default: {
        bulan = ' Input Bulan Tidak Tersedia '
        break}
}
if (tahun < 1900 || tahun > 2200 ){
    tahun = 'Input Tahun Tidak Tersedia'
}

if (tanggal < 0 || tanggal > 31) {
    tanggal = 'Input tanggal tidak tersedia'
}
console.log (tanggal + bulan + tahun)