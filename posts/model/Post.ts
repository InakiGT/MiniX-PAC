
interface Post {
    author: String;
    content: String;

    setAuthor(author: String): void;
    setContent(content: String): void;
    getAuthor(): String;
    getContent(): String;
}

export default Post;