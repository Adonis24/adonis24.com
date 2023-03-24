import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";
import List from "../../components/admin/clients/List";
import {connectToDatabase} from '../../lib/mongodb'

export default function Clients({clients}){
    const router = useRouter()
    return (

        <div>
        <a className="ml-5 mb-10 link-success" onClick={()=>router.back()}> `{"<Назад"}` </a>
        Клиенты
        <List clients={clients} setClients={()=>{}}></List>
        </div>
       
        // <div>
        //     {
        //     clients.map((client,id)=>
        //     <Avatar key={id} src={client.image} sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     `${client.name}`
        //   </Avatar>  
            
        //     )}
       
        // </div>

    )
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();

    const clients = await db.collection("clients").find({}).toArray();

  
    return {
      props: {
              clients: JSON.parse(JSON.stringify(clients))
      },
    };
  }