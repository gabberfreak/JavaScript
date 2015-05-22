function solve(input) {
    var output = '<table border="1">\n' +
        '<thead>\n'+
        '<tr><th colspan="3">Blades</th></tr>\n' +
        '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n' +
        '</thead>\n' +
        '<tbody>\n';

    for (var i = 0; i < input.length; i++) {
        var number = parseInt(input[i]);
        if(number > 10) {
            var type;
            if(number > 40) {
                type = 'sword';
            } else {
                type = 'dagger';
            }

            var appIndex = number % 5;
            if(appIndex === 0) {
                appIndex = 5;
            }

            var app;
            switch(appIndex) {
                case 1:
                    app  = 'blade';
                    break;
                case 2:
                    app  = 'quite a blade';
                    break;
                case 3:
                    app  = 'pants-scraper';
                    break;
                case 4:
                    app  = 'frog-butcher';
                    break;
                case 5:
                    app  = '*rap-poker';
                    break;
                default:
                    break;
            }

            output += '<tr><td>' + number +'</td><td>' + type + '</td><td>' + app + '</td></tr>\n';
        }
    }

    output += '</tbody>\n' +
    '</table>';
    console.log(output);
}

solve([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);