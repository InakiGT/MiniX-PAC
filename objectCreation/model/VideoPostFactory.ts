import VideoPost from "../../posts/model/VideoPost";
import PostAbstractFactory from "./PostAbstractFactory";

class VideoPostFactory implements PostAbstractFactory {
    createPost(data: any) {
        return new VideoPost(data);
    }
}

export default VideoPostFactory;