// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectToDb from "./database/connectToDb.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectToDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
