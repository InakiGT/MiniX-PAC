
export interface CreatePost {
    authorId: String;
    content: String;
    img?: String;
    video?: String;
    hashtags?: [String];
}