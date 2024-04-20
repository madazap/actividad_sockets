import express, { urlencoded } from "express";
import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";
import Handlebars from "express-handlebars";
import { __dirname } from "./utils.js";

const app = express();
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/", viewsRouter );
app.use(express.json());
app.use(urlencoded({extended:true}));

// motor de plantillas
app.engine('handlebars', Handlebars.engine());
app.set('views', __dirname + '/views' );
app.set('view engine', 'handlebars');

app.listen(8080, () => {
  console.log("Servidor escuchando por puerto 8080");
});

