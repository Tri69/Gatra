import express, { Application } from "express";
import dotenv from "dotenv";
import Routers from "./routes/route";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();

const app:Application = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(Routers);
app.use(express.static(path.join(__dirname, "../public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(process.env.PORT_SERVER, ()=> {
	console.log("Server runing in port 5004");
})
