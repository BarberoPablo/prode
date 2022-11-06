import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import teamRoutes from "./routes/team/team.routes.js";
import groupRoutes from "./routes/group/group.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(teamRoutes);
app.use(groupRoutes);
//AGERGAR MATCH TAMBIEN

const CONNECTION_URL = "mongodb+srv://pablo:40142329@cluster0.nn5qyj7.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;
// Para poder entender los campos de un formulario de un post
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => {
    console.log(error.message);
  });
