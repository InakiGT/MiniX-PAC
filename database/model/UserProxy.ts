import IUser from "./IUser";
import User from "./User";

class UserProxy implements IUser {
    private user: User;

    constructor() {
        this.user = new User();
    }

    async getUsers() {
        const users = await this.user.getUsers();

        return users;
    }

    async getUser(id: string) {
        
    }

    async createUser(data: any) {
        await this.user.createUser(data);

        const response = data;
        delete response.password;

        return response;
    }
}

export default UserProxy;