import nc, { NextHandler } from "next-connect";

import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodbPromise.ts";
import { connectToDatabase } from "../../../../lib/mongodb";
import prisma from "../../../../lib/prisma.js";
import Project from "../../../../models/Project";
// import auth from "../../../middleware/auth";
// import admin from "../../../middleware/admin";
import slugify from "slugify";
import * as d from "date-fns";
import DateFnsUtils from "@date-io/date-fns";
//const handler = nc().use(auth).use(admin);
const handler = nc();
function jsDateToLocalISO8601DateString(date) {
  return [
    String(date.getFullYear()),
    String(101 + date.getMonth()).substring(1),
    String(100 + date.getDate()).substring(1),
  ].join("-");
}

function dateStringToLocalDate(s) {
  if (!s) return null;
  return new DateFnsUtils().parse(s, "yyyy-MM-dd");
}
handler.post(async (req, res) => {
  // const jsonClient = JSON.stringify(req.body)
  //     res.status(200).send({message: "Проект добавлен успешно."+jsonClient});

  try {
    //---Mongo db
    // const client = await clientPromise;
    // const db = await client.db();
    // req.body.slug = slugify(req.body.name);
    //   const newProject = new Project({
    //     name: req.body.name,
    //     description: req.body.description,
    //     brand: req.body.brand,
    //     details: req.body.details,
    //     slug: req.body.slug,
    //     category: req.body.category,
    //     client: req.body.client,
    //     images:req.body.images,
    //     dateStart:  ISODate(req.body.dateStart),
    //     dateEnd:  ISODate(req.body.dateEnd)
    //   });
    //---Mongo db
    //   await newProject.save();
    //---Posgres
    const { title, description, category, client, images, dateStart, dateEnd } =
      req.body;
    const clientObj = await prisma.client.findUnique({
      where: { name: client },
    });
    const categoryObj = await prisma.category.findUnique({
      where: { name: category },
    });

    const dateStart_8601 = d.addHours(d.parseISO(dateStart), 3);
    const dateEnd_8601 = d.addHours(d.parseISO(dateEnd), 3);

    const newProject = await prisma.project.create({
      data: {
        name: title,
        description,
        slug: slugify(title),
        category: { connect: { name: category } },
        client: { connect: { name: client } },
        //categoryId: categoryObj.id,
        //clientId: clientObj.id,
        images,
        dateStart: dateStart_8601,
        dateEnd: dateEnd_8601,
      },
    });
    //---Posgres
    const jsonClient = JSON.stringify(req.body);
    res.status(200).json({ message: `Проект ${title} добавлен успешно.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

handler.delete(async (req, res) => {
  const { id } = req.body;
  //---MongoDb
  // const { db } = await connectToDatabase();
  // await db.collection("projects").findOneAndDelete({ _id: ObjectId(_id) });
  //---MongoDb
  const project = await prisma.project.delete({
    where:{id}
  })
  res.status(200).send({ message: "Проект успешно удален." }); //{...res}.matchedCount;
});
handler.put(async (req, res) => {

  const { id, description, category, client, dateStart, dateEnd, images } = req.body;
  //---MongoDb
  // const { db } = await connectToDatabase();
  // await db.collection("projects").updateOne({ _id: ObjectId(_id) }, [
  //   {
  //     $set: {
  //       description: description,
  //       category: ObjectId(category),
  //       client: ObjectId(client),
  //       dateStart: new Date(dateStart),
  //       dateEnd: new Date(dateEnd),
  //       images: images,
  //     },
  //   },
  // ]);
  //---MongoDb
  //---Postgres
  const dateStart_8601 = d.addHours(d.parseISO(dateStart), 3);
  const dateEnd_8601 = d.addHours(d.parseISO(dateEnd), 3);
  const project = await prisma.project.update({
    where: {id},
    data:{
      description,
      category: { connect: { id: category.id } },
      client: { connect: { id: client.id } },
      dateStart: dateStart_8601,
      dateEnd:   dateEnd_8601,
      images, 
    }
  })
  //---Postgres
  res.status(200).send({ message: "Проект успешно обновлен." }); //{...res}.matchedCount;


});

export default handler;
/*
  //{connect: [{id:category.id}]},
  //ISODate($dateStart),
  //const projects = await db.collection("projects")
  //   .aggregate([
  //     {$match:
  //          {_id: ObjectId('$_id')}
  //     },
  //     {$project:
  //         {

  //          description: '$description'
  //         }
  //     },
  // ])

  //     return res.json({
  //       message: "Проект успешно обновлен",
  //      // projects: await Project.find({}).sort({ createdAt: -1 }),
  //     });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
 if (req.body.parent) {
      const parent = await Project.findById(req.body.parent);
      if (!parent) {
        return res.status(400).json({
          message: "Родительский проект не найден !",
        });
      } else {
        const newParent = await parent.updateOne(
          {
            $push: {
              subProducts: {
                sku: req.body.sku,
                images: req.body.images,
    
              },
            },
          },
          { new: true }
        );
      }
    } else {
*/
