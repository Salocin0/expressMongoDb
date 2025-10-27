import express from "express"
import * as productController from "../controller/productController.js"
//   /api/product
const productRouter = express.Router()

productRouter.post("/",productController.crear)

productRouter.get("/",productController.obtenerTodos)

productRouter.get("/:id",productController.obtenerUno)

productRouter.put("/:id",productController.actualizar)

productRouter.delete("/:id",productController.eliminar)

productRouter.put("/habilitar/:id",productController.habilitar)

export default productRouter