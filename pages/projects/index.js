import { useRouter, withRouter } from 'next/router'
import Layout from "../../components/projects/layout";
import styles from "../../styles/dashboard.module.scss";
import Head from "next/head";
import Dropdown from "../../components/admin/dashboard/dropdown";
import Notifications from "../../components/admin/dashboard/notifications";
import { TbUsers } from "react-icons/tb";
import { SlHandbag, SlEye } from "react-icons/sl";
import { SiProducthunt } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";
import { useUser } from "../../lib/hooks";
import { connectToDatabase } from "../../lib/mongodb";
import  Card  from "@mui/material/Card";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmblaCarousel from "../../components/carousel/EmblaCarousel";
import { Link } from '@mui/material';
import moment from "moment";
import "moment/locale/ru";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';
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

export  function Projects({ projects, categories,router,  clients }) {
  const [expanded, setExpanded] = React.useState(false);
  router = useRouter();
//   const navigate = useNavigate();
//   const searchProjectWithCategory = ()=>
//   navigate({
//     pathname:"/projects",
//     search:"?category"
// })
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [user, { mutate }] = useUser();
  return (
    <div>
      <Head>
        <title>Проекты</title>
        <p>{router.pathname}</p>
      </Head>
      <Layout  categories={categories}>
        <div className={styles.header}>
          <div className={styles.header__search}>
            <label htmlFor="">
              <input type="text" placeholder="Поиск..." />
            </label>
          </div>
          <div className={styles.header__right}>
            <Dropdown userImage={user?.image} />
            <Notifications />
          </div>
        </div>
        <div className={styles.cards}>
        {projects.map((project) => 
              (<Card  sx={{ maxWidth: 1000 }} key={project._id}>
                <Link onClick={()=>router.push('./clients')}>
                <CardHeader
                
                  avatar={
                    <Avatar src={project.client_docs.image} sx={{ bgcolor: red[500] }} aria-label="recipe"
                    onClick={()=>router.push('./clients')}
                    >
                      `${project.client_docs.name}`
                    </Avatar>
                   
                  } 
                 
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title= {project.client_docs.name}
                  subheader={
                    `Период проекта с ` +
                    moment(project.dateStart).locale("ru").format("MMMM YYYY") +
                    ` по ` +
                    moment(project.dateEnd).locale("ru").format("MMMM YYYY")
                  }
                />
</Link>
                <EmblaCarousel slides={project.images} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                    <Link onClick={()=>router.push("./project/"+project.slug, undefined, {
          shallow: false})}> Перейти к проекту</Link>
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
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            ))}
        </div>
      </Layout>
    </div>
  );
}

export default withRouter(Projects)

export async function getServerSideProps(context) {
  const {category} = context?.query;
  const searchCategory = category?{"category_docs.name":category}:{};
  console.log(searchCategory)
  const { db } = await connectToDatabase();
  const categories = await db.collection("categories").find({}).toArray();
  const clients = await db.collection("clients").find({}).toArray();
  const projects = await db
    .collection("projects")
    .aggregate([

      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category_docs",
        },
      },
      {
        $unwind: {
          path: "$category_docs",
        },
      },
      {
        $match: searchCategory,
     },
      {
        $lookup: {
          from: "clients",
          localField: "client",
          foreignField: "_id",
          as: "client_docs",
        },
      },
      {
        $unwind: {
          path: "$client_docs",
        },
      },
    ])
   
    .toArray();

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
      categories: JSON.parse(JSON.stringify(categories)),
      clients: JSON.parse(JSON.stringify(clients))
    },
  };
}

/*
 {projects.map((project) => 
              <Card sx={{ maxWidth: 345 }} key={project._id}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <EmblaCarousel slides={project.images} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
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
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            )}
*/