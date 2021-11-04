import express from "express";
import setupDatabase from "./database";
import router from "./routes/main";
import seedDB from "./config/seed";
const app = express();

setupDatabase();
seedDB();
app.use('/v1',router);
app.listen(3000, () => {
    console.log(`server listening at http://localhost:${3000}`)
  })