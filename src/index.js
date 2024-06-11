const express = require("express")
const morgan = require('morgan')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')

//const path = require('path'); // Importa el módulo 'path'

const app = express()


//Api 
const swaggerSpec = require('./swagger')
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))



// Define la ruta para servir el archivo OpenAPI o Swagger
//app.use('/docs', express.static(path.join(__dirname, './swagger.json')));


app.use('/sales', require('./routes/sales-routes'));
app.use('/shoes', require('./routes/shoes-routes'));
app.use('/users', require('./routes/user-routes'));

app.set("PORT", process.env.PORT || 3000);
app.listen(app.get('PORT'),()=>console.log(`Server Ready al port ${app.get('PORT')}`))

//Connect to database
require('./drivers/connect-db')

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Routes
app.use(require('./routes/shoes-routes'))
app.use(require('./routes/user-routes'))
app.use(require('./routes/sales-routes'))