const ID = require('short-id')

function bodyValAccount (body) {
  let errors = []
  const name = body.name
  const bankName = body.bankName
  const description = body.description
  const transactions = []

  if (name && typeof(name) === 'string' && name.length) {
    if (bankName && typeof(bankName) === 'string' && bankName.length) {
      if (description && typeof(description) === 'string' && description.length) {
        return {
          id: ID.generate(),
          name: name,
          bankName: bankName,
          description: description,
          transactions: []
        }
      } else {
        errors.push({status: 400, message: "You need a description of the account."})
      }
    } else {
      errors.push({status: 400, message: "You need a name of the bank."})
    }
  } else {
    errors.push({status: 400, message: "You need a name of the bank."})
  }
  return errors
}

function bodyValTransaction (body) {
  let errors = []
  const title = body.title
  const amount = body.amount
  const pending = body.pending

  if (title && typeof(title) === 'string' && title.length) {
    if (amount && typeof(amount) === 'string' && parseFloat(amount) > 0) {
      if (pending && typeof(JSON.parse(pending)) === 'boolean') {
        return {
          id: ID.generate(),
          title: title,
          amount: amount,
          pending: JSON.parse(pending)
        }
      } else {
        errors.push({status: 400, message: "You need a pending field with true/false."})
      }
    } else {
      errors.push({status: 400, message: "You need an numerical amount for your transaction."})
    }
  } else {
    errors.push({status: 400, message: "You need a title (type) of transaction (ex. withdrawal)"})
  }
  return errors
}

module.exports = {
  bodyValAccount,
  bodyValTransaction
}
