function arr(n) {

    var bill = n[0];
    var mood = n[1];
    switch (mood) {
        case 'happy':
            bill  = bill * 0.1;
            break;
        case 'married':
            bill = bill * 0.0005;
            break;
        case 'drunk':
            bill  = bill * 0.15;
            if(bill < 10) {
                var firstDigit = bill;
            } else if(bill < 100) {
                firstDigit = Math.floor(bill / 10);
                bill = Math.pow(bill,firstDigit);
            } else if(bill < 1000) {
                firstDigit = Math.floor(bill / 100);
                bill = Math.pow(bill,firstDigit);
            } else if(bill < 10000) {
                firstDigit = Math.floor(bill / 1000);
                bill = Math.pow(bill,firstDigit);
            } else if(bill < 100000) {
                firstDigit = Math.floor(bill / 10000);
                bill = Math.pow(bill,firstDigit);
            } else if(bill < 1000000) {
                firstDigit = Math.floor(bill / 100000);
                bill = Math.pow(bill,firstDigit);
            } else {
                firstDigit = Math.floor(bill / 1000000);
                bill = Math.pow(bill,firstDigit);
            }
            break;
        default:
            bill = bill * 0.05;
            break;

    }
    console.log(bill.toFixed(2));
}

arr([19841999.99,'drunk']);