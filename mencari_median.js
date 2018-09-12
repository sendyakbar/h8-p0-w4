function cariMedian(arr) {
    // you can only write your code here!
    var dataGenap = arr.length
    var dataGanjil = arr.length -1 
    var tambah = 0
    if (arr.length % 2 === 0) {
        dataGenap = dataGenap/2
        tambah = arr[dataGenap-1] + arr[dataGenap]
        var hasilGenap = tambah/2
        return hasilGenap
    }
    else if (arr.length % 2 !== 0) {
        dataGanjil = dataGanjil/2
        var hasilGanjil = arr[dataGanjil]
        return hasilGanjil
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5