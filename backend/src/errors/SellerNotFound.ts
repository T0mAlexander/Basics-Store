export class SellerNotFoundError extends Error {
  constructor () {
    super('Seller not found in database!')
  }
}