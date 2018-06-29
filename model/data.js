const ID = require('short-id')
const faker = require('faker')
let randomName = faker.name.findName()
let randomAcc = faker.finance.accountName()
let randomTrans = faker.finance.transactionType()
let randomAmount = faker.finance.amount()

module.exports =
[{
  id: ID.generate(),
  name: faker.name.findName(),
  bankName: "Chase",
  description: faker.finance.accountName(),
  transactions: [{
      id: ID.generate(),
      title: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      pending: true
    },
    {
      id: ID.generate(),
      title: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      pending: false
    }
  ]
},
{
  id: ID.generate(),
  name: faker.name.findName(),
  bankName: 'Wells Fargo',
  description: faker.finance.accountName(),
  transactions: [{
      id: ID.generate(),
      title: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      pending: true
    }
  ]
},
{
  id: ID.generate(),
  name: faker.name.findName(),
  bankName: "Bank of America",
  description: faker.finance.accountName(),
  transactions: [{
      id: ID.generate(),
      title: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      pending: false
    },
    {
      id: ID.generate(),
      title: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      pending: true
    },
    {
      id: ID.generate(),
      title: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      pending: false
    }
  ]
}]
