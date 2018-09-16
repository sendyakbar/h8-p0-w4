/* 
Implementasikan function sorting dan getTotal untuk mendapatkan angka
yang paling besar dan mengetahui berapa kali angka tersebut muncul di
dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting
dan getTotal). Dilarang mengubah isi dalam function
mostFrequentLargestNumbers! */

function sorting(arrNumber) {
  var sorted = 0
  for (var j = 1; j > sorted; j++) {
      sorted = j + 5
      for (var i = 0; i < arrNumber.length; i++) {
          if (arrNumber[i] > arrNumber[i + 1]) {
              var temp = arrNumber[i]
              arrNumber[i] = arrNumber[i + 1]
              arrNumber[i + 1] = temp
              sorted = 0
          }
      }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  var listSort = sorting(arrNumber)
  var terbesar = listSort[listSort.length - 1]
  var temp = 0
  for (var i = 0; i < listSort.length; i++) {
      if (terbesar == listSort[i]) {
          temp += 1
      }
  }
  if (temp == 0) {
      return ' '
  }
  else { return 'angka paling besar adalah ' + terbesar + ' dan jumlah kemunculanya sebanyak ' + temp + ' kali' }

}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''