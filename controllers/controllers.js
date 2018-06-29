const model = require('../model/model')

function getAll (req,res,next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({data})
}

function getOne (req,res,next) {
  const id = req.params.id
  const data = model.getOne(id)
  if (data[0]) {
    next({error: data})
  }
  res.status(200).json({data})
}

function createOne (req,res,next) {
  const body = req.body
  const data = model.createOne(body)
  if (data[0]) {
    next({error: data})
  }
  res.status(201).json({data})
}

function updateOne (req,res,next) {
  const body = req.body
  const id = req.params.id
  const data = model.updateOne(id, body)
  if (data[0]) {
    next({error: data})
  }
  res.status(200).json({data})
}

function deleteOne (req,res,next) {
  const id = req.params.id
  const data = model.deleteOne(id)
  if (data[0]) {
    next({error: data})
  }
  res.status(200).json({data})
}

function getAllTrans (req,res,next) {
  const id = req.params.id
  const data = model.getAllTrans(id)
  if (data.status) {
    next({error: data})
  }
  res.status(200).json({data})
}

function getOneTrans (req,res,next) {
  const id = req.params.id
  const idT = req.params.idT
  const data = model.getOneTrans(id, idT)
  if (data.status) {
    next({error: data})
  }
  res.status(200).json({data})
}

function createOneTrans (req,res,next) {
  const id = req.params.id
  const body = req.body
  const data = model.createOneTrans(id, body)
  if (data.status) {
    next({error: data})
  }
  res.status(201).json({data})
}

function updateOneTrans (req,res,next) {
  const id = req.params.id
  const idT = req.params.idT
  const body = req.body
  const data = model.updateOneTrans(id, idT, body)
  if (data.status) {
    next({error: data})
  }
  res.status(200).json({data})
}

function deleteOneTrans (req,res,next) {
  const id = req.params.id
  const idT = req.params.idT
  const data = model.deleteOneTrans(id, idT)
  if (data.status) {
    next({error: data})
  }
  res.status(200).json({data})
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  getAllTrans,
  getOneTrans,
  createOneTrans,
  updateOneTrans,
  deleteOneTrans
}
