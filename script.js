const fs = require('fs');

// try {
//   const data = fs.readFileSync('./libri.csv', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err.message);
// } finally {
//     console.log('Sono nel blocco finally')
// }

// function readCsv(){
//     try {
//         const data = fs.readFileSync('./libro.csv', 'utf8');
//         console.log(data);
//       } catch (err) {
//         if (err.code === N) {
//           throw err;
//         }
//       }
// }

// try {
//     readCsv();
// } catch (error) {
//     console.log('la function non funziona')
// }

let data;

try {
    data = fs.readFileSync('./libri.csv', 'utf8');
  } catch (err) {
    console.error('file non trovato');
  }




  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //// STEP 1 - SPEZZARE LA STRINGA NELL'ARRAY 'LINES' DI LINEE:
  //// LET LINES = [LINEA1, LINEA2, LINEA3, LINEA4];

  let lines = data.split("\r\n"); ///OPPURE .split(/\r?\n/);
  lines = lines.filter(l => l !== '');
  //// STEP 2 - CREARE UNA VARIABILE CHIAMATA 'PROPERTIES' CHE CONTIENE LE PAROLE DA CUI E' COMPOSTA LA PRIMA LINEA;
  //// CONST PROPERTIES = [TITLE, AUTHOR, PRICE, COPIES];
  //// LET LINES = [LINEA2, LINEA3, LINEA4];
  
  ///PRMO METODO
  const properties = lines.shift().split(',');

  ///SECONDO METODO
  // let properties = lines.splice(0,1);
  // properties = properties[0].split(',');

  
  //// STEP 3 - CREARE UN ARRAY VUOTO PER GLI OBJECT
  
  const objectArray = [];

  //// STEP 4 - FARE UN CICLO SU TUTTE LE LINEE ALL'INTERNO DI 'LINES':
  //// - CREARE UN OBJECT VUOTO
  //// - TRASFORMARE LA LINEA IN UN ARRAY DI PAROLE /// ES: ['ILIADE', 'OMERO', '15.00', '10']
  //// - FARE UN CICLO INTERNO PER OGNI PAROLA ALL'INTERNO DI 'PROPERTIES'
  //// - AGGIUNGERE ALL'OBJECT UNA PROPERTY CON IL NOME DELLA PROPRIETA', ASSOCIANDO IL VALORE CORRISPONDENTE DELLA LINEA
  //// - INSERIRE L'OBJECT ALL'INTERNO DELL'ARRAY VUOTO
  
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const object = {};
    const lineArray = line.split(',');
    for (let j = 0; j < properties.length; j++) {
      let property = properties[j];
      // let value = lineArray[j];
      // property = property.trim();
      // value = value.trim()
      object[property] = lineArray[j];
    }
    objectArray.push(object);
  }
  
  //// STEP 5 - FARE CONSOLE.LOG DELL'ARRAY
  
  console.log(objectArray);


  const jsonArray = JSON.stringify(objectArray);

  console.log(jsonArray);


  try {
    fs.writeFileSync("./output.json", jsonArray);
    } catch {
      console.error('file non trovato');
    }