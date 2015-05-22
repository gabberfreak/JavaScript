function solve(arr) {
    var startNum = parseInt(arr[0]);
    var endNum = parseInt(arr[1]);
    var output = '<table>\n' +
        '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';
    for (var i = startNum; i <= endNum; i++) {
        var num = i;
        var seq = num * num;
        var isFib = isFibonaci(num);
        output += '<tr><td>' + num +'</td><td>'+ seq + '</td><td>'+ isFib +'</td></tr>\n'
    }

    function isFibonaci(element) {
        var prev = 0;
        var curr = 1;
        while(prev <= element) {
            if(prev == element) {
                return "yes";
            }

            curr = prev + curr;
            prev = curr - prev;
        }
        return "no";
    }
    output += '</table>';
    console.log(output);
}

solve([5,10]);