import { Router } from "express";
import LecturaController from "../controllers/LecturaController.js";

const routes = Router()

const lecturaController = new LecturaController()

routes.post("/", lecturaController.createLectura)

routes.get("/", lecturaController.getLecturas)

routes.get("/:id", lecturaController.getLecturasPorSonda)



export default routes