function arr(n) {
    var numbers = n[0].split(/[^\d]+/g);
    numbers = numbers.filter(function(n) {
        return n != "";
    });

    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        var curr = numbers[i];
        var numToHex = parseInt(curr).toString(16).toUpperCase();
        var splitNum = numToHex.split("");
        if(splitNum.length  == 1) {
            result.push("0x000" + splitNum);
        } else if(splitNum.length == 2) {
            result.push("0x00" + numToHex);
        } else if(splitNum.length == 3) {
            result.push("0x0" + numToHex);
        } else {
            result.push("0x" + numToHex);
        }
    }
    console.log(result.join("-"));
}

arr(['20']);