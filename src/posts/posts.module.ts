import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {MongooseModule} from '@nestjs/mongoose'
import Posts, { PostsSchema } from './schemas/posts.schema';

const MongooseForFeature = MongooseModule.forFeature([{ name: Posts.name, schema: PostsSchema }])
@Module({
  imports:[MongooseForFeature],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
