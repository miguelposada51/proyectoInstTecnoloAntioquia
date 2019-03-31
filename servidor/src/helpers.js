const hbs = require('hbs');

hbs.registerHelper('obtenerPromedio', (nota1,nota2,nota3) => {
 return (nota1 + nota2 + nota3)/3
});

hbs.registerHelper('listar', (nota1,nota2,nota3) => {
listaEstudiantes = require('./listado.json');
	 let texto = ' Lista de Estudiantes ' + '<br><br>';
     texto = texto + '<table>' + '<theader>';
     texto = texto + '<th>Nombre</th>' + '<th>Matematicas</th>' + '<th>Ingles</th>' + '<th>Programacion</th>';
	 listaEstudiantes.forEach( estudiante => {
	  texto = texto +
	        '<tr><td>' + estudiante.nombre + '</td>' +
	        '<td>' + estudiante.matematicas + '</td>' +
	        '<td>' + estudiante.ingles+ '</td>' +
	        '<td>' + estudiante.programacion + '</td></tr>'
	 })
	 texto = texto + '</table>'
	  return texto;
});