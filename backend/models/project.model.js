import mongoose from "mongoose";
const Schema = mongoose.Schema;

const projectModel = new Schema({
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
  liveLink: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Project", projectModel);
