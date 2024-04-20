import Post from "./Post";

class SimplePost implements Post {
    constructor(
        public author: String,
        public content: String,
    ) {}

    setAuthor(author: String): void {
        this.author = author;
    }

    setContent(content: String): void {
        this.content = content;
    }

    getAuthor(): String {
        return this.author;
    }

    getContent(): String {
        return this.content;
    }
}

export default SimplePost;