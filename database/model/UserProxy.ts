import bcrypt from 'bcrypt';

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
        const user = await this.user.getUser(id);

        return user;
    }

    async createUser(data: any) {
        await this.user.createUser(data);

        const response = data;
        delete response.password;

        return response;
    }

    async deleteUser(id: string, sub: string) {
        await this.user.deleteUser(id, sub);
    }

    async updateUser(id: string, data: any) {
        await this.user.updateUser(id, data);
        
        const response = data;
        delete response.password;

        return response;
    }
}

export default UserProxy;