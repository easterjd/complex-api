const express = require('express')
const router = express.Router()

router.use((req,res,next) => {
  next({status: 404, message: "Route not found"})
})

router.use((err,req,res,next) => {
  const status = err.status || err.error[0].status || 500
  res.status(status).json({err})
})

module.exports = router
