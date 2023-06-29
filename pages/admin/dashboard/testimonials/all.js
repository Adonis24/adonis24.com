import styles from "../../../../styles/testimonials.module.scss";
import Layout from "../../../../components/admin/layout";
import TestimonialCard from "../../../../components/admin/testimonials/testimonialCard";
// import Project from '../../../../models/Project'
//  import Category from '../../../../models/Category';
//import clientPromise from '../../../../lib/mongodbPromise.ts'
//import db from '../../../../utils/db'
import { connectToDatabase } from "../../../../lib/mongodb";
import { useRouter } from "next/router";
import { useState } from "react";
import ListItem from "../../../../components/admin/testimonials/ListItem";
import List from "../../../../components/admin/testimonials/List";
//import { deepPurple } from '@mui/material/colors';
//import List from '../../../../components/admin/projects/List'

export default function All({ testimonials }) {
  const [data, setData] = useState(testimonials);
  const router = useRouter();
  const handleCreate = () =>
    router.push("/admin/dashboard/testimonials/create", undefined, {
      shallow: false,
    });
  return (
    <Layout>
      <div className={styles.header}>
        <div style={{ alighnItems: "flex-start" }}>
          Отзывы
          <button
            type="button"
            onClick={handleCreate}
            class="btn btn-primary"
            style={{ marginLeft: 10, width: 100 }}
          >
            Добавить
          </button>
        </div>
      </div>

  
<List testimonials = {testimonials} setTestimonials={setData}/> 
     
    </Layout>
  );
}

export async function getServerSideProps() {
  // const client = await clientPromise;
  // const db = await client.db();

  const { db } = await connectToDatabase();
  //  const projects = await Project.find({})
  //    .populate({ path: "category", model: Category })
  //    .sort({ createdAt: -1 })
  //    .lean();
  const testimonials = await db
    .collection("testimonials").find({}).toArray();
    // .aggregate([
    //   {
    //     $lookup: {
    //       from: "clients",
    //       localField: "client",
    //       foreignField: "_id",
    //       as: "client_docs",
    //     },
    //   },
    //   {
    //     $unwind: {
    //       path: "$client_docs",
    //     },
    //   },
    //   {
    //     $lookup: {
    //       from: "projects",
    //       localField: "project",
    //       foreignField: "_id",
    //       as: "project_docs",
    //     },
    //   },
    //   {
    //     $unwind: {
    //       path: "$project_docs",
    //     },
    //   },
    // ])
    // .toArray();

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
      testimonials: JSON.parse(JSON.stringify(testimonials)),
    },
  };
}

/*

 {projects.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
 <List projects={data} setProjects={setData} />
        */
