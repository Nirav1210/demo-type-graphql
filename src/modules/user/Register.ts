import { Arg, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from 'bcryptjs';
import { User } from '../../entity/User';
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class RegisterResolver {
    @Query(() => String)
    async hello() {
        return "hello world"
    }

    @Mutation(() => User)
    async register(@Arg("data") 
    { 
        firstName, 
        lastName, 
        email, 
        password 
    }: RegisterInput): Promise<User> {
        const hashedPwd = await bcrypt.hash(password, 12);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPwd
        }).save();

        return user;
    }
}