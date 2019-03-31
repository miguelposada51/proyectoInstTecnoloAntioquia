var express = require('express');
var app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers.js');

const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../partials');
app.use(bodyParser.urlencoded({extended: false}));
/* 
app.get('/', function (req, res) {
  res.send('<b>Hello World</b>')
})*/
app.use(express.static(directoriopublico));

hbs.registerPartials(directoriopartials);

app.set('view engine','hbs');

app.engine('hbs', require('hbs').__express);

app.get('/',(req, res) => { 
	res.render('index', {
	  estudiante: 'Luciana'	
	}); 
}); 

app.post('/calculos',(req, res) => { 

	console.log(req.query);
	res.render('calculos', {
	  estudiante: req.body.nombre,
	  nota1: parseInt(req.body.nota1),
	  nota2: parseInt(req.body.nota2),
	  nota3: parseInt(req.body.nota3)	
	}); 
}); 


app.get('*', (req,res) =>{
  res.render('error', {
    estudiante: 'Error'
  })
})

console.log(__dirname)
 
app.listen(3000, () => {
 console.log('escuchando en el puerto 3000');
});