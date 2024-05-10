import IGeneral from "./IGeneral";
import { Types } from './GeneralTypes';
import CommentsDb from '../../comments/model/Comment';
import ReactionsDb from '../../reactions/model/Like';
import PostsDb from '../../posts/model/Post';
import factoriesManager from "../../objectCreation/model/FactoriesManager";

const DB: any = {
    comments: CommentsDb,
    posts: PostsDb,
    reactions: ReactionsDb,
}

class General implements IGeneral {
    private db;
    private type;

    constructor(type: Types) {
        if (!DB[type]) {
            throw new Error(`Invalid DB type: ${type}`);
        }

        this.type = type;
        this.db = DB[type];
    }

    async getItems(query: any) {
        try {
            let items;

            if (this.type === Types.POST) {
                items = await this.db.aggregate([
                    {
                      $lookup: {
                        from: 'users',
                        localField: 'authorId',
                        foreignField: '_id',
                        as: 'detail',
                      }
                    },
                  ]);
            } else {
                items = await this.db.find({ query });
            }

            return items;
        } catch(err) {
            throw new Error(`Error attemping to find items in DB: ${err}`);
        }
    }

    async getItem(id: string) {
        try {
            const item = await this.db.findById(id);
    
            return item;
        } catch(err) {
            throw new Error(`Error attemping to find item by id in DB: ${err}`);
        }
    }

    async createItem(data: any) {
        try {
            let item;

            if ( this.type === Types.POST ) {

                if ( data.img ) {
                    item = factoriesManager.createImagePost(data);
                } else if (data.video) {
                    item = factoriesManager.createVideoPost(data);
                } else {
                    item = factoriesManager.createSimplePost(data);
                }
            } else {
                item = new this.db(data);
            }

            await item.save();

            return true;
        } catch(err) {
            console.log(err);
            throw new Error(`Error attemping to create a new item in DB: ${err}`);
        }
    }

    async deleteItem(id: string, sub: string) {
        
    }

    async updateItem(id: string, data: any) {
        try {   
            await this.db.updateOne({_id: id}, data);

            return true;
        } catch(err) {
            throw new Error(`Error attemping to update an item in DB: ${err}`);
        }
    }
}

export default General;