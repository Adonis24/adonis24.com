

import nc from "next-connect";
// import auth from "../../../middleware/auth";
// import admin from "../../../middleware/admin";
//import Category from "../../../models/Category";
//import clientPromise from '../../../lib/mongodbPromise.ts'
import prisma  from '../../../lib/prisma';
import slugify from "slugify";
//const handler = nc().use(auth).use(admin);
const handler = nc();

handler.post(async (req, res) => {
  try {
    const { name } = req.body;
  //Mongodb 
  // const client = await clientPromise;
  // const db = await client.db();
  //   const test = await Category.findOne({ name });
   //Mongodb 

    // if (test) {
    //   return res
    //     .status(400)
    //     .json({ message: "Категория с таким именем существует уже" });
    // }
   // await new Category({ name, slug: slugify(name) }).save();
   const result = await prisma.category.create({
    data: {
      name: name,
      slug: slugify(name),
      
    },
  });
    // res.json({
    //   message: `Категория ${name} успешно создана`,
    //   categories: await Category.find({}).sort({ updatedAt: -1 }),
    // });
    res.json({
      message: `Категория ${name} успешно создана`,
      categories: await prisma.category.findMany({}),
    });
  } catch (error) {
    //db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

handler.delete(async (req, res) => {
  // try {
  //   const { id } = req.body;
  //  const client = await clientPromise;
  //  const db = await client.db("Authenticate");
  //   await Category.findByIdAndRemove(id);
  
  //   return res.json({
  //     message: "Категория успешно удалена",
  //     categories: await Category.find({}).sort({ updatedAt: -1 }),
  //   });
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
});
handler.put(async (req, res) => {
  // try {
  //   const { id, name } = req.body;
 
  //   const client = await clientPromise;
  //   const db = await client.db("Authenticate");
  //   await Category.findByIdAndUpdate(id, { name });
  //   //db.disconnectDb();
  //   return res.json({
  //     message: "Категория успешно обновлена",
  //     categories: await Category.find({}).sort({ createdAt: -1 }),
  //   });
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
});

export default handler;