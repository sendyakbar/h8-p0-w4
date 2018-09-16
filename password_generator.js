/* 
Diberikan function changeVocals, reverseWord, setLowerUpperCase,
removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini
untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan
huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V,
E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan
reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi
kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam
string yang sudah kita manipulasi 

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase,
removeSpaces) diletakkan di passwordGenerator dan return password-nya
dari function ini juga */

function changeVocals(str) {
    //code di sini
    var arr = str.split('')
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a': { arr[i] = 'b'; break; }
            case 'i': { arr[i] = 'g'; break; }
            case 'u': { arr[i] = 'v'; break; }
            case 'e': { arr[i] = 'f'; break; }
            case 'o': { arr[i] = 'p'; break; }

            case 'A': { arr[i] = 'B'; break; }
            case 'I': { arr[i] = 'G'; break; }
            case 'U': { arr[i] = 'V'; break; }
            case 'O': { arr[i] = 'P'; break; }
            case 'E': { arr[i] = 'F'; break; }
        }
    }
    var result = arr.join('')
    return result
}

function reverseWord(str) {
    //code di sini
    var reverse = ''
    for (var i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i]
    } return reverse
}

function setLowerUpperCase(str) {
    //code di sini
    var result = []
    for (var i = 0; i < str.length; i++) {
        var upperCase = str[i].toUpperCase()
        if (str[i] === upperCase) {
            result.push(str[i].toLowerCase())
        }
        else {
            result.push(str[i].toUpperCase())
        }
    }return result.join('')
}

function removeSpaces(str) {
    //code di sini
    var arr = str.split('')
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            arr.splice(i, 1)
        }
    }var result = arr.join('')
    return result
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var result = changeVocals(name)
    result = reverseWord(result)
    result = setLowerUpperCase(result)
    result = removeSpaces(result)
    return result
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
