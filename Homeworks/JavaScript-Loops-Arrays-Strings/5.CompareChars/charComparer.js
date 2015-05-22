function compareChars(arrOne, arrTwo) {
    var arrOneLength = arrOne.length,
        arrTwoLength = arrTwo.length,
        areArraysEqual = true;

    if (arrOneLength == arrTwoLength) {
        for (var i = 0; i < arrOneLength; i++) {
            if (arrOne[i] !== arrTwo[i]) {
                areArraysEqual = false;
                break;
            }
        }
    } else {
        areArraysEqual = false;
    }

    if (areArraysEqual == true) {
        return "Equal";
    }
    else {
        return "Not Equal";
    }

}

console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
console.log(compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']));
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));
