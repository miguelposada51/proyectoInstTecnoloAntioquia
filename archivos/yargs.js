const nombre = {
	demand: true,
	alias: 'n'
}

const matematicas = {
	demand: true,
	alias: 'm'
}

const ingles = {
	demand: true,
	alias: 'i'
}

const programacion = {
	demand: true,
	alias: 'p'
}

const creacion = {
	nombre,
	matematicas,
	ingles,
	programacion
}

const muestraEst = {
 nombre	
}

const argv = require('yargs')
             .command('crear','crear un estudiante', creacion)
             .command('mostrar','muestrar los estudiantes y sus notas')
             .command('mostrarEst','debes ingresar estudiante!!', muestraEst )
             .argv;

module.exports = {
	argv
}             