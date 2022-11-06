import mongoose from "mongoose";
import { app } from "../index";

const CONNECTION_URL = "mongodb+srv://pablo:40142329@cluster0.nn5qyj7.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set("useFindAndModify", false);
