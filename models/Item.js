const { Model, DataTypes } = require('sequelize')
const sequelize = require('./../database/db')

class Item extends Model {}

Item.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    autoIncrement: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, {
  sequelize,
  modelName: 'items'
})

module.exports = Item

