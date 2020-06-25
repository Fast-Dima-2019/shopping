const express = require('express')
const router = express.Router()
const Item = require('./../models/Item')

// CREATE /api/adds
router.post('/', (req, res) => {
  // console.log(req.body)
  Item.create({ name: req.body.name })
      .then(item => res.status(201).json(item))
})

// INDEX /api/items
router.get('/', (req, res) => {
  Item.findAll()
      .then(dev => res.json(dev))
      .catch(err => res.json(err.message))
})

// DELETE /api/items
router.delete('/:id', (req, res) => {
  Item.destroy({where: {id: req.params.id}})
      .then(result => res.json(result))
      .catch(err => res.json(err.message))
})

module.exports = router