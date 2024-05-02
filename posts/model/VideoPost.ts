import Post from "./Post";

class VideoPost implements Post {
    public id: String = '';

    constructor(
        public author: String,
        public content: String,
        public video: String,
    ) {}

    setAuthor(author: String): void {
        this.author = author;
    }

    setContent(content: String): void {
        this.content = content;
    }

    setVideo(video: String): void {
        this.video = video;
    }

    setId(id: String): void {
        this.id = id;
    }

    getAuthor(): String {
        return this.author;
    }

    getContent(): String {
        return this.content;
    }

    getVideo(): String {
        return this.video;
    }

    getId(): String {
        return this.id;
    }
}

export default VideoPost;