import bcrypt from 'bcrypt';

import IGeneral from "./IGeneral";
import General from "./General";
import { Types } from './GeneralTypes';

class GeneralProxy implements IGeneral {
    private item: General;

    constructor(type: Types) {
        this.item = new General(type);
    }

    async getItems(query: any) {
        const items = await this.item.getItems(query);

        return items;
    }

    async getItem(id: string) {
        const response = await this.item.getItem(id);
        
        return response;
    }

    async createItem(data: any) {
        const response = await this.item.createItem(data);

        return response;
    }

    async deleteItem(id: string, sub: string) {
        
    }

    async updateItem(id: string, data: any) {
        
    }

}

export default GeneralProxy;