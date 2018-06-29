const ID = require('short-id')
const faker = require('faker')
let randomName = faker.name.findName()
let randomAcc = faker.finance.accountName()
let randomTrans = faker.finance.transactionType()
let randomAmount = faker.fiance.amount()

module.exports =
[{
  id: ID.generate(),
  name: randomName,
  bankName: "Chase",
  description: randomAcc,
  transactions: [{
      id: ID.generate(),
      title: randomTrans,
      amount: randomAmount,
      pending: true
    },
    {
      id: ID.generate(),
      title: randomTrans,
      amount: randomAmount,
      pending: false
    }
  ]
},
{
  id: ID.generate(),
  name: randomName,
  bankName: 'Wells Fargo',
  description: randomAcc,
  transactions: [{
      id: ID.generate(),
      title: randomTrans,
      amount: randomAmount,
      pending: true
    }
  ]
},
{
  id: ID.generate(),
  name: randomName,
  bankName: "Bank of America",
  description: randomAcc,
  transactions: [{
      id: ID.generate(),
      title: randomTrans,
      amount: randomAmount,
      pending: false
    },
    {
      id: ID.generate(),
      title: randomTrans,
      amount: randomAmount,
      pending: true
    },
    {
      id: ID.generate(),
      title: randomTrans,
      amount: randomAmount,
      pending: false
    }
  ]
}]
