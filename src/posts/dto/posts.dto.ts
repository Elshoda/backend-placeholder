import { IsNotEmpty,IsString } from "class-validator";

class PostsDto { 
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    body: string;

    slug: string;
}
export default PostsDto