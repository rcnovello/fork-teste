
//"use strict"
const express = require('express');
//const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser'); 
const app = express();
//const os = require('os');
//const dlcHelpers = require("./helpers");
//const vConsts = require("./consts");
//const fs = require('fs'); 

/*
if (!vConsts.funcCheckServer() == ''){
    console.log(vConsts.funcCheckServer());
    return;
};
*/

//const __serverPortHttps = 3001; 
//const __serverPortHttp = 3000;
const port = 3000;

//const __serverIp = 'comofazerinformatica.com.br';
//const __serverIp = 'localhost';
const hostname = 'localhost';

//const https = require('node:https');
//const http = require('http');
//const { Socket } = require('dgram');
//const userInfo = os.userInfo();

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.use(session({
  secret: 'ISNAMDYxMjkxOTJDZmk=',
  resave: false,
  saveUninitialized: true
}));
*/


app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Use path.join para construir o caminho correto

//** routes */
require('./routes/app')(app);

//var server = http.createServer(app);


app.listen(port, () => {
  console.log(`App(comofazerinformatica) sendo executado em: ${hostname}:${port}`);
});


/*
server.listen(__serverPortHttp);    
var server = http.createServer(app);

    server.on('listening', () => {

        console.log(`App(comofazerinformatica) sendo executado em: ${__serverIp}:${__serverPortHttp}`);        
    })   
    server.on('error', (error) => {
        console.log(`Server NOT running at: http://${__serverIp}:${__serverPortHttp}/${error}`);        
        dlcHelpers.writeLog(`Server NOT running at: http://${__serverIp}:${__serverPortHttp}/${error}`);                
    });*/
/*
server.listen(__serverPortHttps);    
var server = https.createServer(app);

    server.on('listening', () => {

        console.log(`App(comofazerinformatica) sendo executado em: ${__serverIp}:${__serverPortHttps}`);        
    })   
    server.on('error', (error) => {
        console.log(`Server NOT running at: https://${__serverIp}:${__serverPortHttps}/${error}`);        
        dlcHelpers.writeLog(`Server NOT running at: https://${__serverIp}:${__serverPortHttps}/${error}`);                
    });
  */
   // https.createServer(app).listen(8000); 
    
    