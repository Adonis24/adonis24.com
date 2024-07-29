// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(
//   process.env.PG_DB_NAME,
//   process.env.PG_DB_USER,
//   process.env.PG_DB_PASSWORD,
//   {
//     dialect: "postgres",
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//   }
// );
// const connectToDB = async() =>{
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync();
//   } catch (error) {}
// }
// const disconnectDb = async()=>{
//     try {
//        await sequelize.close() 
//     } catch (error) {
        
//     }
// }
// const db = { sequelize,connectToDB,disconnectDb };
// export default db;
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prisma = global.prisma;

export default prisma;