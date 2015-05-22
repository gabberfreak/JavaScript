function arr(n) {

    var biggestFan = '';
    var biggestHater = '';

    var compareDate = new Date("05.25.1973");
    var before = new Date("01.01.1900");
    var after = new Date("01.01.2015");

    for (var i = 0; i < n.length; i++) {
        var current = n[i];
        var parts = current.split(".");
        var newDate = new Date(parts[2],parts[1] - 1,parts[0]);
        if(newDate >= compareDate && newDate < after) {
            if(biggestFan == '') {
                biggestFan = newDate;
            } else if(biggestFan < newDate) {
                biggestFan = newDate;
            }
        } else if(newDate <= compareDate && newDate > before) {
            if(biggestHater == '') {
                biggestHater = newDate;
            } else if(biggestHater > newDate) {
                biggestHater = newDate;
            }
        }
    }
    if((biggestFan == '') &&(biggestHater != '')){
        console.log("The biggest hater of ewoks was born on " + biggestHater.toDateString());
    } else if ((biggestHater == '') &&(biggestFan != '')){
        console.log("The biggest fan of ewoks was born on " + biggestFan.toDateString());
    } else if(biggestFan == '' && biggestHater == '') {
        console.log("No result");
    } else {
        console.log("The biggest fan of ewoks was born on " + biggestFan.toDateString());
        console.log("The biggest hater of ewoks was born on " + biggestHater.toDateString());
    }
}

arr(['22.02.1975',
    '11.04.1974',
    '22.02.1973'
]);