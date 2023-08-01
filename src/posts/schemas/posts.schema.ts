import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
class Posts {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    body: string;

    @Prop({ required: true })
    slug: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts)
export type PostsDocument = HydratedDocument<Posts>
export default Posts