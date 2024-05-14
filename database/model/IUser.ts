
interface IUser {
    getUsers(query: any): any;
    getUser(id: string): any;
    getUserByEmail(email: string): any;
    createUser(data: any): any;
    deleteUser(id: string, sub: string): any;
    updateUser(id: string, data: any): any;
}

export default IUser;