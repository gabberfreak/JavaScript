function findMinMax(nums) {
    var min = nums[0];
    var max = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i];
        }
        if(nums[i] > max) {
            max = nums[i];
        }
    }
    console.log("Min -> " + min);
    console.log("Max -> " + max);
    console.log();
}
findMinMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinMax([2, 2, 2, 2, 2]);
findMinMax([500, 1, -23, 0, -300, 28, 35, 12]);