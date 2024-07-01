import { Router } from "express";
import PalabrasController from "../controllers/PalabrasController.js";

const routes = Router()

const palabrasController = new PalabrasController()

routes.post("/", palabrasController.creataPalabra)

routes.get("/", palabrasController.getPalabras)

routes.delete("/:palabra", palabrasController.deletePalabra)

routes.get("/:cantidad", palabrasController.getCantidadPalabras)



export default routes