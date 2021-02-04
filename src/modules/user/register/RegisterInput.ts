import { Length, IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { IsEmailAlreadyExist } from './IsEmailAlreadyExist';

@InputType()
export class RegisterInput {
    @Length(1, 30)
    @Field()
    firstName: string;

    @Length(1, 30)
    @Field()
    lastName: string;

    @IsEmail()
    @Field()
    @IsEmailAlreadyExist({ message: "email already in use" })
    email: string;

    @Field()
    password: string;
}