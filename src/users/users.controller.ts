import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    /*
        GET -> /users
        GET -> /users/:id
        POST -> /users
        PATCH -> /users/:id
        DELETE -> /users/:id
    */

    constructor(private readonly usersService: UsersService) {};

    // @Get() // GET -> /users
    // findAll() {
    //     return [];
    // }

    @Get('interns')  // GET -> /users/interns
    findAllInterns() {
        return [];
    }

    // @Post() // POST -> /users    // Below where we pass the object, we can also use DTO 
    // createUser(@Body() user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
    //     return this.usersService.createUser(user);
    // }

    @Post() // POST -> /users    // Using DTO
    createUser(@Body(ValidationPipe) user: CreateUserDto){
        return this.usersService.createUser(user);
    }

    @Get()  // GET -> /users?role=value
    findAll(@Query('role') role?: 'ADMIN' | 'ENGINEER' | 'INTERN'){
        return this.usersService.findAll(role);
    }


    // @Patch(':id') // PATCH -> /users/:id
    // updateOne(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: {name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
    //     return this.usersService.updateOne(id, userUpdate);
    // }

    @Patch(':id') // PATCH -> /users/:id    // Using DTO
    updateOne(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) userUpdate: UpdateUserDto){
        return this.usersService.updateOne(id, userUpdate);
    }

    @Get(':id')   // GET -> /users/:id
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.usersService.findOne(id); // Using unary plus operator which converts a string to a number or we can use Pipes to convert into diff data types
    }

    @Delete(':id')  // DELETE -> /users/:id
    deleteOne(@Param('id', ParseIntPipe) id: number){
        return this.usersService.deleteOne(id);
    }
}