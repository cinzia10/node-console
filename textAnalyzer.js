/////// STEP 1 - IMPORTARE FS
/////// STEP 2 - LEGGERE GLI ARGOMENTI INSERITI DA CONSOLE
/////// STEP 3 - PRENDERE IL PRIMO ELEMENTO COME "INPUTURL", SECONDO COME "OUTPUTURL" (OBBLIGATORIO) E IL TERZO  COME PAROLA DA CERCARE (NON OBBLIGATORIA)
/////// STEP 4 - LEGGERE IL CONTENUTO DEL FILE E LOGGARE: 
///////           IL NUMERO DI CARATTERI (SPAZI COMPRESI), IL NUMERO DI CARATTERI (SPAZI ESCLUSI)
///////           IL NUMERO DI CARATTERI (SPAZI ESCLUSI)
///////           IL NUMERO DELLE PAROLE
///////           IL NUMERO DELLE OCCORRENZE DELLA PAROLA DA CERCARE (NON OBBLIGATORIA)
/////// STEP 5 - SE L'UTENTE HA INSERITO L'"OUTPUTURL", SCRIVERE UN NUOVO FILE CON IL TESTO DELL'ORIGINALE PIU' I DATI DELL'ANALISI
///////          SE L'UTENTE NON HA INSERITO L'"OUTPUTURL", SOVRASCRIVERE IL FILE ORIGINALE.
/////// ESEMPIO: (ORIGINALE)"VIVA IL CSS!" (COPIA)"VIVA IL CSS!" \ NUMERO DI CARATTERI (SPAZI INCLUSI): 12 \ NUMERO DI CARATTERI (SPAZI ESCLUSI): 10
/////// STEP 6 - 



const fs = require('fs');
const myArgs = process.argv.slice(2);


if (myArgs[0] === undefined) {
  console.error('mi serve il file di input')
  process.exit();
}

const inputUrl = myArgs[0];

let outputUrl

if (myArgs[1] === undefined){
  console.log('mi serve il file di output')
} else {
  outputUrl = myArgs[1];
}

let searchWord;

if (myArgs[2] !== undefined){
    searchWord = myArgs[2]
}

let data;

try {
  data = fs.readFileSync(inputUrl, 'utf8');
} catch (err) {
  console.log('file non trovato');
  process.exit();
}


const inputLenghtWithSpaces = data.length; 

const inputLenghtWithoutSpaces = data.replace(/\s+/g, '').length;

const arrayWords = data.replace(/[^a-zA-Z ]/g,"").split(/\s+/g)

const countWords = arrayWords.length;

const wordOccurrencies = arrayWords.toString().match(/sea/g).lenght

const result = data + '\r\n' + '\r\n' + 
              'Numero caratteri (spazi compresi): ' + inputLenghtWithSpaces + '\r\n' + '\r\n' + 
              'Numero caratteri (spazi esclusi): ' + inputLenghtWithoutSpaces + '\r\n' + '\r\n' +
              'Numero parole: '+ countWords + '\r\n' + '\r\n' +
              'Occorrenze parola cercata: ' + ;

try {
  fs.writeFileSync(outputUrl, result);
} catch (err) {
  console.error('non riesco a scrivere il file');
  process.exit();
}

