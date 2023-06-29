import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import AvatarUploaded from "../../utils/imageUpload";
export default function ListItem({ client, setClients }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const input = useRef(null);
  const router = useRouter();
  const handleRemove = async (id) => {
  // alert(JSON.stringify( id , null, 2))
    try {
      const res = await axios.delete("/api/admin/client",{data:{id}})
      .then(
         router.push("/admin/dashboard/clients",undefined ,{shallow: false })
      )
        
      // setClients(clients.filter(newClient => newClient._id!==id))
        toast.success(res.data.message);
        

    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleUpdate = async (id) => {
    try {
      const { data } = await axios.put("/api/admin/client", {
        id,
        name,
      });
      setClients(data.clients);
      setOpen(false);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <li >
      <div className="tw-container">
      <div className="tw-flex tw-justify-center">
        <div className="tw-flex tw-flex-col tw-w-1/4">
        <div className="tw-shrink-0 tw-pl-10"> 
        <AvatarUploaded  className="tw-h-48   tw-md:h-full tw-md:w-48" logo={client.image}
          /> 
            {/* <img className="tw-h-48   tw-md:h-full tw-md:w-48" src={logo} alt="Modern building architecture" /> */}
         </div> 
        </div>
        <div className="tw-flex tw-flex-col tw-w-3/4">
          <div className=" tw-p-6 tw-text-center tw-uppercase tw-text-bold  tw-tracking-wide tw-text-sm tw-text-indigo-500 tw-font-semibold">
          {client.name}
          </div>
           <a href="#" className="tw-block tw-mt-1 tw-text-lg tw-leading-tight tw-font-medium tw-text-black tw-hover:underline">{client.url}</a>
          <p className="tw-mt-2 tw-text-slate-500 tw-text-center">
            {client.description}
             </p>
        </div>
      </div>
    </div>

       {/* <AvatarUploaded logo={client.image}
          /> 
      <text
        className={open ? styles.open : "w-100"}
        type="text"
        value={name ? name : client.name}
       
        
      /> */}
          
      
    </li>
  );
}
   //() => handleRemove(client._id)} />
   //className={styles.list__item}