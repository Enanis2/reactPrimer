const { User } = require('../model/index.js');

const crearUsuario = async (req, res) => {
    try {
        const { nombre, apellido, userName, mail, edad, password, password2 } = req.body
        if ( !nombre || !apellido || !userName || !mail || !edad ) return res.status(400).json({ message: "Falta un dato"})
        if ( password != password2 ) return res.status(400).json({ message: "Las contraseñas no coinciden" })
        
        const nuevoUser = User.create({
            nombre: nombre,
            apellido: apellido,
            userName: userName,
            mail: mail,
            edad: edad,
            password: password
        })

        res.status(200).json(nuevoUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    crearUsuario
}