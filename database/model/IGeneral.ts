
interface IGeneral {
    getItems(query: any): any;
    getItem(id: string): any;
    createItem(data: any): any;
    deleteItem(id: string, sub: string): any;
    updateItem(id: string, data: any): any;
}

export default IGeneral;