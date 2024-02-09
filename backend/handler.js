"use strict";
import app from "./app.js";
import serverless from "serverless-http";
module.exports.hello = serverless(app);
