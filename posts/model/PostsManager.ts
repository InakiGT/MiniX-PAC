import GeneralProxy from "../../database/model/GeneralProxy";
import { Types } from "../../database/model/GeneralTypes";
import IGeneral from "../../database/model/IGeneral";
import Post from "./Post";

class PostsManager {
    private proxy: IGeneral;
    
    constructor() {
        this.proxy = new GeneralProxy(Types.POST);
    }

    async getPost(id: string) {
        return await this.proxy.getItem(id);
    }

    async getPosts(query: any) {
        return await this.proxy.getItems(query);
    }

    async createPost(data: any) {
        return await this.proxy.createItem(data);
    }

    async aggregate() {
        try {
            const data = await Post.aggregate([
                { $unwind: "$hashtags" },
                { $group: { _id: "$hashtags", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
                { $limit: 10 }
            ]);

            return data;
        } catch(err) {
            console.log(err);
            throw new Error(`Error attemping to aggregate: ${err}`);
        }
    }
}

export default PostsManager;