import GeneralProxy from "../../database/model/GeneralProxy";
import { Types } from "../../database/model/GeneralTypes";
import IGeneral from "../../database/model/IGeneral";
import Like from "./Like";

class ReactionManager {
    private proxy: IGeneral;

    constructor() {
        this.proxy = new GeneralProxy(Types.REACTION);
    }

    async getReactions(query: any) {
        return await this.proxy.getItems(query);
    }

    async createReaction(data: any, sub: string) {
        const reaction = await Like.findOne(data);
        if ( reaction ) {
            return await this.proxy.deleteItem(data.postId, sub);
        }

        return await this.proxy.createItem(data);
    }
}

export default ReactionManager;