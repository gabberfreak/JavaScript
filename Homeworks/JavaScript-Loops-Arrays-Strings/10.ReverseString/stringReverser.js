function reverseString(str) {
    var backway = str.split("").reverse().join("");
    return backway;
}

console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));