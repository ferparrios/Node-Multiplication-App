const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors');
const argv = require('./config/yargs');

console.clear()

// console.log(argv);

// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// const base = 8;

crearArchivo(argv.b, argv.l, argv.f)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err))
