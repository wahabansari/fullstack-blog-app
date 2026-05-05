import express from "express";
import http from "http";
import cors from "cors";

// Importing Routes
import postRoutes from "./routes/post.ts";

const app = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Subscribing Rouyes
app.use("/api", postRoutes);

// Listening Server
server.listen(process.env.PORT, () =>
  console.log("Server is runnnig on PORT: ", process.env.PORT),
);
