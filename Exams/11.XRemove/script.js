function solve(input) {
    var matrix = [];
    var resultMatrix = [];

    input.forEach(function(string) {
        matrix.push(string.toLowerCase().split(''));
        resultMatrix.push(string.split(''));
    });

    for (var row = 0; row < matrix.length - 2; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            var char = matrix[row][col];
            var isX = matrix[row][col + 2] == char &&
                matrix[row + 1][col + 1] == char &&
                matrix[row + 2][col] == char &&
                matrix[row + 2][col + 2] == char;
            if(isX) {
                resultMatrix[row][col] = " ";
                resultMatrix[row][col + 2] = " ";
                resultMatrix[row + 1][col + 1] = " ";
                resultMatrix[row + 2][col] = " ";
                resultMatrix[row + 2][col + 2] = " ";
            }
        }
    }
    var result = [];
    resultMatrix.forEach(function(str){
        result.push(str.join('').split(" ").join(''));
    });
    console.log(result.join("\n"));
}

solve([
    '^u^',
    'j^l^a',
    '^w^WoWl',
    'adw1w6',
    '(WdWoWgPoop)'
]);