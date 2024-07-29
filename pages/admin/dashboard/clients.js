import Layout from "../../../components/admin/layout";
import db from "../../../utils/db";
//import {connectToDatabase} from '../../../lib/mongodb'
import prisma  from '../../../lib/prisma';
import { useState } from "react";
import Create from "../../../components/admin/clients/Create";
import List from "../../../components/admin/clients/List";
export default function Clients({ clients }) {

  const [_clients, setClients] = useState(clients);
  return (
    <Layout>
      <div>
        <Create setClients={setClients} />
        <List clients={_clients} setClients={setClients} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {

//  const { db } = await connectToDatabase();
//  const clients = await db

//  .collection("clients")
//  .find({})
//  .limit(20)
//  .toArray();
const clients = await prisma.client.findMany();
   return {
    props: {
      clients: JSON.parse(JSON.stringify(clients)),
    },
  };
}
