function array(n) {

    var currLine;
    var curr2;
    var entireRow;
    var pos = 0;
    for (var row = 0; row < n.length; row++) {
        currLine = n[row];
        var lastElement = n[n.length - 1];
        entireRow = row;
        if(currLine == lastElement) {
            var picture = currLine[pos];
            if(picture == '_') {
                console.log("Landed on the ground like a boss!");
                break;
            } else if(picture == '~') {
                console.log("Drowned in the water like a cat!");
                break;
            } else if(picture == '/' || picture == '\\' || picture == '|') {
                console.log("Got smacked on the rock like a dog!");
                break;
            }
        }
        for (var col = 0; col < currLine.length; col++) {
            curr2 = currLine[col];
            if(curr2 == 'o') {
                pos = col + 1;
                break;
            }
            if(curr2 == '>') {
                pos++;
            }
            if(curr2 == '<') {
                pos--;
            }
        }
    }
    console.log(entireRow + " " + pos);
}

array(
    ['--o----------------------',
      '>------------------------',
      '>------------------------',
      '>-----------------/\\-----',
      '-----------------/--\\----',
      '>---------/\\----/----\\---',
      '---------/--\\--/------\\--',
      '<-------/----\/--------\\-',
      '\\------/----------------\\',
      '-\\____/------------------'
]);