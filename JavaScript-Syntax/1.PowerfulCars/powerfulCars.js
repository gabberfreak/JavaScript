function convertKWtoHP(number) {
    var CarHP = number / 0.745699872;
    return CarHP.toFixed(2);
}
console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));