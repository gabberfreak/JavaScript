function solve(arr) {
    var gold = 0;
    var silver = 0;
    var diamonds = 0;
    var inputLine;
    for (var i = 0; i < arr.length; i++) {
        inputLine = arr[i];
        var strings = inputLine.split(/mine\s*.*?\s*-\s*([a-zA-Z]+)\s*:\s*([0-9]+)/g);
        if(strings.length < 3) {
            continue;
        } else {
            var type = strings[1].toLowerCase();
            var quantity = Number(strings[2]);
            if(type == 'gold') {
                gold += quantity;
            } else if(type == 'silver') {
                silver += quantity;
            } else if(type == 'diamonds') {
                diamonds += quantity;
            }
        }
    }
    console.log("*Silver: " + silver);
    console.log("*Gold: " + gold);
    console.log("*Diamonds: " + diamonds);
}

//solve([
//    'mine bobovDol - gold: 10',
//    'mine medenRudnik - silver: 22',
//    'mine chernoMore - shrimps : 24',
//    'gold: 50'
//]);

solve([
    'mine bobovDol - gold: 10',
    'mine - diamonds: 5',
    'mine colas - wood: 10',
    'mine myMine - silver: 14',
    'mine silver:14 - silver: 14'
]);
