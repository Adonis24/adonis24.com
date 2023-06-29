import ListItem from "./ListItem";
import styles from "./styles.module.scss";

export default function List({ testimonials, setTestimonials }) {
  // const [data, setstate] = useState(clients);

  return (
    <ul className={styles.list}>
      {testimonials.map((testimonial) => (
        <ListItem
        testimonial={testimonial}
          key={testimonial._id}
          image = {testimonial.images[0]}
          setTestimonials={setTestimonials}
        />
      ))}
    </ul>
  );
}