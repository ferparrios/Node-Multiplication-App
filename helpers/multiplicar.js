const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, final = 10) => {

  try {

    let salida, consola = '';

    for (let i = 0; i <= final; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.cyan} ${i} = ${base * i}\n`;

    }

    if (listar) {
      console.log('=================='.america)
      console.log(`Tabla del ${base}`)
      console.log('=================='.america)
      console.log(consola)
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `table-${base}.txt`;
  } catch (error) {
    throw err
  }

}

module.exports = {
  crearArchivo
}