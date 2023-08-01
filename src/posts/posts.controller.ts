import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import PostsDto from './dto/posts.dto';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }
    
    @HttpCode(200)
    @Get()
    async getAllPosts() {
        return this.postsService.getAllPosts();
    }
    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    async createPosts(@Body() dto: PostsDto) {
        return this.postsService.createPosts(dto)
    }

    @HttpCode(200)
    @Get(":id")
    async getByPostsid(@Param("id") id:string) {
        return this.postsService.getByPostsId(id);
    }
}
