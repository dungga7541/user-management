import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import users from "./routes/users.js";
const app =express();
const PORT= process.env.PORT ||9000
const URI=
"mongodb+srv://admin:KGwUysWFplrysScH@cluster0.nabruxi.mongodb.net/?retryWrites=true&w=majority"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true,limit:'30mb' }));
app.use(cors());

app.use("/",users);
app.get("/",(req,res)=>res.send("connect to mongodb server"));
app.all("*",(req,res)=>res.send(" that Route doesn't exist"))

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});