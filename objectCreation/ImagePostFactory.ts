import ImagePost from "../posts/model/ImagePost";
import PostAbstractFactory from "./PostAbstractFactory";

class PostImageFactory implements PostAbstractFactory {
    createPost(author: String, content: String, img: String): ImagePost {
        return new ImagePost(author, content, img);
    }
}

export default PostImageFactory;