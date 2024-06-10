const express = require('express');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
//const swaggerUi = require('swagger-ui-express');




const swaggerDefinition = {
  openapi : '3.0.0',
  info : {
    title: 'Users API',
    version: '1.0.0',
    description: 'API para gestionar los usuarios de la tienda',
    contact: {
      name: 'Yennyfer Lesmes, Jhonatan Guarin,Andres Sanabria ',
      url: 'https://github.com/JhonatanGuarin/ApiTeinda',
      email: 'tatis26.lesmes@gmail.com',

      
    }
   },

   servers: [
    {
      url: 'http://localhost:3000',
    },
    {
      url: 'https://apiteinda.onrender.com',
      description: 'Servidor de producción'
    },
  ],

  
  }



  const options = {
  swaggerDefinition,
  apis:['./src/routes/user-routes.js'],
  }






const specs = swaggerJsdoc(options);
console.log(JSON.stringify(specs, null, 2));
module.exports = specs;