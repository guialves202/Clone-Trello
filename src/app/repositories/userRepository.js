import sequelize from "../database/connection.js";

class UserRepository {

    create() {
        return 'Entrou no método create';
    }
}

export default new UserRepository;