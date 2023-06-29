import { useState } from "react"
import { connectToDatabase } from "../../../../lib/mongodb";
import CreateTestimonial from "../../../../components/admin/testimonials/Create"
import Layout from "../../../../components/admin/layout";

export default function Create({clients, projects}){
    const initialState = {

    }
    const [testimonials, setTestimonials] = useState("");
    return (
      <Layout>
        <CreateTestimonial clients={clients} projects={projects}  setTestimonials={setTestimonials}/>
        </Layout>    
    )
}
export async function getServerSideProps(){
    // const client = await clientPromise;
    // const db = await client.db();
  
    const { db } = await connectToDatabase();
    //  const projects = await Project.find({})
    //    .populate({ path: "category", model: Category })
    //    .sort({ createdAt: -1 })
    //    .lean();
    const clients = await db
    .collection("clients")  
     .find({})
      .toArray();
    const projects = await db
      .collection("projects")
      .aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "category",
            foreignField: "_id",
            as: "category_docs",
          },
        },
        {
          $unwind: {
            path: "$category_docs",
          },
        },
        {
          $lookup: {
            from: "clients",
            localField: "client",
            foreignField: "_id",
            as: "client_docs",
          },
        },
        {
          $unwind: {
            path: "$client_docs",
          },
        },
      ])
      .toArray();
   
  
    // .find({})
    // .toArray();
    // const categories = await db
  
    //   .collection("category")
    //   .find({})
    //   .limit(20)
    //   .toArray();
  
    //res.json(categories);
    //await db.connectDb();
  //const categories = await Category.find().lean();
  
  
      // const projects = await Project.find({})
      //  .populate({ path: "category", model: Category })
      //  .sort({ createdAt: -1 })
      //  .lean();
  //await db.disconnectDb();
  return {
      props: {
          projects:JSON.parse(JSON.stringify(projects)),
          clients: JSON.parse(JSON.stringify(clients))

      }
  }
  }