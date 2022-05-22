import logger from "../config/logger.js"

export const register = (req, res) => {
    logger.info('Register accessed');
    res.json("Register accessed");
}