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

function bodyValTransaction () {

}

module.exports = {
  bodyValAccount,
  bodyValTransaction
}
