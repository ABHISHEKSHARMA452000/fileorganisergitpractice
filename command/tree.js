let fs = require("fs");
let path = require("path");
function tree(dirpath){
    let paths = dirpath != undefined ? dirpath : process.cwd();
    let fileandfolder = fs.readdirSync(paths); // array ma names collected
    //console.log(fileandfolder)
    console.log(path.basename(paths));
    for(let i=0;i<fileandfolder.length;i++){
        console.log("\t " + fileandfolder[i]);
    }

    //console.log("tree command executed ",dirpath != undefined ? dirpath : process.cwd());
}
module.exports = {
    fntree: tree
}