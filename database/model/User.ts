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
        try {
            const user = await UserDB.findById(id);
  
            return user;
        } catch(err) {
            throw new Error(`Error attemping to find user by id in DB: ${err}`);
        }
    }

    async getUserByEmail(email: string) {
        try {
            const user = await UserDB.findOne({ email });

            return user;
        } catch(err) {
            throw new Error(`Error attemping to find user by email in DB: ${err}`);
        }
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

    async deleteUser(id: string, sub: string) {
        try {
            if (id !== sub) {
                throw new Error('Unhauthorizated');
            } 
            
            await UserDB.deleteOne({ _id: id });

            return true;
        } catch(err) {
            throw new Error(`Error attemping to delete a User in DB: ${err}`);
        }
    }

    async updateUser(id: string, data: any) {
        try {
            if (data.password) {
                const hash = await bcrypt.hash(data.password.toString(), 10);
                data.password = hash;
            }
            await UserDB.updateOne({_id: id}, data);

            return true;
        } catch(err) {
            throw new Error(`Error attemping to update a User in DB: ${err}`);
        }
    }
}

export default User;