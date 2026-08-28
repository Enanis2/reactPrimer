const { sequelize } = require("./config/bd.js");
require('./model/index.js');
const express = require("express"); 
const usuariosRoutes = require('./routes/userRoutes.js');
const cors = require('cors')

const PORT = 3000

const server = express(); 
server.use(express.json()); 
server.use(cors()); 

server.get('/', (req, res) => {
    res.status(200).json({
        message: "El server funciona correctamente"
    });
});

server.use('/usuarios', usuariosRoutes); 

server.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log("Conexión exitosa a la Base de Datos");
        console.log("El servidor está ON en el puerto" + PORT);
    } catch (error) {
        console.error("Error al iniciar el servidor o DB:", error);
    }
})