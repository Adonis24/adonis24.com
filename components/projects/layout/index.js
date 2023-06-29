import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideDialog } from "../../../store/DialogSlice";
import DialogModal from "../../dialogModal";
import Sidebar from "./sidebar";
import styles from "./styles.module.scss";
import { Card, Paper} from "@material-ui/core";

export default function LayoutProject({ categories, children }) {
  const { expandSidebar } = useSelector((state) => ({ ...state }));
  const showSidebar = expandSidebar.expandSidebar;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideDialog());
  }, []);
  const starter =
    "https://res.cloudinary.com/ddgn7lxr9/image/upload/v1680598760/web-services-banner_sob2do.png"; //"https://res.cloudinary.com/ddgn7lxr9/image/upload/v1679468035/images/trracntq5ewhyekojbqu.jpg"
  const proffessional =
    "https://res.cloudinary.com/ddgn7lxr9/image/upload/v1680598843/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_qodcdt.png"; //"https://res.cloudinary.com/ddgn7lxr9/image/upload/v1679468035/images/trracntq5ewhyekojbqu.jpg"
  const premium =
    "https://res.cloudinary.com/ddgn7lxr9/image/upload/v1680599303/automatization-1c_gkvumc.png"; //"https://res.cloudinary.com/ddgn7lxr9/image/upload/v1679468035/images/trracntq5ewhyekojbqu.jpg"
    const ref = useRef()
  return (


    <div className={styles.layout}>
      <DialogModal />
      <Sidebar categories={categories}/>
      <div
        style={{ marginLeft: `${showSidebar ? "280px" : "80px"}` }}
        className={styles.layout__main}
      >
        {children}
      </div>
    </div>
  );
}
{/* <Paper
ref={ref}
className="tw-h-60 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-m-10" 
>

<div className="tw-text-center">
<h3>Заголовок 1</h3>
<img  className="tw-overflow-hidden tw-h-40 tw-relative  tw-object-center" src={starter} alt="starter" />
 
</div>
<div  tw-text-lg tw-text-center>Контекст

</div>
</Paper> 



    <section>
      <div className="row">
        
        <div className="col-sm-6">
          <div className="pricing-box">
            {/* <img src={starter} alt="starter" /> 
            {/* <Card className=" tw-bg-red-500">
              <h6 className="tw-font-bold tw-text-lg tw-text-center title-text">
                Веб-сервисы
              </h6>
            </Card> 
           
           

     
             </div>
             </div>
             <div className="col-sm-6">
               <div className="pricing-box">
                 <img src={starter} alt="starter" />
                 <h6 className="tw-font-bold tw-text-lg tw-text-center title-text">
                   Веб-сервисы
                 </h6>
     
      
               </div>
             </div>
           </div>
         </section>
*/}