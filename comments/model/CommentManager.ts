import GeneralProxy from "../../database/model/GeneralProxy";
import { Types } from "../../database/model/GeneralTypes";
import IGeneral from "../../database/model/IGeneral";

class CommentManager {
    private proxy: IGeneral;

    constructor() {
        this.proxy = new GeneralProxy(Types.COMMENT);
    }

    async getComments(query: any) {
        return await this.proxy.getItems(query);
    }

    async createComment(data: any) {
        return await this.proxy.createItem(data);
    }
}

export default CommentManager;