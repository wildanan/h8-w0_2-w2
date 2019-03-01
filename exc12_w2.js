function konversiMenit(menit) {
    var jam = Math.floor(menit / 60)
    var menitOut = menit % 60
    var menitTampil = 0
    if (menitOut < 10) {
      menitTampil = '0' + menitOut 
    }else{
      menitTampil = menitOut
    }
    return jam + ':' + menitTampil
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00