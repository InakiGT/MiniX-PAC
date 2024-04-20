import VideoPost from "../posts/model/VideoPost";
import PostAbstractFactory from "./PostAbstractFactory";

class VideoPostFactory implements PostAbstractFactory {
    createPost(author: String, content: String, video: String): VideoPost {
        return new VideoPost(author, content, video);
    }
}

export default VideoPostFactory;