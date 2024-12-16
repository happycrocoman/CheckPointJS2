function reverseString(str) {
    let x = "";
    for (let i = str.length - 1; i >= 0; i--) {
        x += str[i];
    }
    return x;
}
console.log(reverseString("Karim HOUDROUGE"))
console.log(reverseString("otto"))

function countCharacters(str) {
    let x = 0;
    for(let i=0; i<str.length; i++) {
        x = x+1;
    }
    return x;
}
console.log(countCharacters("Karim HOUDROUGE"))
console.log(countCharacters("otto"))



function firstMajuscul(str) {
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i]= str[i].split('')
        str[i][0]= str[i][0].toUpperCase()
        str[i]= str[i].join('')
    }
    str = str.join(' ');
   return str;
}

let tab = "sidy est mon coach";
console.log(firstMajuscul(tab));



function findMaxMin(arr) {
    if (arr.length === 0) {
        throw new Error("entrez minimum 2 nombres !!");
    }
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [max, min ];
}

let numbers = [10, 5, -25, 42];
console.log(findMaxMin(numbers))


function sum(arr) {
    if (arr.length === 0) {
        throw new Error("Entrez au moins 1 nombre !");
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [10, 5, -25, 42];
console.log(sum(numbers));

function sum(arr) {
    if (arr.length === 0) {
        throw new Error("Entrez au moins 1 nombre !");
    }
    // Utilisation de reduce pour calculer la somme
    return arr.reduce((somme, i) => somme + i, 0);
}

let numbers = [10, 5, -25, 42];
console.log(sum(numbers))



function filterArray(arr) {
    impair = arr.filter(element => element % 2 !== 0); 
    pair = arr.filter(element => element % 2 === 0); 
return {impair, pair}
}
console.log(filterArray([1, 2, 3, 4, 5]))


function factoriel(n) {
    let x = 1;
    for (let i = 1; i <= n; i++) {
        x *= i;
    }
    return x;
}
console.log(factoriel(20))


function Prime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
console.log(Prime(111))


function Fibonacci(n){
    let arr = [0, 1]
    let x;
    for (i=2; i<n; i++){
        x = arr[i-1] + arr[i-2]
        arr.push(x)
    }
    return arr
}
    console.log (Fibonacci (10))