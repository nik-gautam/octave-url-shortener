import path from "path";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import config from "./config";

// routes imports
import indexRoutes from "./routes/index";
import urlRoutes from "./routes/api/url";

const { MONGO_URI } = config;

const app = express();

// Bodyparser middlware
app.use(express.json());
// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan("dev"));

// mongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected!!"))
  .catch(err => console.log(err));

// serve routes
app.use("/", indexRoutes);
app.use("/api/url", urlRoutes);

console.log(__dirname);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

export default app;
