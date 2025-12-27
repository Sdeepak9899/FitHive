import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const loginToken = async (userId) => {
    try {
        let token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
        return token;
    } catch (error) {

    }
} 




export const loginToken1 = async (email) => {
    try {
        let token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
        return token;
    } catch (error) {

    }
} 
