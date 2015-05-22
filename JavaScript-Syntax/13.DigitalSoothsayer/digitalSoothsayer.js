function soothsayer(numsArr, langsArr, citiesArr, carsArr) {
    var nums = numsArr[Math.floor(Math.random() * numsArr.length)];
    var langs = langsArr[Math.floor(Math.random() * langsArr.length)];
    var cities = citiesArr[Math.floor(Math.random() * citiesArr.length)];
    var cars = carsArr[Math.floor(Math.random() * carsArr.length)];
    console.log("You will work " + nums + " years on " + langs + ".You will live in " + cities + " and drive " + cars);
}

soothsayer([3, 5, 2, 7, 9],
            ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
                ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
                    ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']);
