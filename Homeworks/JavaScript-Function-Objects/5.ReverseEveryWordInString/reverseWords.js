function reverseWordsInString(str) {
    var temp = '';
    var len = str.length;
    var i = 0;
    var revArr = [];
    while (len > 0) {
        temp += str[str.length - 1 - i];
        i++;
        len--;
    }
    revArr.push(temp);
    var tempStr = revArr.toString();
    tempStr = tempStr.split(' ');
    var index = tempStr.length - 1;
    var tempLen = tempStr.length;
    var output = '';
    while (tempLen > 0) {
        output += tempStr[index] + ' ';
        tempLen--;
        index--;
    }
    return output
}

console.log(reverseWordsInString('Hello, how are you.'));
console.log(reverseWordsInString('Life is pretty good, isn’t it?'));