import app from "../../app.js";
import UserRepository from "../repositories/userRepository.js";

class UserController {
    
    index(req, res) {
        const body = req.body;

        const content = UserRepository.findUser(body)

    }

    store(req, res) {
        const body = req.body;
        const content = UserRepository.create(body)
    }
}

export default new UserController;