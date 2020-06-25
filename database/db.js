const { Sequelize } = require('sequelize')

const sequelize = new Sequelize
(
    'test',
    'root',
    'root',
    {
      dialect: 'mysql',
      host: 'localhost',
      logging: false,
      define: {
        timestamps: false,
        // Генерация внешних ключей этого типа 'user_id' вместо 'userId'
        underscored: true
      },
    }
)

module.exports = sequelize
