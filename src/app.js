import express, { urlencoded } from "express";
import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js";
import Handlebars from "express-handlebars";


const app = express();
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use(express.json());
app.use(urlencoded({extended:true}));
// motor de plantillas
app.engine('handlebar', Handlebars.engine());
app.set('views', '/views' );
app.set('view engine', 'handlebar');

app.listen(8080, () => {
  console.log("Servidor escuchando por puerto 8080");
});

