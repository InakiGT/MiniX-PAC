import dotenv from 'dotenv';

dotenv.config();

const config = {
    jwtSecret: process.env.JWT_SECRET || '',
    apiKey: process.env.API_KEY,
    mongoURI: process.env.MONGO_URI,
}

export default config;