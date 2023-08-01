import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';


const MongooseForRoot = MongooseModule.forRoot(
  'mongodb+srv://amirxon:Pgg5nm3o6YI0Ibsf@cluster0.s7n98c1.mongodb.net/?retryWrites=true&w=majority'
)
@Module({
  imports: [PostsModule, MongooseForRoot],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

//Pgg5nm3o6YI0Ibsf
