function funct1 (id,text) {
    var p = document.createElement('p');
    document.getElementById(id).appendChild(p);
    p.innerHTML = text;
}

function funct2(id,clas) {
        var div = document.createElement('div');
        div.className = clas;
        document.getElementById(id).appendChild(div);
}

function funct3(id,text,link) {
    var a = document.createElement('a');
    a.href = link;
    document.getElementById(id).appendChild(a);
    a.innerHTML = text;
}

var htmlGenerator = {
    createParagraph: funct1,
    createDiv: funct2,
    createLink: funct3
};
htmlGenerator.createParagraph('wrapper','Soft Uni');
htmlGenerator.createDiv('wrapper','section');
htmlGenerator.createLink('book','C# basics book',
'http://www.introprogramming.info');