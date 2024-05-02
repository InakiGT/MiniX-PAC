import Post from "./Post";

class ImagePost implements Post {
    public id: String = '';

    constructor(
        public author: String,
        public content: String,
        public img: String,
    ) {}

    setAuthor(author: String): void {
        this.author = author;
    }

    setContent(content: String): void {
        this.content = content;
    }

    setImage(img: String): void {
        this.img = img;
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

    getImage(): String {
        return this.img;
    }

    getId(): String {
        return this.id;
    }
}

export default ImagePost;