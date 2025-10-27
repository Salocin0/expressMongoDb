import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRouter from "./router/productRouter.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/product",productRouter)


app.get((req, res) => {
  res.status(404).json("404");
})

mongoose.connect(process.env.URLDB).then(() => {
  console.log("base de datos conectada:", process.env.URLDB);
  app.listen(PORT, () => {
    console.log("servidor escuchando en puerto:", PORT);
  });
}).catch((error)=>{
    console.log("error:",error)
});
