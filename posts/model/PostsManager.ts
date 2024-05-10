import GeneralProxy from "../../database/model/GeneralProxy";
import { Types } from "../../database/model/GeneralTypes";
import IGeneral from "../../database/model/IGeneral";

class PostsManager {
    private proxy: IGeneral;
    
    constructor() {
        this.proxy = new GeneralProxy(Types.POST);
    }

    async getPosts(query: any) {
        return await this.proxy.getItems(query);
    }

    async createPost(data: any) {
        return await this.proxy.createItem(data);
    }
}

export default PostsManager;