import Sequelize from 'sequelize';

const sequelize = new Sequelize('trello', 'root', '123546', {
    host: 'localhost',
    dialect: 'mysql'
});


const Users = sequelize.define('users', {
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

// Criar a tabela Users
// Users.sync();

sequelize.authenticate()
.then(() => {
    console.log('Conectado com sucesso')
})
.catch((err) => {
    console.log('Falha ao conectar: ' + err)
})

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Users: Users
}

export default db;
