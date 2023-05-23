export class EmailExistsError extends Error {
  constructor () {
    super('Email already exists!')
  }
}