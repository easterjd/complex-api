# Bank API (Complex API Project)

This API allows you to access, create, modify, and delete bank account information and nested transaction information within each account!

## Setup

1. Fork and clone this repository
1. Run `npm install`
1. Run the server in development mode with `npm run dev`

## Routes

1. GET /accounts -> returns all stored accounts as an array of objects
1. GET /accounts/:id -> returns a single account resource
1. POST /accounts -> creates a new account resource; body must contain these fields:
  {
    name: "Barbra Bush",
    bankName: "Chase",
    description: "Savings Account",
  }
1. PUT /accounts/:id -> updates an existing account resource (must contain above fields as well)
1. DELETE /accounts/:id -> deletes an account resource
1. GET /accounts/:id/transactions -> returns all stored transactions within a specified account as an array of objects
1. GET /accounts/:id/transactions/:idT -> returns a single transaction resource from a specified account
1. POST /accounts/:id/transactions -> creates a new transaction resource within an account; body must contain these fields:
  {
    title: "deposit",
    amount: "100.00",
    pending: "true"
  }
1. PUT /accounts/:id/transactions/:idT -> updates an existing transaction resource within an account (must contain above fields as well)
1. DELETE /accounts/:id/transactions/:idT -> deletes a transaction resource from an account
