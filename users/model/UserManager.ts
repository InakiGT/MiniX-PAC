import IUser from "../../database/model/IUser";
import UserProxy from "../../database/model/UserProxy";

class UserManager {
    private proxy: IUser;
    
    constructor() {
        this.proxy = new UserProxy();
    }

    async getUsers() {
        return await this.proxy.getUsers();
    }

    async createUser(data: any) {
        return await this.proxy.createUser(data);
    }
}

export default UserManager;