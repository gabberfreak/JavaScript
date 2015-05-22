function findLargestBySumOfDigits(nums) {
    var len = nums.length;
    var index = 0;
    var arr = [];
    var max = 0;
    var maxDigit = 0;
    var currentDigit = 0;
    while (len > 0) {
        var str = nums[index];
        str = str.toString();
        str = str.replace(/([\-])/g, "");
        str = str.split("");
        var sum = 0;
        for (var i = 0; i < str.length; i++) {
            sum += parseInt(str[i], 10);
            currentDigit = sum;
        }
        len--;
        index++;
        arr.push(sum);
        if (currentDigit >= maxDigit) {
            maxDigit = currentDigit;
            max = nums[i];
        }
    }
    if (nums.length < 1 || nums[i] % 1 !== 0) {
        return "undefined";
    }else {
        return max;
    }
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));