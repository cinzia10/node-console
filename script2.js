const fs = require('fs');

let data;

try {
    data = fs.readFileSync('./studenti.csv', 'utf8');
  } catch (err) {
    console.error('file non trovato');
  }



  let students = data.split("\r\n"); 

  let info = students.splice(0,1);
  info = info[0].split(",")


  const array = [];

  for (let i = 0; i < students.length; i++) {
      const student = students[i];
      object = {}
      let studentArray = student.split(",");
      for (let j = 0; j < info.length; j++) {
          const information = info[j];
          object[information] = studentArray[j]  
      }
      array.push(object)
  }
console.log(array)


