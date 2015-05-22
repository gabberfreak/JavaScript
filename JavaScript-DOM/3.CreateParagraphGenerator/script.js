function createParagraph(id,text) {
    var p = document.createElement('p');
    document.getElementById(id).appendChild(p);
    p.innerHTML = text;
}
createParagraph('wrapper','Some text');