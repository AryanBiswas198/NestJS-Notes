import { IsString, IsEmail, IsEnum, IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['ADMIN', 'ENGINEER', 'INTERN'], {
        message: 'Valid Role Required',
    })
    role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}