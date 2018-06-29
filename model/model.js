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
  if (response[0]) {
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
    if(response[0]) {
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

function getAllTrans (id) {
  let response
  const account = data.find(account => account.id === id)
  response = account ? {data: account.transactions} : {status: 400, message: "ID not found."}
  return response
}

function getOneTrans (id, idT) {
  let response
  const account = data.find(account => account.id === id)
  if (account) {
    const transaction = account.transactions.find(trans => trans.id === idT)
    response = transaction ? {data: transaction} : {status: 400, message: "Transaction ID not found."}
  } else {
    response = {status: 400, message: "ID not found."}
  }
  return response
}

function createOneTrans (id, body) {
  let response
  const account = data.find(account => account.id === id)
  if (account) {
    response = bodyVal.bodyValTransaction(body)
    if (response[0]) {
      return response
    } else {
      account.transactions.push(response)
    }
    return response
  } else {
    response = {status: 400, message: "ID not found."}
  }
  return response
}

function updateOneTrans (id, idT, body) {
  let response
  const account = data.find(account => account.id === id)
  if (account) {
    const transaction = account.transactions.find(trans => trans.id === idT)
    if (transaction) {
      response = bodyVal.bodyValTransaction(body)
      if (response[0]) {
        return response
      } else {
        transaction.title = response.title
        transaction.amount = response.amount
        transaction.pending = response.pending
        return transaction
      }
    } else {
      response = {status: 400, message: "Transaction ID not found."}
      return response
    }
  } else {
    response = {status: 400, message: "ID not found."}
    return response
  }
}

function deleteOneTrans (id, idT) {
  let response
  const account = data.find(account => account.id === id)
  if (account) {
    const transaction = account.transactions.find(trans => trans.id === idT)
    if (transaction) {
      const index = account.transactions.indexOf(transaction)
      response = {data: transaction}
      account.transactions.splice(index, 1)
    } else {
      response = {status: 400, message: "Transaction ID not found."}
    }
  } else {
    response = {status: 400, message: "ID not found."}
  }
  return response
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
