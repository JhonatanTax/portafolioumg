const path = require('path');
const express = require('express'); 
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express(); 
//routers
const indexRoutes = require('./index');
//base de datos
mongoose.connect('mongodb+srv://user_node_cafe:Ed9E1vYvSNjcmLBh@supercafe.vroge.mongodb.net/cafeDB?authSource=admin&replicaSet=atlas-ynfl3p-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')
.then( db => console.log('CONECTADO'))
.catch( err => console.log(err));

//settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//midlewires
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//routers
app.use('/', indexRoutes);
//rutas
app.use(express.static(__dirname+'/')) 


//rutas
app.get('/mipersona', function(req,res){
    res.sendFile(__dirname+'/about.html'); 
});

app.get('/proyecto1', function(req,res){
    res.sendFile(__dirname+'/portfolio-single.html');
});

app.get('/proyecto2', function(req,res){
    res.sedFile(__dirname+'/portfolio-single2.html');
});

//errores
app.get('*', function(req,res){
    res.send('404 | Page not found');
});

app.use((err, req, res, next) =>{ 
    console.error(err.stack); 
    res.status(500).send("algo salió mal"); 
    });
    

app.listen(app.get('port'), () =>{
    console.log(`server en puerto ${app.get('port')}`);
})
