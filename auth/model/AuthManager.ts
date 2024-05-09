import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import IUser from "../../database/model/IUser";
import UserProxy from "../../database/model/UserProxy";
import config from "../../config";

class AuthManager {
    private proxy: IUser;
    
    constructor() {
        this.proxy = new UserProxy();
    }

    async getUser(email: string, password: string) {
        const user = await this.proxy.getUserByEmail(email);
        console.log(user)
        if (!user) {
            throw new Error('Unhauthorized');
        }

        const isMatch = await bcrypt.compare(password, user.password.toString());

        if (!isMatch) {
            throw new Error('Unhauthorized');
        }

        return {
            id: user._id,
            username: user.username,
            email: user.email,
        };
    }

    signToken(user: any) {
        const payload = {
            sub: user?.id,
        }

        const token = jwt.sign( payload, config.jwtSecret );
        return {
            user,
            token,
        }
    }
}

export default AuthManager;