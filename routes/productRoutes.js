const { Router } = require("express");

const {
  getProducts, //obtener
  createProduct, //crear
  updateProduct, //actualizar
  deleteProduct // borrar 
} = require("../controllers/productController");

const productRouter = Router();// route es un metodo de router
//ruta product
productRouter.route("/")
    .get(getProducts)
    .post(createProduct);
//aca tomamos como referencia el ID, para hacer la actualizacion 
productRouter.route("/:id")
    .put(updateProduct) //recepcion del id pasado por parametro en la url.
    .delete(deleteProduct);


module.exports = productRouter;
