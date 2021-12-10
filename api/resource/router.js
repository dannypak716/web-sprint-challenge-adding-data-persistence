const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.send('GET FOR RESOURCES WORKING!!!')
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.send('POST FOR RESOURCES WORKING!!!')
    } catch (err) {
        next(err)
    }
})

module.exports = router