import ImagePostFactory from "./ImagePostFactory";
import PostAbstractFactory from "./PostAbstractFactory";
import SimplePostFactory from "./SimplePostFactory";
import VideoPostFactory from "./VideoPostFactory";

class FactoriesManager {
    private simpleFactory: PostAbstractFactory;
    private imageFactory: PostAbstractFactory;
    private videoFactory: PostAbstractFactory;

    constructor() {
        this.simpleFactory = new SimplePostFactory();
        this.imageFactory = new ImagePostFactory();
        this.videoFactory = new VideoPostFactory();
    }

    createSimplePost(data: any) {
        return this.simpleFactory.createPost(data);
    }

    createImagePost(data: any) {
        return this.imageFactory.createPost(data);
    }

    createVideoPost(data: any) {
        return this.videoFactory.createPost(data);
    }
}

const factoriesManager = new FactoriesManager();

export default factoriesManager;