import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import language from "./routes/language.js";
import languagename from "./routes/languagename.js";

//rest object
const app = express();

dotenv.config();
// connectDB();

//routes
app.use("/exercise", language);
app.use("/userlang", languagename);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

//PORT
const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
