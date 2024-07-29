import styles from "../../../../styles/projects.module.scss";
import Layout from "../../../../components/admin/layout";
import db from "../../../../utils/db";
//import {connectToDatabase} from '../../../../lib/mongodb'
//import clientPromise from '../../../../lib/mongodbPromise.ts'
import prisma from "../../../../lib/prisma";
//import Category from "../../../../models/Category";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import SingularSelect from "../../../../components/selects/SingularSelect";
import MultipleSelect from "../../../../components/selects/MultipleSelect";
import AdminInput from "../../../../components/inputs/adminInput";
import DialogModal from "../../../../components/dialogModal";
import { useDispatch } from "react-redux";
import { showDialog } from "../../../../store/DialogSlice";
import Images from "../../../../components/admin/createProject/images";
import Style from "../../../../components/admin/createProject/style";
import Details from "../../../../components/admin/createProject/clickToAdd/Details";
//import { validateCreateProject } from "../../../../utils/validation";
import dataURItoBlob from "../../../../utils/dataURItoBlob";
import { uploadImages } from "../../../../requests/upload";
import ReactDatePicker from "../../../../utils/dataPicker";
import ReactDatePickerMui from "../../../../utils/dataPickerMui";
import format from "date-fns/formatISO";
import * as d from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import DateFnsUtils from "@date-io/date-fns";
import Thumb from "../../../../components/images";
function jsDateToLocalISO8601DateString(date) {
  return [
    String(date.getFullYear()),
    String(101 + date.getMonth()).substring(1),
    String(100 + date.getDate()).substring(1),
  ].join("-");
}

function dateStringToLocalDate(s) {
  if (!s) return null;
  return new DateFnsUtils().parse(s, "yyyy-MM-dd");
}

const initialState = {
  title: "",
  description: "",
  client: "",
  images: [],
  description_images: [],
  category: "",
  dateStart: dateStringToLocalDate(new Date("2021-01-01")),
  dateEnd: dateStringToLocalDate(new Date("2021-01-01")),

};
const fileUpload = async (file) => {
  const formData = new FormData();
  let image = dataURItoBlob(file);
  formData.append("path", "images");
  formData.append("file", image);
  const { data } = await axios.post("/api/cloudinary", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return data;
};
export default function Create({ categories, clients }) {
  const [project, setProject] = useState(initialState);
  const [logo, setLogo] = useState("");
  // const [client, setClient] = useState("");
  // const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [description_images, setDescription_images] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    // alert(
    //   JSON.stringify(
    //     {
    //       ...project,
    //       images: uploaded_images
    //     },
    //     null,
    //     2
    //   )
    // );
  };
  // const validate = Yup.object({
  //   name: Yup.string()
  //     .required("Наименование проекта")
  //     .min(10, "Длина от 10 до 300")
  //     .max(300, "Длина от 10 до 300"),
  //   brand: Yup.string().required("Конфигурация внедрения"),
  //   category: Yup.string().required("Категория бизнеса"),

  //   description: Yup.string().required("Please add a description"),
  // });
  const createProject = async (values) => {
    await createProjectHandler(values);
  };

  const style_img = "";
  const createProjectHandler = async (values) => {
    var uploaded_images = [];
    setLoading(true);
    if (logo) {
      const arrUrl = await fileUpload(logo);
      const newIm = {
        public_url: arrUrl[0].public_url,
        url: arrUrl[0].url,
      };

      if (newIm) {
        //  alert(JSON.stringify({ ...values}, null, 2))
       values.images.push(newIm);
      }
      //alert(JSON.stringify({ ...values}, null, 2))
    }
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
    // let dateStartS = values.dateStart;//values.dateStart), "MMM d 'AT' h:m a").toUpperCase();
    // let dateEndS = (values.dateEnd);//format((values.dateEnd), "dd-MM-yyyy");
    // //`${values.dateStart}`;
    //let dateEndS = `${values.dateEnd}`;
    // const dateStartF = dateStartS.slice(0,11);
    // const dateEndF = dateEndS.slice(0, 11);
    // const dateStart_8601 = ((dateStringToLocalDate(values.dateStart)));//d.format(d.parseISO(dateStart), "dd-MM-yyyy");
    // const dateEnd_8601 = ((dateStringToLocalDate(values.dateEnd)));//d.format(d.parseISO(dateEnd), "dd-MM-yyyy");

    alert(
      JSON.stringify(
        {
          ...values,
          dateStart: values.dateStart,
          dateEnd: values.dateEnd,
        },
        null,
        2
      )
    );
    // try {
    const { data } = await axios.post("/api/admin/project", {
      ...values,
    });
    setLoading(false);
    toast.success(data.message);
    // } catch (error) {
    //   setLoading(false);
    //   toast.error(error.response.data.message);
    // }
  };
  return (
    <Layout>
      <div className={styles.header}>Создать проект</div>
      <Formik
        enableReinitialize
        initialValues={{
          title: project.title,
          client: project.client,
          description: project.description,
          category: project.category,
          dateStart: project.dateStart,
          dateEnd: project.dateEnd,
          images: [],
          imageInputFile: "",
          styleInout: "",
        }}
        onSubmit={(values) => {
          createProject(values);
        }}
      >
        {({ setFieldValue, values, handleChange }) => (
          <Form>
            <SingularSelect
              name="category"
              value={project.category}
              placeholder="Категория"
              data={categories}
              header="Выберите категорию"
              handleChange={handleChange}
            />
            <SingularSelect
              name="client"
              value={project.client}
              placeholder="Клиент"
              data={clients}
              header="Выберите клиента"
              handleChange={handleChange}
            />
            <div className={styles.header}>
              Основное описание
              <AdminInput
                type="text"
                label="Наименование"
                name="title"
                placholder="Наименование проекта"
              />
              {/* <ReactDatePicker name="dateStart" name2="dateEnd" /> */}
              <ReactDatePickerMui
                dateStart={values.dateStart}
                dateEnd={values.dateEnd}
                setFieldValue={setFieldValue}
              />
              <AdminInput
                type="text"
                label="Описание проекта"
                name="description"
                placholder="Описание проекта"
                onChange={handleChange}
              />
              {/* <AdminInput
                type="text"
                label="Конфигурация"
                name="brand"
                placholder="Конфигурация проекта"
                onChange={handleChange}
              /> */}
              <label for="file">Загрузка файла</label>
              <input
                id="file"
                name="file"
                type="file"
                onChange={async (event) => {
                  setFieldValue("file", event.target.files[0]);
                  // alert(JSON.stringify( event.target.files[0] , null, 2));
                  setProject({
                    ...project,
                    images: [...project.images, event.target.files[0]],
                  });
                }}
                className="form-control"
              />
              <Thumb file={values.file} setLogo={setLogo} />
              <p />
              {/* <Images
                name="imageInputFile"
                header="Фотографии"
                text="Добавить фотографии"
                images={images}
                setImages={setImages}
                className="tw-rounded-full"
              /> */}
              {/* <Details
                details={project.details}
                project={project}
                setProject={setProject}
              /> */}
            </div>
            {/*
            <Images
              name="imageDescInputFile"
              header="Product Description Images"
              text="Add images"
              images={description_images}
              setImages={setDescriptionImages}
              setColorImage={setColorImage}
            />
           
       
          
            */}
            <button
              className={`${styles.btn} ${styles.btn__primary} ${styles.submit_btn} tw-rounded-full`}
              type="submit"
            >
              Создать проект
            </button>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export async function getServerSideProps() {
  // db.connectDb();
  // const client = await clientPromise;
  //   const db = await client.db();
  //const categories = await Category.find().lean();
  //  const { db } = await connectToDatabase();
  //   const categories = await db
  //   .collection("categories")
  //   .find({})
  //   .toArray();
  const categories = await prisma.category.findMany();
  const clients = await prisma.client.findMany();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      clients: JSON.parse(JSON.stringify(clients)),
    },
  };
}
/*
 validationSchema={validate}
   details: [
    {
      name: "",
      value: "",
    },
  ],
*/
