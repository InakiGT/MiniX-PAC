import SimplePost from "../../posts/model/SimplePost";
import PostAbstractFactory from "./PostAbstractFactory";

class SimplePostFactory implements PostAbstractFactory {
    createPost(author: String, content: String): SimplePost {
        return new SimplePost(author, content);
    }
}

export default  SimplePostFactory;