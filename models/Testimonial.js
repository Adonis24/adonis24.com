import { ObjectId } from "mongodb";
import mongoose, { mongo } from "mongoose";
const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    client: {
      type: ObjectId,
      required: false,
      ref: "Client",
    },
    project: {
      type: ObjectId,
      required: false,
      ref: "Project",
    },
    images: [],
  },
  {
    timestamps: true,
  }
);
const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
// default: "https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png"
