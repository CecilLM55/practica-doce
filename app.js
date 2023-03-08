const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

 // hacer referencia o mapeo a una carpeta virtual que se llama assets.
 app.use('/assets', express.static(__dirname + '/public'));
 app.set('view engine', 'ejs');
// ayuda a debugear lo que sucede cuando se accede a una ruta en particular
// sirve en caso de falla en el servidor, tener un registro de que sucedió.
app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
});



app.get('/', function (req, res) {
    res.render('index');
});


//ruta que recibe un parametro.
app.get('/person/:id', function(req, res) {
    res.render('person', {ID: req.params.id });
});



app.get('/api', function (req, res) {
    res.json ({firstname: 'John', lastname: 'Doe'});
});


app.listen(3000);






// en la practica 12 se usa un motor de vista, 
// donde ya no se necesita renderizar una cadena el contenido entre comillas en los send
// en lugar de dicho send se usa render.