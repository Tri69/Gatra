import express, { Router } from "express";
import PageIndex from "../controllers/PageHome";
import PageRedirect from "../controllers/PageRedirect";
import GenerateLinkToken from "../controllers/GenerateLinkToken";

const Routers:Router = express.Router();

Routers.get("/", PageIndex);
Routers.post("/link/get", GenerateLinkToken);
Routers.get("/:token", PageRedirect);



export default Routers; 

