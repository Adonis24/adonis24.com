import nc, { NextHandler } from "next-connect";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../../lib/mongodb";

const handler = nc();

handler.post(async (req, res) => {
  //console.log(JSON.parse(JSON.stringify(req)));
  try {
    const { name, description, images } = req.body;
    // const client = await clientPromise;
    // const db = await client.db("Auth");
    // const test = await Client.findOne({ name });
    // if (test) {
    //   return res
    //     .status(400)
    //     .json({ message: "Клиент с таким именем существует уже" });
    // }
    // await new Client({
    //   name,
    //   description,
    // }).save();
    const { db } = await connectToDatabase();
    var Found = await db.collection('testimonials').findOne({ name });
    if (!Found) {
      await db.collection('testimonials').insertOne({
        name,
        description,
        images
        
      });
    }
    res.json({
      message: `Отзыв ${name} успешно создан`,
      testimonials: await db.collection('testimonials').find({}).sort({ updatedAt: -1 }).toArray(),
    });
    //req.body.slug = slugify(req.body.name);
    // const {db} = await connectToDatabase();
    //await db.collection("clients").save( { name, description } )
    //await db.clients.save( { name, description } )
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

handler.delete(async (req, res) => {
  //try {
  const { id } = req.body;
  const { db } = await connectToDatabase();
  await db.collection('testimonials').findOneAndDelete({ _id: ObjectId(id) });

  res.status(200).send({ message: "Отзыв успешно удален." }); //{...res}.matchedCount;
});
handler.put(async (req, res) => {
  //try {
  const { _id, name, description, images} = req.body;

  const { db } = await connectToDatabase();
  await db
    .collection('testimonials')
    .updateOne({ _id: ObjectId(_id) }, [
      { $set: { description: description, name: name , images:images } },
    ]);

  res.status(200).send({ message: "Отзыв успешно обновлен." }); //{...res}.matchedCount;
});

export default handler;
// const test = await Client.findOne({ name });
// if (test) {
//   return res
//     .status(400)
//     .json({ message: "Клиент с таким именем существует уже" });
// }

// await new Client({
//     name,
//     description

//   }).save();

//   res.json({
//     message: `Категория ${name} успешно создана`,
//     clients: await Client.find({}).sort({ updatedAt: -1 }),
//   });
// } catch (error) {
//   res.status(500).json({ message: error.message });
// }}
