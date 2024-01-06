import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from './src/routers/index.js'
const app = express();

app.use(cors()); // allow a server or an API to indicate any origins (diff protocol , hostname, or port)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL)
     .then(() => {
          console.log("Mongodb connected !");
          server.listen(port, () => {
               console.log(`Server is running on port ${port}`);
          })
     })
     .catch((err) => {
          console.log({ err });
          process.exit(1)
     });

