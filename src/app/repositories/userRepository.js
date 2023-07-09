import db from "../database/connection.js";

class UserRepository {

    async findUser(email) {
        const user = await db.Users.findOne({ where: { email: email}});
        return JSON.stringify(user);
    }

    create(user) {
        db.Users.create(user)
    }
}

export default new UserRepository;