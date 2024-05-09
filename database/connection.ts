import mongoose from "mongoose";

const uri = process.env.MONGO_URI || 'mongodb://root:example@localhost:27017/?authSource=admin';

const connectMongo = async () => {
    try {
        await mongoose.connect(uri);
    } catch(err) {
        console.error(`Error attemping to connect with Mongo: ${err}`);
    }
}

export default connectMongo;