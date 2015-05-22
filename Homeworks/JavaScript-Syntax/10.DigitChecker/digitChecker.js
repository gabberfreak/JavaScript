function checkDigit(number) {
    number = parseInt(number / 100);
    console.log(number % 10 == 3);
}

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);