const fs = require('fs');
const myArgs = process.argv.slice(2);

if (myArgs[0] === undefined) {
  console.error('mi serve il file di input')
  process.exit();
}

const inputUrl = myArgs[0];

let outputUrl

if (myArgs[1] === undefined){
  outputUrl = './output.json'
} else {
  outputUrl = myArgs[1];
}

let data;

try {
  data = fs.readFileSync(inputUrl, 'utf8');
} catch (err) {
  console.log('file non trovato');
  process.exit();
}

let lines = data.split(/\r?\n/);

lines = lines.filter(line => line !== '');

const properties = lines.shift().split(',');

const objectsArray = [];

for (const line of lines) {
    const obj = {};
    const lineArray = line.split(',');
    for (let i = 0; i < properties.length; i++) {
      let property = properties[i];
      let value = lineArray[i];
  
      property = property.trim()
      value = value.trim()
  
      value = checkType(value)
      obj[property] = value;
    }
    objectsArray.push(obj)
  }

  console.log('array degli oggetti', objectsArray);

const jsonArray = JSON.stringify(objectsArray);

console.log('json array', jsonArray);



try {
  fs.writeFileSync(outputUrl, jsonArray);
} catch (err) {
  console.error('non riesco a scrivere il file');
  process.exit();
}



function checkType(value){

  const valueNonEUnNumero = isNaN(value);
  const valueEUnNumero = !valueNonEUnNumero;

  if (valueEUnNumero) {
    return parseFloat(value);
  } else if(value === 'true' || value === 'false'){
    return value === 'true' ? true : false;
  } else {
    return value;
  }

}