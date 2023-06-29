import { Form, Formik, Field, useField } from "formik";
import { useState } from "react";
import styles from "./styles.module.scss";
import * as Yup from "yup";
import AdminInput from "../../inputs/adminInput";
import axios from "axios";
import AdonisTextArea from "../../inputs/adonisTextArea";
import FileInput from "../../inputs/fileInput";
import Images from "../createProject/images";
import { uploadImages } from "../../../requests/upload";
import dataURItoBlob from "../../../utils/dataURItoBlob";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AvatarUploaded from "../../../utils/imageUpload";
// import Button from "@material-ui/core/Button";
import Thumb from "../../images";
import SingularSelect from "../../selects/SingularSelect";

export default function CreateTestimonial({ clients, projects, setTestimonials }) {
  const initialValues = {
    name: "",
    description: "",
    project: undefined,
    client: undefined,
    file: undefined,
    file1: undefined,
    file2: undefined,
    images: [],
  };
  const [logo, setLogo] = useState("");
  const [imageUpload] = useState({});
  const [, setImg] = useState({});
  const [testimonial, setTestimonial] = useState(initialValues);
  const [image, setImage] = useState("");

  const profileUpload = async (file) => {
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

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTestimonial({ ...testimonial, [name]: value });
    // alert(JSON.stringify({ ...client}, null, 2))
    //alert(JSON.stringify(formik.values.file, null, 2))
  };

  const handleFileChange = (event) => {
    formik.setFieldValue("file", event.target.files[0]);
    //setClient({...client,"file": event.target.files[0]})
  };
  const validate = Yup.object({
    name: Yup.string()
      .required("Наименование  отзыва is required.")
      .min(2, " Наименование от 2 до 300 символов.")
      .max(300, "Наименование от 2 до 300 символов."),
    /*.matches(
        /^[a-zA-Z\s]*$/,
        "Numbers and special charcters are not allowed."
      ) */
  });

  const submitHandler = async (values) => {
    //  alert(JSON.stringify(logo, null, 2))

    const arrUrl = await profileUpload(logo);
    // setTimeout(() => {
    // }, "2000");
    const image_url = arrUrl[0].url;
    // alert(JSON.stringify(image_url, null, 2))
    const images = [  image_url];
    if (image_url) {
      setTestimonial({ ...testimonial, images: images });
    }
    const { data } = await axios.post("/api/admin/testimonial", {
      ...testimonial,
      images: images,
    });
    setTestimonials(data.testimonials);
    toast.success(data.message);
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          name: testimonial.name,
          description: testimonial.description,
          project: testimonial.project,
          images: testimonial.images,
          client: testimonial.client
        }}
        validationSchema={validate}
        onSubmit={submitHandler}
      >
        {(formik) => (
          <Form>
            <div className={styles.header}>Создать отзыв</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <SingularSelect
                name="project"
                value={testimonial.project}
                placeholder="Проект"
                data={projects}
                handleChange={handleChange}
              />
              <SingularSelect
                name="client"
                value={testimonial.client}
                placeholder="Клиент"
                data={clients}
                handleChange={handleChange}
              />
              <AdminInput
                type="text"
                label="Наименование"
                name="name"
                placholder="Наименование клиента"
                onChange={handleChange}
              />

              <div className="form-group">
                <AdonisTextArea
                  label=""
                  name="description"
                  rows="6"
                  onChange={handleChange}
                />
                <label for="file">Загрузка логотипа</label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={async (event) => {
                    formik.setFieldValue("file", event.target.files[0]);
                    //alert(JSON.stringify( event.target.files[0] , null, 2));
                    const images = [
                     
                      event.target.files[0],
                    ];
                    setTestimonial({
                      ...testimonial,
                      file: event.target.files[0],
                      images: images,
                    });
                  }}
                  className="form-control"
                />
                <Thumb file={formik.values.file} setLogo={setLogo} />
              </div>
        
              <div className={styles.btnWrap}>
                <button type="submit" className={`${styles.btn} `}>
                  <span>Добавить отзыв</span>
                </button>
              </div>
            </div>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </>
  );
}

//<div>
//<h1
//style={{
//  textAlign: "center",
//  color: "grey",
//  marginTop: "90px",
//marginRight: "130px",
//}}
//>
//логотип
//</h1>
//<div style={{ marginLeft: "50px", marginTop: "50px" }}></div>
//</div>
