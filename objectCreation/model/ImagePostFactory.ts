import ImagePost from "../../posts/model/ImagePost";
import PostAbstractFactory from "./PostAbstractFactory";

class ImagePostFactory implements PostAbstractFactory {
    createPost(data: any) {
        return new ImagePost(data);
    }
}

export default ImagePostFactory;