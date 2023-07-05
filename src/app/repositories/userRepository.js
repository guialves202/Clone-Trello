import Users from "../database/connection.js";

class UserRepository {

    findUser(body) {
        return;
    }

    create(body) {
        Users.create({
            email: body.email,
            password: body.password
        })
    }
}

export default new UserRepository;