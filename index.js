const express = require ('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db')
// Routes

const productsRouters = require('./routes/productRoutes')


/* app.listen('4000', () => {
    console.log('Servidor corriendo');
}) */

connectDB();
dotenv.config()

const app = express();
app.use (express.json({ limit: '10kb' }));
//Consulta sobre producto: implica, que la consulta cuando sea sobre 
app.use('/api/v1/products', productsRouters)
const port = process.env.PORT || 4500; /* Si no existe esta variable process.env, por defecto mande 4500 */
app.listen(port, () => {
    console.log(`Esta corriendo en el puerto ${port}`)
})