/* Toko X yang sedang melakukan SALE ingin menghitung jumlah profit
untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli,
barang yang ingin dibeli dan jumlah barang yang dibelinya).
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli
maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of
object dimana array tersebut berisi objek-objek barang dari toko X
tersebut yang berisikan info nama barang, siapa saja yang membeli,
sisa stock barang dan total pemasukan untuk barang tersebut */

function countProfit(shoppers) {
    if (shoppers.length < 1) {
        return shoppers
    }

    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    // you can only write your code here!
    var result = [
        { product: listBarang[0][0], shoppers: [], leftOver: 0, profit: 0, },
        { product: listBarang[1][0], shoppers: [], leftOver: 0, profit: 0, },
        { product: listBarang[2][0], shoppers: [], leftOver: 0, profit: 0, },
    ]
    var qty = 0
    for (var i = 0; i < shoppers.length; i++) {
        for (var j = 0; j < listBarang.length; j++) {
            if (shoppers[i].product === listBarang[j][0] && shoppers[i].amount <= listBarang[j][2]) {
                result[j].shoppers.push(shoppers[i].name)
                listBarang[j][2] -= shoppers[i].amount
                result[j].leftOver = listBarang[j][2]
                qty += shoppers[i].amount
                result[j].profit = listBarang[j][1] * qty
            } else {
                result[j].leftOver = listBarang[j][2]
            }
        }
    } return result
}

// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
},

{
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
},

{
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log('')
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
},

{
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
},

{
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
},

{
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
},

{
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}
]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log('')
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
//   // [ { product: 'Sepatu Stacattu',
//   //     shoppers: [],
//   //     leftOver: 10,
//   //     totalProfit: 0 },
//   //   { product: 'Baju Zoro',
//   //     shoppers: [],
//   //     leftOver: 2,
//   //     totalProfit: 0 },
//   //   { product: 'Sweater Uniklooh',
//   //     shoppers: [],
//   //     leftOver: 1,
//   //     totalProfit: 0 } ]
console.log('')
console.log(countProfit([])); //[]