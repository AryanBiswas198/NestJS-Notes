NEST JS NOTES


To Install command line interface:  nest -g @nestjs/cli —This might be wrong
				— npm i -g @nestjs/cli

To create a new project inside a directory: nest new projectname

To start the project: npm run start:dev

To add a Module / Controller / Service:  nest g module users
								     nest g controller users
								     nest g service users  -> service is also provider

To Create service, modules and controller of a specific route all at once, we use
nest g resource file_name ->.  REST_API   ->.  CRUD - Yes


— Controllers : Controllers in NestJS is like a Skeleton of the structure where we define the request and return whatever is to be returned .
We use decoraters to define a request and write a function with necessary params or body to be returned 


— Provider / Service : A place where we write the logic of the controller by accepting properties passed from the controller to the service file and return.

we then initialise a constructor inside our controller by importing service file and use it in our controller function by
this.ServiceName.functionName





— DTO Validation.  
	DTO Stands for Data Transfer Object in NestJS which are like interfaces for variables or objects but can also include different validations just like try catch or specific.

For declaring interfaces in typescript, in nestjs, we use DTO, in order to create, we create a file file_name.dto.ts file and include within it

	We use pipes like ParseIntPipe, ParseFloatPipe etc to pass a data of a specific type such that it converts into another data type and handles validation.

For validation of data passed either through body, we use decorators imported from ‘class-validator’ package into our dto file , 
	EG: IsString(), IsEmail(), IsNum(), IsNotEmpty() etc — we use as decorators above the specific field.
THEN: In our controller file, within @Body, We pass the ValidationPipe 
We then use throw new NotFoundException imported from @nestjs/common to throw an error.



— Now to integrate database into nestjs file, in the course, we use neon database with prisma, so download below packages
npm i prisma -D
npx prisma init

Then a new folder gets created named prisma, inside contains a schema.prisma file, where we insert our database db object from the prisma including the .env configurations.
 We create a model inside Model model_name {
	…..
}


we then create a database folder inside which we write code to connect to our database2

We then use the below commands to migrate the database into our neon db and prisma such that it creates a migration folder with sql commands as we update or create more models.

—To Create
npx prisma migrate dev --name init

— To Update
npx prisma generate

Then we use the create command again to update the database


To Create service, modules and controller of a specific route all at once, we use
nest g resource file_name ->.  REST_API   ->.  CRUD - Yes

If we want to use database into a specific REST API, simply inside the module of the file, add a :  imports: [DatabaseModule]




