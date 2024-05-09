
interface IUser {
    getUsers(): any;
    getUser(id: string): any;
    createUser(data: any): any;
}

export default IUser;