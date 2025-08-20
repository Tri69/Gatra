import express from "express";
import PageIndex from "../controllers/PageHome";
import PageRedirect from "../controllers/PageRedirect";
import GenerateLinkToken from "../controllers/GenerateLinkToken";

const Routers = express.Router();

Routers.get("/", PageIndex);
Routers.get("/:token", PageRedirect);
Routers.post("/link", GenerateLinkToken);

export default Routers; 