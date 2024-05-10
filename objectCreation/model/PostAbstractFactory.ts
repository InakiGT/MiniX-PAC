import Post from "../../posts/model/Post";

interface PostAbstractFactory {
    createPost(data: any): any;
}

export default PostAbstractFactory;