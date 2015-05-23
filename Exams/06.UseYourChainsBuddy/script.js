function array(n) {
    var input = n[0];
    var extractString = [];
    for (var i = 0; i < input.length; i++) {
        var current = input[i];
        var nextElement = input[i + 1];
        if ((current == 'p') && (nextElement == '>')) {
            i +=2;
            var current2 = input[i];
            while(current2 != '<') {
                extractString.push(current2);
                i++;
                current2 = input[i];
            }
        }
    }
    var arr = extractString.join("");
    arr = arr.replace(/[^a-z0-9]/g,' ');
    arr = arr.replace(/\s{2,}/g, ' ');
    arr = arr.split('');

    var first = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
    var second = ['n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < first.length; k++) {
            for (var l = 0; l < second.length; l++) {
                if(arr[j] == second[l]) {
                    arr[j] = first[l];
                    j++;
                    k = 0;
                    l = 0;
                } else if(arr[j] == first[k]) {
                    arr[j] = second[k];
                    j++;
                    l = 0;
                    k = 0;
                }
            }
        }
    }
    console.log(arr.join(''));
}
array(['<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>']);
array(['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>']);