const model = require('../model/model')

function getAll (req,res,next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({data})
}

function getOne (req,res,next) {
  const id = req.params.id
  const data = model.getOne(id)
  if (data[0].status) {
    return next({error: data})
  }
  res.status(200).json({data})
}

function createOne (req,res,next) {
  const body = req.body
  const data = model.createOne(body)
  if (data[0].status) {
    return next({error: data})
  }
  res.status(201).json({data})
}

function updateOne (req,res,next) {
  const body = req.body
  const id = req.params.id
  const data = model.updateOne(id, body)
  if (data[0].status) {
    return next({error: data})
  }
  res.status(200).json({data})
}

function deleteOne (req,res,next) {
  let response
  const id = req.params.id
  const data = model.deleteOne(id)
  if (data[0].status) {
    return next({error: data})
  }
  res.status(200).json({data})
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}
