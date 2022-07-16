function organise(dirpath){
    console.log("organise command executed",dirpath != undefined ? dirpath : process.cwd());
}
module.exports = {
    fnorganise: organise
}