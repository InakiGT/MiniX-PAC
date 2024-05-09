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

    async getUser(id: string) {
        return await this.proxy.getUser(id);
    }

    async deleteUser(id: string, sub: string) {
        return await this.proxy.deleteUser(id, sub);
    }

    async updateUser(id: string, data: any) {
        return await this.proxy.updateUser(id, data);
    }
}

export default UserManager;