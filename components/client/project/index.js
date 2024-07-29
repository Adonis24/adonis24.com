import styles from "./styles.module.scss";
import React from "react";
import { useRouter } from "next/router";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { Form, Formik, Field, useField } from "formik";
import SingularSelect from "../../selects/SingularSelect";

import { useDispatch } from "react-redux";
import Images from "../../admin/createProject/images";
import Style from "../../admin/createProject/style";
import Details from "../../admin/createProject/clickToAdd/Details";
import { validateCreateProject } from "../../../utils/validation";
import dataURItoBlob from "../../../utils/dataURItoBlob";
import { uploadImages } from "../../../requests/upload";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
// import ReactDatePicker from "../../../utils/dataPicker";
// import ReactDatePickerMui from "../../../utils/dataPickerMui";
import { TextField } from "@mui/material";
import { Label } from "@mui/icons-material";
import { fontSize } from "@mui/system";

// };
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const AdonisTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className={styles.infos__textarea} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const showMessageUpdateProject = () => {
  toast.success("Проект обновлен", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export default function ClientProjectCard(
  { project, categories, clients },
  setActiveImg
) {
  const router = useRouter();

  const onDeletePhotos = async () => {
    await axios
      .request({
        method: "DELETE",
        url: "/api/admin/project",
        data: { ...project },
        // onUploadProgress: ()=>{
        //   toast.success("Обновляется")
        // }
      })
      .then(
        toast.success("Удалены фотографии", {
          position: toast.POSITION.TOP_RIGHT,
        })
      )
      .then(
        router.push("/admin/dashboard/projects/all", undefined, {
          shallow: false,
        })
      );
  };
  return (
    <Formik
      initialValues={{
        _id: project._id,
        name: project.name,
        brand: project.brand,
        description: project.description,
        category: project.category,
        client: project.client,
        // dateStart: project.dateStart,
        // dateEnd: project.dateEnd,
        details: [],
        imageInputFile: "",
        styleInout: "",
      }}

    >
      {({
        values,
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} noValidate>
          {/* <SingularSelect
            name="category"
            value={project.category}
            placeholder="Категория бизнеса"
            data={categories}
            disabled="true"
            handleChange={handleChange}
          />  */}
          <div
            className="card text-center"
            style={{ marginBottom: "10px", fontSize: 17 }}
          >
            <div className="card-body"></div>
            <div className={`card-title ${styles.infos__textare}`} a>
              {project.name}
              <div className="card-text-center"></div>
            </div>
          </div>

          {/* <SingularSelect
            name="client"
            value={project.client}
            placeholder="Клиент"
            data={clients}
            header=""
            handleChange={handleChange}
          /> */}

          {/* <ReactDatePickerMui
            name="dateStart"
            name2="dateEnd"
            dateStart={values.dateStart}
            dateEnd={values.dateEnd}
            setFieldValue={setFieldValue}
            style={{ paddingTop: "10px", marginTop: "10px" }}
          /> */}
          <AdonisTextArea label="" name="name" rows="3" />
          <AdonisTextArea label="" name="description" rows="6" />

          <ToastContainer />

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="mySwiper"
          >
            {project.images.map((p, i) => (
              <SwiperSlide key={`${p.url}_${i}`} data-swiper-autoplay="2000">
                <img className="w-100 h-80 p-1 rounded" src={p.url} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <p />
        </Form>
      )}
    </Formik>
    //* <ReactDatePicker name="dateStart" name2="dateEnd" /> */}
    // <form onSubmit={updateProjectHandler}>
    // <div className={styles.infos}>
    //   <DialogModal />
    //   <div className={styles.infos__container}>
    //     <h1 className={styles.infos__name}>{project.name}
    //     <button type="button" onClick={updateProjectHandler} className="btn btn-primary"  style={{marginLeft:400,width:100}}> Сохранить</button>
    //     </h1>
    //     <textarea id="project_description" name="description"
    //     className={styles.infos__description}
    //      value={newProject.description}
    //      required
    //     rows="3"
    //     cols="45"
    //      onChange={handleChange} style={{borderColor:'white'}} />
    //     <Accordian details={newProject.details}  images={newProject.images}/>
    //   </div>
    //   </div>
    //   </form>
  );
}

/*
------------- photo
<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
  
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 0.5,
          slideShadows: true,
        }}
      
        className="mySwiper"
      >
            {project.images.map((p, i) => (
              <SwiperSlide key={`${p.url}_${i}`} data-swiper-autoplay="2000">
        
                  <img className="w-100 p-1 rounded" src={p.url} alt="" />
               
              
              </SwiperSlide>
            ))}
    
          </Swiper >
-------------

const [urls, setUrls] = useState([])
    const previewFiles = (items) => {
        items.map(async (file) => {
            setIsLoading(true)
            await upload('propertyImages', file).then(url => {
                setUrls(prev => [...prev, url])
                return Object.assign(file, { preview: url })
            })
            formik.setFieldValue("images", urls)
            setIsLoading(false)
        })
        return items
    }
const router = useRouter();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(hideDialog());
  }, );

  const [newProject, setProject] = useState(project);
  const [images, setImages] = useState([]);
  const [description_images, setDescription_images] = useState("");
  const [loading, setLoading] = useState(false);


  
  const handleChange = (e) => {
    const { value, name } = e.target;
    setProject({ ...newProject, [name]: value });
  };


  const style_img = "";
  const updateProjectHandler = async () => {
    var uploaded_images = [];
   setLoading(true);
    // if (images) {
    //   let temp = images.map((img) => {
    //     return dataURItoBlob(img);
    //   });
    //   const path = "images";
     
    //   let formData = new FormData();
    //   formData.append("path", path);
    //   temp.forEach((image) => {
    //     formData.append("file", image);
    //   });
    //   uploaded_images = await uploadImages(formData);
    // }

    try {
      console.log(newProject)
      const res = await axios.put("/api/admin/project", {
        ...newProject,
      
      });
      
      setLoading(false);
     toast.success(data.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

    <Formik
      enableReinitialize
      initialValues={{
        name: project.name,
        brand: project.brand,
        description: project.description,
        category: project.category,
        details: [],
        imageInputFile: "",
        styleInout: "",
      }}
     
      onSubmit={() => {
        createProject();
      }}
    >
      {(formik) => (
        <Form>
          
 
          <SingularSelect
            name="category"
            value={project.category}
            placeholder="Категория"
            data={categories}
            header="Выберите категорию"
            handleChange={handleChange}
           
          />
       
          <div className={styles.header}>Основное описание
          <AdminInput
            type="text"
            label="Наименование"
            name="name"
            placholder="Наименование проекта"
            onChange={handleChange}
          />
          <AdminInput
            type="text"
            label="Описание проекта"
            name="description"
            placholder="Описание проекта"
            onChange={handleChange}
          />
          <AdminInput
            type="text"
            label="Конфигурация"
            name="brand"
            placholder="Конфигурация проекта"
            onChange={handleChange}
          />
     
         
           <Details
            details={project.details}
            project={project}
            setProject={setProject}
          /> 
         
          <Images
            name="imageInputFile"
            header="Фотографии"
            text="Добавить фотографии"
            images={project.images}
            setImages={project.images}
     
          />
       
          </div>
          <button
            className={`${styles.btn} ${styles.btn__primary} ${styles.submit_btn}`}
            type="submit"
          >
            Сохранить
          </button>
        </Form>
      )}
    </Formik>
 <AccordionDetails>
          <div className={styles.infos__accordian_grid}></div>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="project__swiper"
        style={{ padding: "5px 0 5px 5px" }}
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
          1520: {
            slidesPerView: 6,
          },
        }}
     >
      {images.map((p, i) => (
          <SwiperSlide key={`i`}> 
            <div className={styles.project__item}>
              <div className={styles.project__item_img}>
                <img src={p.url} alt="" />
              </div>
             
            </div>
          </SwiperSlide>
))}
      </Swiper>
        </AccordionDetails>

 <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className={styles.project__swiper}
            style={{ padding: "5px 0 5px 5px" }}
            breakpoints={{
              450: {
                slidesPerView: 2,
                spaceBetween:20,
              },
              630: {
                slidesPerView: 3,
                spaceBetween:20,
              },
              920: {
                slidesPerView: 4,
              },
              1232: {
                slidesPerView: 5,
                spaceBetween:20,
              },
              1520: {
                slidesPerView: 6,
                spaceBetween:20,
              },
            }}
          >
            {project.images.map((p, i) => (
              <SwiperSlide key={`p.url`}>
                {/* <div className={styles.project__item}>
                  <div className={styles.project__item_img}> 
                  <img src={p.url} alt="" />
             </div>
                 </div> 
              </SwiperSlide>
            ))}
          </Swiper>
    */
