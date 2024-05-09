import bcrypt from 'bcrypt';

import IGeneral from "./IGeneral";
import General from "./General";
import { Types } from './GeneralTypes';

class GeneralProxy implements IGeneral {
    private item: General;

    constructor(type: Types) {
        this.item = new General(type);
    }

    async getItems() {

    }

    async getItem(id: string) {
        
    }

    async createItem(data: any) {
        
    }

    async deleteItem(id: string, sub: string) {
        
    }

    async updateItem(id: string, data: any) {
        
    }

}

export default GeneralProxy;