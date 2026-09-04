const { User } = require('../model/index.js');
const bcrypt = require('bcrypt')
const saltos = 10

const crearUsuario = async (req, res) => {
    try {
        const { nombre, apellido, userName, mail, edad, password, password2 } = req.body
        if ( !nombre || !apellido || !userName || !mail || !edad ) return res.status(400).json({ message: "Falta un dato"})
        if ( password != password2 ) return res.status(400).json({ message: "Las contraseñas no coinciden" })
        
        hashedpassword = await bcrypt.hash(password, saltos)

        const nuevoUser = await User.create({
            nombre: nombre,
            apellido: apellido,
            userName: userName,
            mail: mail,
            edad: edad,
            password: hashedpassword
        })
        res.status(200).json(nuevoUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const buscarUsuario = async (req, res) => {
    try {
        const { userName, password } = req.body
        if (!userName) return res.status(400).json({message: "No hay id"})
            
        const user = await User.findOne({ where: { userName: userName }});
        if (!user) return res.status(400).json({message:'usuario inexistente'})

        const coinciden = await bcrypt.compare(password, user.password)
        if (!coinciden) return res.status(400).json({message: "No coinciden las passwords"})
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