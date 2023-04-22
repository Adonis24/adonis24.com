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
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import TextInput from "./TextInput";
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
  // SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

  return (
    <div className={styles.cards}>
      <Card sx={{ maxWidth: 1000 }} key={project._id}>
        <CardHeader
          avatar={
            <Avatar
              src={project.client_docs.image}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            >
              `${project.client_docs.name}`
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title={project.client_docs.name}
          subheader={
            `Период проекта с ` +
            moment(project.dateStart).locale("ru").format("MMMM YYYY") +
            ` по ` +
            moment(project.dateEnd).locale("ru").format("MMMM YYYY")
          }
        />
        <EmblaCarousel slides={project.images} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
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
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{project.name} </h5>
          <div className="card-title"> #{project.category_docs.name} </div>
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
      </div>
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
