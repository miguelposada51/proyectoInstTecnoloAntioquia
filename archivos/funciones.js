const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
  listar();
  let est = {
  	nombre: estudiante.nombre,
  	matematicas: estudiante.matematicas,
  	ingles: estudiante.ingles,
  	programacion: estudiante.programacion
  };
  let duplicado = listaEstudiantes.find( nom => nom.nombre == estudiante.nombre)
  if (!duplicado) {
  listaEstudiantes.push(est);
  console.log(listaEstudiantes);	
  guardar();
  }else{
  	console.log('No se permite guardar nombre duplicado');
  }
}

const listar = () => {
 try {
  listaEstudiantes = require('./listado.json');
 } catch(error){
  listaEstudiantes = [];
 }	
}

const guardar = () => {
 let datos = JSON.stringify(listaEstudiantes);
 fs.writeFile('listado.json', datos , (err) => {
 	if (err) throw (err);
 	console.log('Archivo grabado con exito');
 })	
}

const mostrar = () => {
  listar()
  
  console.log('Notas de los Estudiantes');
  listaEstudiantes.forEach( estudiante => {
  	console.log(estudiante.nombre);
  	console.log( 'NOTAS ' )
  	console.log( ' Matematicas' + estudiante.matematicas)
  	console.log( ' ingles' + estudiante.ingles)
  	console.log( ' Programacion' + estudiante.programacion + '\n')
  });	
}

const mostrarEst = (nom) => {
  listar()
  
  console.log('se buscara el estudiante');
  
   let est = listaEstudiantes.find( buscar => buscar.nombre == nom)
  if (!est) {
   console.log('1.' + nom);
    console.log('no se encontgro el estudiante');
  }else{
  	console.log( '2.' + nom );
  	console.log( est.nombre );
  	console.log( 'NOTAS ' )
  	console.log( ' Matematicas' + est.matematicas)
  	console.log( ' ingles' + est.ingles)
  	console.log( ' Programacion' + est.programacion + '\n')

  }	
}

const mostrarGanaMat = () => {
  listar()
  
  console.log('se buscara los que ganaron matematicas');
  
   let gananMat = listaEstudiantes.filter( ganan => ganan.matematicas >= 3);
  if (gananMat.lengh == 0) {
   console.log('1. no hay: ' + gananMat);
    console.log('no se encontgro el estudiante');
  }else{
  	console.log('2. si hay: ' + gananMat);
  	gananMat.forEach( gananMat => {
  	console.log(gananMat.nombre);
  	console.log( 'NOTAS ' )
  	console.log( ' Matematicas' + gananMat.matematicas)
  	console.log( ' ingles' + gananMat.ingles)
  	console.log( ' Programacion' + gananMat.programacion + '\n')
  });

  }	
}

module.exports = {
 crear,
 mostrar,
 mostrarEst,
 mostrarGanaMat	
}