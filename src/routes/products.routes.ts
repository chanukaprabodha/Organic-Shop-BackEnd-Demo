import {Router} from "express";
import {
    deleteProduct,
    getAllProducts,
    getProductById,
    saveProduct,
    updateProduct
} from "../controllers/product.controller";

const productRouter: Router = Router();

// 1.Handle Requests to /api/products

// 1.1 GET all products
productRouter.get("/all", getAllProducts);

// 1.2 Save a new product
productRouter.post("/save", saveProduct);

// 1.3 Update an existing product
productRouter.put("/update/:id", updateProduct);

// 1.4 Delete a product
productRouter.delete("/delete/:id", deleteProduct);

// 1.5 Get a product by ID
productRouter.get("/:id", getProductById);

// 2. export the router
export default productRouter;