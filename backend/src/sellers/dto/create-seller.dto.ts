import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateSellerDto {
  seller_id: string

  @IsString() @IsNotEmpty({ message: 'Name cannot be empty' })
    name: string

  @IsEmail(undefined, { message: 'Email is invalid!' })
    email: string

  @MinLength(6, { message: 'Password minimum length must be 6 characters!' })
    password: string
  
  creation_date: string
}
