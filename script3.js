
const fs = require('fs');

const myArgs = process.argv.slice(2);

if (myArgs[0] === undefined){
    console.log("mi serve il file di input");
    process.exit();
}

const inputUrl = myArgs[0];

let outputUrl

if (myArgs[1] === undefined){
    outputUrl = './output.json';
} else {
    outputUrl = myArgs[1];
}



checkType(value){
    if (! isNaN(value)) {
        return parseFloat(value);
    } else if (value==="true"||value==="false") {
        return value==="true"?true:false;
    } else {
        return value;
    }
};