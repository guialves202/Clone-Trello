import app from "../../app.js";
import UserRepository from "../repositories/userRepository.js";

class UserController {
    
    store(req, res) {
        const msg = UserRepository.create();
        res.send('Entrou no método store, ' + msg);
    }
}

export default new UserController;