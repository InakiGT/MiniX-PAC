import Post from "../posts/model/Post";

interface PostAbstractFactory {
    createPost(
        author: String, 
        content: String, 
        image?: String, 
        video?: String
    ): Post;
}

export default PostAbstractFactory;