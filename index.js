import express from "express";
import setupDatabase from "./database";
import router from "./routes/main";
import seedDB from "./config/seed";
const app = express();

//connect database
setupDatabase();

//add seeder
seedDB();

//routes for api's
app.use('/v1',router);

app.listen(3000, () => {
    console.log(`server listening at http://localhost:${3000}`)
  })