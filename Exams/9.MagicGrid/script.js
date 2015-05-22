function solve(arr) {
    var message = arr[0];
    var magic = Number(arr[1]);

    var matrix = [];
    arr.forEach(function(string){
        matrix.push(string.split(" "));
    });

    var realRow1 = 0;
    var realCol1 = 0;

    var realRow2 = 0;
    var realCol2 = 0;

    var found = false;

    var sum = 0;
    var currRow = 0;

    for (var row = 2; row < matrix.length; row++) {
        currRow = row;
        if(found) {
            break;
        }
        for (var col = 0; col < matrix[row].length; col++) {
            if(found) {
                break;
            }
            var first = matrix[row][col];
            realRow1 = row - 2;
            realCol1 = col;
            for (var second = 0; second < matrix[row].length; second++) {
                var next = matrix[row][second];
                realRow2 = row - 2;
                realCol2 = second;
                if(Number(first) + Number(next) == magic) {
                    sum = realRow1 + realCol1 + realRow2 + realCol2;
                    found = true;
                    break;
                }
                if(second == matrix[row].length - 1) {
                    row++;
                    if(row == matrix.length) {
                        row = currRow;
                        break;
                    }
                    second = -1;
                }
            }
        }
    }
    //console.log(sum);

    var str = message.split("");
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var charCode = char.charCodeAt(0);
        if(i % 2 == 0) {
            charCode += sum;
            str[i] = String.fromCharCode(charCode);
        } else {
            charCode -= sum;
            str[i] = String.fromCharCode(charCode);
        }
    }
    var result = str.join("");
    console.log(result);
}

solve([
    'QqdvSpg',
    '400',
    '100 200 120',
    '120 300 310',
    '150 290 370'
]);