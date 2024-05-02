
interface Post {
    id: String;
    author: String;
    content: String;

    setAuthor(author: String): void;
    setContent(content: String): void;
    setId(id: String): void;
    getAuthor(): String;
    getContent(): String;
    getId(): String;
}

export default Post;