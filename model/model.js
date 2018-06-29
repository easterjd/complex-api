const data = require('./data')
const bodyVal = require('./body-val')

function getAll (limit) {
  return limit ? data.slice(0, limit) : data
}

function getOne (id) {
  let response
  const account = data.find(account => account.id === id)
  response = account ? {data: account} : {status: 400, message: "ID not found."}
  return response
}

function createOne (body) {
  let response = bodyVal.bodyValAccount(body)
  if (response[0].status) {
    return response
  } else {
    data.push(response)
  }
  return response
}

function updateOne (id, body) {
  let response
  const account = data.find(account => account.id === id)
  if (account) {
    response = bodyVal.bodyValAccount(body)
    if(response[0].status) {
      return response
    } else {
      account.name = response.name
      account.bankName = response.bankName
      account.description = response.description
    }
  } else {
    response = {status: 400, message: "Account ID not found."}
    return response
  }
  return account
}

function deleteOne (id) {
  let response
  const account = data.find(account => account.id === id)
  if (account) {
    const index = data.indexOf(account)
    response = {data: account}
    data.splice(index, 1)
  } else {
    response = {status: 400, message: "Account ID not found."}
  }
  return response
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}
