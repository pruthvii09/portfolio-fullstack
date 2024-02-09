import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userModel = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  social: {
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    twitter: {
      type: String,
    },
    peerlist: {
      type: String,
    },
  },
});

export default mongoose.model("User", userModel);
