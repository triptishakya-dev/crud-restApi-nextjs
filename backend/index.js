import express from "express"
import userRoutes from "./routes/userRoutes.js"


const app= express();

const port = 8000;

 app.get("/" , (req,res) =>{
    res.send("hello");
 })

app.use(express.json());


app.use("/", userRoutes );






app.listen (port, () => {
    console.log("port is listening")
 });