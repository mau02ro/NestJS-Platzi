import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    mongo: {
      connection: process.env.MONGO_CONNECTION,
      user: process.env.MONGO_USER || '',
      password: process.env.MONGO_PASSWORD || '',
      host: process.env.MONGO_HOST,
      port: process.env.MONGO_PORT || 27017,
      dbName: process.env.MONGO_DBNAME,
    },
    apiKey: process.env.API_KEY,
  };
});
