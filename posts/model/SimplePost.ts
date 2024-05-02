import Post from "./Post";

class SimplePost implements Post {
    public id: String = ''

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

    setId(id: String): void {
        this.id = id;
    }

    getAuthor(): String {
        return this.author;
    }

    getContent(): String {
        return this.content;
    }

    getId(): String {
        return this.id;
    }
}

export default SimplePost;