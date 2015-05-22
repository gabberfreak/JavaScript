function checkemail(){
    var str=document.validation.emailcheck.value;
    var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (filter.test(str)) {
        var input = document.getElementById('email');
        var div = document.getElementById('result');
        div.innerHTML = div.innerHTML + input.value;
        div.style.background = 'lightgreen';
        return false;
    } else{
        input = document.getElementById('email');
        div = document.getElementById('result');
        div.innerHTML = div.innerHTML + input.value;
        div.style.background = 'red';
        return false;
    }
}
function checkbae(){
    if (document.layers||document.getElementById||document.all)
        return checkemail();
    else
        return true;
}