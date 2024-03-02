import User from './user.js'
import { generarjwt } from '../utils/jwt.js'
import { encrypt, checkPassword } from '../utils/validator.js'

export const register = async (req, res) => {
    try{
        const data = req.body; 
        console.log(data); 
        data.password = await encrypt(data.password)
        const user = new User(data)
        await user.save()
        return res.send({message: `Registered`});
    }catch(error){
        console.error(error)
        return res.status(500).send({message: 'Error register'})
    }
}

export const login = async (req, res) =>{
    try {
        const data = req.body
        const log = await User.findOne({ $or: [{ username: data.username }, { email: data.email }] })
        if (log || await checkPassword(data.password, log.password)){
            const loggedUser = {
                uid: log._id,
                username: log.username,
                name: log.name
            }
            const token = await generarjwt(loggedUser)
            return res.send({ message: `Welcome ${loggedUser.name}`, loggedUser, token })
        }
        if (!log) return res.status(404).send({ message: 'error' })
    } catch (error){
        console.error(error)
        return res.status(500).send({ message: 'Error user' })
    }

}