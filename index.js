import express from "express";
import mongoose from "mongoose";

import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import skillRouter from "./routes/skill.js";
import projectRouter from "./routes/project.js";

import portfolioRouter from "./routes/portfolio.js";
import servicesRouter from "./routes/services.js";
import testimonialRouter from "./routes/testimonial.js";
import educationRouter from "./routes/education.js";
import path from "path";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/users", userRouter);

app.use("/tour", tourRouter);
app.use("/skill", skillRouter);
app.use("/project", projectRouter);

app.use("/portfolio", portfolioRouter);
app.use("/education", educationRouter);
app.use("/services", servicesRouter);
app.use("/testimonial", testimonialRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Mern Stack  Portfolio  ");
});

const port = process.env.PORT || 8000;

mongoose
  .connect("mongodb://0.0.0.0:27017/html-website")
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
