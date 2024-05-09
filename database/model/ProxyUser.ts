import IUser from "./IUser";
import User from "./User";

class ProxyUser implements IUser {
    private user: User;

    constructor() {
        this.user = new User();
    }

    getUser(id: string): undefined {
        
    }
}

export default ProxyUser;