import * as React from 'react';
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide, Scrollbar } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import EmblaCarousel from "../../../carousel/EmblaCarousel";
import moment from "moment";
import "moment/locale/ru";
import Moment from "react-moment";
import Image from "next-images";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import Card from "@mui/material/Card";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useUser } from "../../../../lib/hooks";
//import { Navigation } from "swiper";

import Link from "next/link";
import { TbEdit } from "react-icons/tb";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
SwiperCore.use([Autoplay, Navigation, Pagination]);
export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [user, { mutate }] = useUser();
  
  function changeImage(image){
    let image_index = []
    let i=0;
    image.map(element => {
   i++;  
   
   image_index.push(`${element.url}`)
 
     });
     return image_index;
  }

  return (
    <div className={styles.cards}>
      <Card sx={{ maxWidth: 1000 }} key={project.id}>
        {/* key={project._id}> */}
        <CardHeader
          avatar={
            <Avatar
              // ---MongoDb
              //src={project.client_docs.image}
              //---MongoDb
              src={project.client.image}

              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            >
              {/* ---MongoDb
              `${project.client_docs.name}`
                MongoDb*/}
              `${project.client.name}`
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          //---MongoDb 
          //title={project.client_docs.name}
          //---MongoDb
          title={project.client.name}
          subheader={
            `Период проекта с ` +
            moment(project.dateStart).locale("ru").format("MMMM YYYY") +
            ` по ` +
            moment(project.dateEnd).locale("ru").format("MMMM YYYY")
          }
        />
          {/* <button onClick={()=>
          {
            console.log(JSON.stringify([...changeImage(project.images)]))
            alert((JSON.stringify([...changeImage(project.images)],null,2)))
            }}>Проверить</button>   */}
          {/* <EmblaCarousel slides= {[...changeImage(project.images)]}/>      */}
          <EmblaCarousel slides= {[...changeImage(project.images)]}/> 
          {/* JSON.parse(JSON.stringify({...project.images})) */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
         {project.name} 
         <Link href={`/admin/dashboard/project/${project.slug}`} style={{ height: 50 }}>
            <TbEdit />
          </Link>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {project.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">{project.name} </h5>
    
           <div className="card-title"> #{project.category.name} </div> 
          <div className="card-title">
            {" "}
            {`Период проекта с ` +
              moment(project.dateStart).locale("ru").format("MMMM YYYY") +
              ` по ` +
              moment(project.dateEnd).locale("ru").format("MMMM YYYY")}
          </div>
          <p className="card-text">{project.description}</p>
          <Link href={`/admin/dashboard/project/${project.slug}`} style={{ height: 50 }}>
            <TbEdit />
          </Link>
        </div>
      </div> */}
    </div>
  );
}

/*
--------------23/02/23
      {/* 


    <div className={styles.project}>
      <h1 className={styles.project__name}>{project.name}</h1>
      <h2 className={styles.project__category}>
      #{project.category_docs.name}
      <Link href={`/project/${project.slug}`} style={{height:50}}>
                  <TbEdit  />
                </Link>
     
                </h2>
    <div>            
    {`Период проекта с `+ moment(project.dateStart).locale("ru").format("MMMM YYYY")+
    ` по `+moment(project.dateEnd).locale("ru").format("MMMM YYYY")}      
 </div>

       MongoDb
           <div className="card-title"> #{project.category_docs.name} </div>
           MongoDb 
   
    



      <Swiper
     
      modules={[Autoplay, Pagination]}
      pagination={{clickable: true}}
      slidesPerView={1}
      autoplay={{delay:1000,pauseOnMouseEnter: true, disableOnInteraction: false}}
      centeredSlides={true} 
      loop={true}
        spaceBetween={10}
        navigation={true}
        touchRatio={1}
        speed= {400}
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
      {project.images.map((p, i) => (
          <SwiperSlide key={`i`}> 
            <div className={styles.project__item}>
              <div className={styles.project__item_img}>
            
            <img 
							src={`${p.url}`}
				
							objectFit="cover"
							alt=""
						/>
             
              </div>
              <div className={styles.project__actions}>
                <Link href={`/project/${project.slug}`}>
                  <TbEdit />
                </Link>
                <Link href={`/project/${project.slug}?style=${i}`}>
                  <AiOutlineEye />
                </Link>
                <Link href="">
                  <RiDeleteBin2Line />
                </Link>
              </div>
            </div>
          </SwiperSlide>
))}
      </Swiper>
*
------------- swiper 
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        touchRatio={2}
        speed= {400}
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
      {project.images.map((p, i) => (
          <SwiperSlide key={`i`}> 
            <div className={styles.project__item}>
              <div className={styles.project__item_img}>
            
              <img src={p.url} alt="" />
             
              </div>
              <div className={styles.project__actions}>
                <Link href={`/project/${project.slug}`}>
                  <TbEdit />
                </Link>
                <Link href={`/project/${project.slug}?style=${i}`}>
                  <AiOutlineEye />
                </Link>
                <Link href="">
                  <RiDeleteBin2Line />
                </Link>
              </div>
            </div>
          </SwiperSlide>
))}
      </Swiper>
-------------- swiper
{project.images.map((p, i) => (
          <SwiperSlide key={`project._id`}> 
            <div className={styles.product__item}>
              <div className={styles.project__item_img}>
                <img src={p[i].url} alt="" />
              </div>
              <div className={styles.project__actions}>
                <Link href={`/admin/dashboard/project/${project._id}`}>
                  <TbEdit />
                </Link>
                <Link href={`/product/${project.slug}?style=${i}`}>
                  <AiOutlineEye />
                </Link>
                <Link href="">
                  <RiDeleteBin2Line />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
*/
