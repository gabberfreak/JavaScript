function findMaxSeq(nums) {
    var currentSequence = 1,
        longestSequence = 1,
        maxSeqNum = nums[0];

    for (var i = 1; i < nums.length; i++) {
        if(nums[i-1] === nums[i]) {
            currentSequence++;
            if (currentSequence >= longestSequence) {
                longestSequence = currentSequence;
                maxSeqNum = nums[i];
            }
        }
        else {
            currentSequence = 1;
        }
    }

    var result = [];
    for (var j = 0; j < longestSequence; j++) {
        result.push(maxSeqNum);
    }

   console.log("[" + result.join(', ') + "]");

}

findMaxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSeq(['happy']);
findMaxSeq([2, 'qwe', 'qwe', 3, 3, '3']);