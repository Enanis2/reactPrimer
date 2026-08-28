const { Router } = require("express");
const { crearUsuario } = require("../controller/userController.js")

const router = Router() //Creo una instancia de Router

router.post('/create', crearUsuario);

module.exports = router; //Exporto como variable porque no necesito separarla en otro lado