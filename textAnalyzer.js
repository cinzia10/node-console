/////// STEP 1 - IMPORTARE FS
/////// STEP 2 - LEGGERE GLI ARGOMENTI INSERITI DA CONSOLE
/////// STEP 3 - PRENDERE IL PRIMO ELEMENTO COME "INPUTURL" E IL SECONDO COME "OUTPUTURL" (NON OBBLIGATORIO)
/////// STEP 4 - LEGGERE IL CONTENUTO DEL FILE E LOGGARE IL NUMERO DI CARATTERI (SPAZI COMPRESI) E IL NUMERO DI CARATTERI (SPAZI ESCLUSI)
/////// STEP 5 - SE L'UTENTE HA INSERITO L'"OUTPUTURL", SCRIVERE UN NUOVO FILE CON IL TESTO DELL'ORIGINALE PIU' I DATI DELL'ANALISI
///////          SE L'UTENTE NON HA INSERITO L'"OUTPUTURL", SOVRASCRIVERE IL FILE ORIGINALE.
/////// ESEMPIO: (ORIGINALE)"VIVA IL CSS!" (COPIA)"VIVA IL CSS!" \ NUMERO DI CARATTERI (SPAZI INCLUSI): 12 \ NUMERO DI CARATTERI (SPAZI ESCLUSI): 10

const fs = require('fs');
const myArgs = process.argv.slice(2);


if (myArgs[0] === undefined) {
  console.error('mi serve il file di input')
  process.exit();
}

const inputUrl = myArgs[0];

let outputUrl

if (myArgs[1] === undefined){
  outputUrl = inputUrl;
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


const inputLenghtWithSpaces = data.length; 
// console.log(inputLenghtWithSpaces); 

const inputLenghtWithoutSpaces = data.replace(/\s+/g, '').length;
// console.log(inputLenghtWithoutSpaces);


const result = data + '\r\n' + '\r\n' + 'Numero caratteri (spazi compresi): ' + inputLenghtWithSpaces + '\r\n' + '\r\n' + 'Numero caratteri (spazi esclusi): ' + + inputLenghtWithoutSpaces;

try {
  fs.writeFileSync(outputUrl, result);
} catch (err) {
  console.error('non riesco a scrivere il file');
  process.exit();
}

