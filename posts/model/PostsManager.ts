import ImagePostFactory from "../../objectCreation/model/ImagePostFactory";
import PostAbstractFactory from "../../objectCreation/model/PostAbstractFactory";
import SimplePostFactory from "../../objectCreation/model/SimplePostFactory";
import VideoPostFactory from "../../objectCreation/model/VideoPostFactory";
import { CreatePost } from "./PostDtos";

class PostsManager {
    constructor(
        private postsFactory: PostAbstractFactory,
    ) {}

    public setFactory(factory: PostAbstractFactory) {
        this.postsFactory = factory;
    }

    public findAll() {}

    public findOne() {}

    public create(data: CreatePost) {
        // if ( data.img ) {
        //     this.setFactory(new ImagePostFactory());
        //     this.postsFactory.createPost()
        // } else if ( data.video ) {
        //     this.setFactory(new VideoPostFactory());
        //     this.postsFactory.createPost()
        // } else {
        //     this.setFactory(new SimplePostFactory());
        //     this.postsFactory.createPost()
        // }
    }

    public update() {}

    public delete() {}
}

export default PostsManager;