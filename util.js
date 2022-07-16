let path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function returnFolderName(filename){
    let extname = path.extname(filename);
    extname = extname.slice(1);
    for(let key in types){
        let keyvalue = types[key];
        for(let i=0;i<keyvalue.length;i++){
            if(keyvalue[i] == extname){
                console.log(key);
                return;
            }
        }
    }
    console.log("others");
}

returnFolderName("resume.abc");
returnFolderName("helo.docx");

//organise
//         organisedfile
//               media
//               archives
//               documents
//               app
//               other
