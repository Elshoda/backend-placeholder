import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import PostsDto from './dto/posts.dto';
import Posts, { PostsDocument } from './schemas/posts.schema';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Posts.name) private postsModel: Model<PostsDocument>) { }

    async getAllPosts() {
        return this.postsModel.find({})
    }

    async createPosts(dto: PostsDto) {
        function slugify(text: string) {
            return text
                .toString()
                .trim()
                .toLocaleLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w\-]+/g, "")
                .replace(/\-\-+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, "");
        }
        return this.postsModel.create({
            ...dto,
            slug: slugify(dto.title),
            
        })
    }
    async getByPostsId(id: string) {
        return this.postsModel.findOne({ slug: id} || {id})
    }
}
