let help = require("./command/help");
let organise = require("./command/organise");
let tree = require("./command/tree");

let input = process.argv.slice(2);
let command = input[0];
let dirpath = input[1];

switch(command){
    case "help" :
        help.fnhelp();
        break;
    case "organise":
        organise.fnorganise(dirpath);
        break;
    case "tree":
        tree.fntree(dirpath);
        break;
    default:
        console.log("wrong command written");
}

// if(command == "help"){
//     help.fnhelp();
// }else if(command == "organise"){
//     organise.fnorganise();
// }else if(command == "tree"){
//     tree.fntree();
// }