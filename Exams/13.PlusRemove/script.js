function arr(n) {

    var matrix = [];
    var resultMatrix = [];

    n.forEach(function(string) {
        matrix.push(string.toLowerCase().split(''));
        resultMatrix.push(string.split(''));
    });
    for (var row = 0; row < matrix.length - 2; row++) {
        for (var col = 1; col < matrix[row].length; col++) {
            var curr = matrix[row][col];

            var left = matrix[row + 1][col - 1];
            var middle = matrix[row + 1][col];
            var right = matrix[row + 1][col + 1];
            var down = matrix[row + 2][col];

            if(left == curr && middle == curr && right == curr && down == curr) {
                resultMatrix[row][col] = " ";
                resultMatrix[row + 1][col - 1] = " ";
                resultMatrix[row + 1][col] = " ";
                resultMatrix[row + 1][col + 1] = " ";
                resultMatrix[row + 2][col] = " ";
            }
        }
    }
    var result = [];
    resultMatrix.forEach(function(string) {
        result.push(string.join('').split(" ").join(''));
    });
    for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

arr(['ab**l5',
    'bbb*555',
    'absh*5',
    'ttHHH',
    'ttth'
]);