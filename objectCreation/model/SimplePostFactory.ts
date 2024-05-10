import SimplePost from "../../posts/model/SimplePost";
import PostAbstractFactory from "./PostAbstractFactory";

class SimplePostFactory implements PostAbstractFactory {
    createPost(data: any) {
        return new SimplePost(data);
    }
}

export default  SimplePostFactory;