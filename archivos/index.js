const { argv } = require('./yargs');
const funciones = require('./funciones');

console.log(argv);

let comando = argv._[0];

 switch(comando){

  case 'crear':
   funciones.crear(argv);
   break

   case 'mostrar':
    funciones.mostrar();
    break
   
   case 'mostrarEst':
    funciones.mostrarEst(argv.nombre);
    break

    case 'mostrarGanaMat':
    funciones.mostrarGanaMat();
    break

   default:
    console.log('digite una opcion correcta');  

 }

