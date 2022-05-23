import logger from "../config/logger.js"
import { User } from "../shared/loader.js";

export const register = async (req, res) => {
    try {
        logger.info('Register accessed');
        console.log(req.body);

        const userData = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            phone_number: req.body.phone_number, 
        }
    
        const user = await User.create(userData);
    
        res.json(user);
    } catch (error) {
        console.log(error);
        logger.error(error);
        res.json(error);
    }
}