function showMe (box) {
    var chboxs = document.getElementsByName("faktura");
    var vis = "none";
    for(var i=0;i<chboxs.length;i++) {
        if(chboxs[i].checked){
            vis = "block";
            break;
        }
    }
    document.getElementById(box).style.display = vis;
}