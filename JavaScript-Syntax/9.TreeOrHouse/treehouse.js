function treeHouseCompare(a , b) {
    var house = (a * a) + ((a * (a * 2 / 3) / 2));
    var tree = (b * (b / 3)) + Math.PI * (b * 2 / 3) * (b * 2 / 3);
    if(house > tree) {
        console.log("house" + "/" + house.toFixed(2));
    }else if (tree > house) {
        console.log("tree" + "/" + tree.toFixed(2));
    } else {
        console.log("They are equal.")
    }
}

treeHouseCompare(3, 2);
treeHouseCompare(3, 3);
treeHouseCompare(4, 5);