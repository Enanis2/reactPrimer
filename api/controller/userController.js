const { User } = require('../model/index.js');

const crearUsuario = async (req, res) => {
    try {
        const { nombre, apellido, userName, mail, edad, password, password2 } = req.body
        if ( !nombre || !apellido || !userName || !mail || !edad ) return res.status(400).json({ message: "Falta un dato"})
        if ( password != password2 ) return res.status(400).json({ message: "Las contraseñas no coinciden" })
        
        const nuevoUser = await User.create({
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

const buscarUsuario = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) return res.status(400).json({message: "No hay id"})

        const user = await User.findByPk(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log({message: error.message})
    }
}
 
module.exports = {
    crearUsuario,
    buscarUsuario
}