const express = require('express');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
//const swaggerUi = require('swagger-ui-express');




const swaggerDefinition = {
  openapi : '3.0.0',
  info : {
    title: 'Tienda API',
    version: '1.0.0',
    description: 'API para gestionar productos: zapatos, Usuarios, y ventas de una tienda de zapatos',
    contact: {
      name: 'Yennyfer Lesmes, Jhonatan Guarin, Andres Sanabria',
      url: 'https://github.com/tatianalesmes',
      email: 'tatis26lesmes@gmail.com',
    }
   },

   servers: [
    {
      url: 'https://apiteinda.onrender.com',
      description: 'Servidor de producción'
    },
  ],

  
  }



  const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // Rutas a todos los archivos de rutas de las Apis
  
  }






const specs = swaggerJsdoc(options);
console.log(JSON.stringify(specs, null, 2));
module.exports = specs;


