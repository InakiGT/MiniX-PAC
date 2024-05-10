import UserProxy from "../../database/model/UserProxy";

class RegisterManager {
    private proxy: UserProxy;

    constructor() {
        this.proxy = new UserProxy();
    }
    
    async createUser(data: any) {
        return await this.proxy.createUser(data);
    }
}

export default RegisterManager;