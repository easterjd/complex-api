const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.createOne)
router.put('/:id', ctrl.updateOne)
router.delete('/:id', ctrl.deleteOne)

router.get('/:id/transactions', ctrl.getAllTrans)
router.get('/:id/transactions/:idT', ctrl.getOneTrans)
router.post('/:id/transactions', ctrl.createOneTrans)
router.put('/:id/transactions/:idT', ctrl.updateOneTrans)
router.delete('/:id/transactions/:idT', ctrl.deleteOneTrans)

module.exports = router
