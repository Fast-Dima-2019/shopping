const express = require('express')
const sequelize = require('./database/db')
const path = require('path')
const app = express()

// Middleware
// Чтобы иметь возможность заполнить req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/items', require('./routes/item.rout'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server http://127.0.0.1:${PORT}`)

  sequelize.sync({ force: false })
      // sequelize.authenticate()
      .then(() => console.log('Соединение c DB - установлено'))
      .catch(err => Console.error('Error...', err.message))
})
