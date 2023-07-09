import UserRepository from "../repositories/userRepository.js";
import bcrypt from 'bcrypt'

class UserController {
    
    async index(req, res) {

        const user = JSON.parse(await UserRepository.findUser(req.body.email));
        if(user == null) {
            console.log('user not found')
            return res.status(400).send('Cannot find user');
        }

        try {
            if(await bcrypt.compare(req.body.password, user.password)) {
                console.log('Sucess');
            } else {
                console.log('Not allowed')
            }
        } catch {
            return res.status(500).send()
        }

    }

    async store(req, res) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const user = {
                email: req.body.email,
                password: hashedPassword
            }
            const content = UserRepository.create(user)
            res.sendStatus(201);
        } catch {
            res.status(500).send()
        }

       
    }
}

export default new UserController;