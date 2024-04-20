import { Router } from "express";
import ProductManager from "../productManager.js";



const router = Router();
const productos = new ProductManager();


router.get( '/',  async (req, res)=>{

    try {
        const prods = await productos.getProducts();
        console.log("prods en router");
        console.log(prods);
        console.log(typeof(prods));
        res.render('home',prods);
        
    } catch (error) {
        console.log("Error en render de home");
         res.status(404).send({ error: `${error}` });
    }

})

export default router;