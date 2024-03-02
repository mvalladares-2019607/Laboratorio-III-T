import jwt from 'jsonwebtoken'
const secretKey = '35T035UNC0D1G0'

export const generarjwt = async(payload)=>{
    try {
        return jwt.sign(payload, secretKey, {
            expiresIn: '1h', 
            /* algorithm: 'HS256' */
            algorithm: 'HS384'
        })
    } catch (error) {
        console.error(error)   
        return error
    }
}