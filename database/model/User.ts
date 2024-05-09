import bcrypt from 'bcrypt';

import IUser from "./IUser";
import UserDB from '../schemas/User';

class User implements IUser {
    async getUsers() {
        try {
            const users = UserDB.find();

            return users;
        } catch(err) {
            throw new Error(`Error attemping to find users in DB: ${err}`);
        }
    }

    async getUser(id: string) {
        
    }

    async createUser(data: any) {
        try {
            const user = new UserDB(data);
            const hash = await bcrypt.hash(user.password.toString(), 10);
            user.password = hash;

            await user.save();

            return true;
        } catch(err) {
            console.log(err);
            throw new Error(`Error attemping to create a new User in DB: ${err}`);
        }
    }
}

export default User;