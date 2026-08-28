const { Router } = require("express");
const { crearUsuario, buscarUsuario } = require("../controller/userController.js")

const router = Router() //Creo una instancia de Router

router.post('/create', crearUsuario);
router.post('/buscar', buscarUsuario);

module.exports = router; //Exporto como variable porque no necesito separarla en otro lado