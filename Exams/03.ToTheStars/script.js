function arr(n) {
    var firstStar = n[0].split(" ");
    var firstStarName = firstStar[0];
    var firstStarX = parseFloat(firstStar[1]);
    var firstStarY = parseFloat(firstStar[2]);

    var sec = n[1].split(" ");
    var secStarName = sec[0];
    var secStarX = parseFloat(sec[1]);
    var secStarY = parseFloat(sec[2]);

    var thirdStar = n[2].split(" ");
    var thirdStarName = thirdStar[0];
    var thirdStarX = parseFloat(thirdStar[1]);
    var thirdStarY = parseFloat(thirdStar[2]);

    var inCoords = n[3].split(" ");
    var inCoordsX = parseFloat(inCoords[0]);
    var inCoordsY = parseFloat(inCoords[1]);

    var move = parseInt(n[4]);
    var name = '';

    for (var i = 0; i <= move; i++) {
        name = 'space';
        if (inCoordsY >= firstStarY - 1 && inCoordsY <= firstStarY + 1) {
            if (inCoordsX >= firstStarX - 1 && inCoordsX <= firstStarX + 1) {
                name = firstStarName.toLowerCase();
            }
        } if (inCoordsY >= secStarY - 1 && inCoordsY <= secStarY + 1) {
            if (inCoordsX >= secStarX - 1 && inCoordsX <= secStarX + 1) {
                name = secStarName.toLowerCase();
            }
        }
        if (inCoordsY >= thirdStarY - 1 && inCoordsY <= thirdStarY + 1) {
            if (inCoordsX >= thirdStarX - 1 && inCoordsX <= thirdStarX + 1) {
                name = thirdStarName.toLowerCase();
            }
        }
        inCoordsY++;
        console.log(name);
    }
}

arr([
    'Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6'
]);