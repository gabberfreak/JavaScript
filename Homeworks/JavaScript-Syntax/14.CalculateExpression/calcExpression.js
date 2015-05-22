function expression() {
    var calculation = eval(document.getElementById('input').value);
    document.getElementById('result').innerHTML = calculation;
}