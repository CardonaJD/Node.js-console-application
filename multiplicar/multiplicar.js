const fs = require('fs');
const { colors } = require('colors/safe');
let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`El valor introducido ${ base } no es un número`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${ i } = ${ base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${ base }.txt`, data, err => {
      if (err) {
        reject(err);
      } else {
        resolve(`tabla-${ base }.txt`);
      }
    });
  });
};

let listarTabla = (base, limite = 10) => {

  console.log('================================='.green);
  console.log(`===========tabla de ${ base }============`.red);
  console.log('================================='.yellow);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${ i } = ${ base * i}`);
  }

};

module.exports = {
  crearArchivo,
  listarTabla
};