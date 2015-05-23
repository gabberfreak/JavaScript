function findMaxIncrSeq(arr) {
    var currentSequence = 1,
        longestSequence = 1,
        indexOfLongest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            currentSequence++;
        } else {
            if (longestSequence < currentSequence) {
                longestSequence = currentSequence;
                indexOfLongest = i - currentSequence + 1;
            }
            currentSequence = 1;
        }
    }

    if (longestSequence < 2) {
        console.log('no');
    }
    else {
        var result = arr.slice(indexOfLongest, indexOfLongest + longestSequence);
        console.log('[' + result + ']');
    }
}
findMaxIncrSeq([3, 2, 3, 4, 2, 2, 4]);
findMaxIncrSeq([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxIncrSeq([3, 2, 1]);