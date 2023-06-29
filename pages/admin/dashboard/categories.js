import Layout from "../../../components/admin/layout";

// import {connectToDatabase} from '../../../lib/mongodb'
import prisma from "../../../lib/prisma";
//import Category from "../../../models/Category";
import { useState } from "react";
import Create from "../../../components/admin/categories/Create";
import List from "../../../components/admin/categories/List";
export default function Categories({ categories }) {
  const [data, setData] = useState(categories);
  return (
    <Layout>
      <div>
        <Create setCategories={setData} />
        <List categories={data} setCategories={setData} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const categories = await prisma.category.findMany()
//  const { db } = await connectToDatabase();
//  const categories = await db

//  .collection("categories")
//  .find({})
//  .limit(20)
//  .toArray();
  
 return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
