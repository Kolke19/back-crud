const { findById } = require("../models/Product");
const Product = require("../models/Product");


//CONTROLADORES 
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ ok: true, products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Algo salio mal" });
  }
};
//javi se la come doblada
exports.createProduct = async (req, res) => {
  try {
    const product = new Product({ ...req.body });
    const savedProduct = await product.save();
    return res
      .status(201)
      .json({
        message: "El producto se cargo correctamente",
        product: savedProduct,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "El servidor ha fallado" });
  }
};

exports.updateProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {//"!"entra a la condicion si es null 0 o undefined
            return res.status(404).json({ok:false, message: 'No se encontro ningun producto con esa id'});
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).json({ok: true, product: updateProduct})
    } catch (error) {
        console.log(error);
        res.status(500).json( {message: 'El servidor ha fallado'} )
    }
}

exports.deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const productDeleted = await Product.findById(id)//busca y encontra el id del product y alamac en la const
        await Product.findByIdAndDelete(id)//
        return res.status(200).json ({ok:true, message:`el producto ${id} fue eliminado con exitos`,
         productDeleted:productDeleted})
    } catch{

        return res.status(500).json ({ok:false, message:"no se encontro ningun producto con esa id" })
        
    }
}