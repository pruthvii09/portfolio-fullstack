import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogModel);
