import styles from '../../../../styles/projects.module.scss'
import Layout from "../../../../components/admin/layout";
import ProjectCard from '../../../../components/admin/projects/projectCard/index'
//import { connectToDatabase } from "../../../../lib/mongodb";
import {useRouter} from 'next/router';
import { useState } from 'react';
import prisma from '../../../../lib/prisma';

//import { deepPurple } from '@mui/material/colors';
//import List from '../../../../components/admin/projects/List'

export default function All({projects}){

  const [data, setData] = useState(projects);
    const router = useRouter();
    const handleCreateProject = ()=>router.push("/admin/dashboard/projects/create");
    return (
        <Layout>
          <div className={styles.header}>
            <div style={{alighnItems:'flex-start'}}>
                Проекты 
                <button type="button"  onClick={handleCreateProject} class={`${styles.btn} tw-bg-slate-700 tw-rounded-full`} style={{marginLeft:10, backgroundColor:'green',width:100}}>Добавить</button>
                </div>    
          </div>
     
        
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />// key={project._id} />
          ))}  
          
        </Layout>
      );
}

export async function getServerSideProps(){
//---MongoDB
  /* const { db } = await connectToDatabase();
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
    */
   //---MongoDb
   //--Postgres
   const projects = await prisma.project.findMany({
    include: {
      category:true,
      client:true

    }
   });

   //---Postgres
return {
    props: {
        projects:JSON.parse(JSON.stringify(projects))
    }
}
}

/*

 {projects.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
 <List projects={data} setProjects={setData} />
        
 
 
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
 
  //  const projects = await Project.find({})
  //    .populate({ path: "category", model: Category })
  //    .sort({ createdAt: -1 })
  //    .lean();
  // const client = await clientPromise;
  // const db = await client.db();

*/