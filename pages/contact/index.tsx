import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useState } from "react";
import List from "../../components/clients/List";
import Footer from "../../components/Footer";
import QR from "../../components/qr"
//import {connectToDatabase} from '../../lib/mongodb'
//import prisma from "../../lib/prisma";

export const  QRCode = ()=>{
    const router = useRouter();
    const [openQr, setOpenQr] = useState<boolean>(false);
    return (
      
      <div>
      <button onClick={() => setOpenQr(!openQr)}>
        {openQr ? "Close" : "Open"} QR Scanner
      </button>
      {openQr && <QR />}
    </div>
    )
      //   <div>
      //   <a className="ml-5 mb-10 link-success" onClick={()=>router.back()}> `{"<Назад"}` </a>
      //   Контакты
      //   {//<List clients={clients} setClients={()=>{}}></List>//
      //   }
      //  { <QR/>}
      //   </div>
     
        // <div>
        //     {
        //     clients.map((client,id)=>
        //     <Avatar key={id} src={client.image} sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     `${client.name}`
        //   </Avatar>  
            
        //     )}
       
        // </div>

    //)
}

export default QRCode;

export async function getServerSideProps() {
  //---MongoDb
    // const { db } = await connectToDatabase();
    // const clients = await db.collection("clients").find({}).toArray();
 //---MongoDb
//  const clients = await prisma.client.findMany() 
//     return {
//       props: {
//               clients: JSON.parse(JSON.stringify(clients))
//       },
//     };
  }

  