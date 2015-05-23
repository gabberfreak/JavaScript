function solve(arr) {
    var text1 = arr[0];
    var text2 = arr[1];

    var text1Words = text1.match(/[a-zA-Z]+/g);
    var text2Sentence = text2.match(/([a-zA-Z\s]+[.?!]+)/g);

    var text2Dup = [];
    text2Sentence.forEach(function(string){
        text2Dup.push(string.toLowerCase());
    });

    var dublicateArray = [];
    text1Words.forEach(function(item){
        dublicateArray.push(item.toLowerCase());
    });
    dublicateArray.sort();
    var uniqueWords = [];
    var foundEquals = false;

    var currentSeq = 0;
    var word = '';

    for (var j = 0; j < dublicateArray.length; j++) {
        if((dublicateArray[j] === dublicateArray[j + 1]) && (foundEquals === false))
        {
            currentSeq++;
            if(currentSeq < 3) {
                word = dublicateArray[j];
            } else {
                uniqueWords.push(word);
                foundEquals = true;
            }
        } else {
            foundEquals = false;
            currentSeq = 1;
            word = '';
        }

    }

    var countSentence = 0;
    var repeated = 0;

    if(uniqueWords.length == 0) {
        console.log("No words");
    } else {
        for (var k = 0; k < text2Dup.length; k++) {
            var currSeq = text2Dup[k].trim();
            var seqArr = currSeq.split(" ");
            for (var words in uniqueWords) {
                //if(currSeq.indexOf(uniqueWords[words]) > -1) {
                //    repeated++;
                //}
                for (var p = 0; p < seqArr.length; p++) {
                    if(seqArr[p] == uniqueWords[words]) {
                        repeated++;
                    }
                }

            }
            if(repeated >= 2) {
                countSentence++;
                console.log(text2Sentence[k]);
                repeated = 0;
            }

        }
        if(countSentence == 0) {
            console.log("No sentences");
        }
    }
}

solve([
    "Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
    "The captain was walking and he was obvious. He did not now what was going to happen to you in the future.Was he curious? We do not know."
]);