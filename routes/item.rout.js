const express = require('express')
const router = express.Router()
const Item = require('./../models/Item')
// const Address = require('../models/Address')

// CREATE /api/adds
router.post('/', (req, res) => {
  console.log(req.body)
  Item.create({ name: req.body.name })
      .then(itm => res.status(201).json(itm))
})

// INDEX /api/items
router.get('/', (req, res) => {
  Item.findAll()
      .then(dev => res.json(dev))
      .catch(err => res.json(err.message))
})

module.exports = router