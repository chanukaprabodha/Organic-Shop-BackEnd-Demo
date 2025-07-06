import {productList} from "../db/db";
import {Product} from "../model/product.model";

// GET all products service logic
export const getAllProducts = (): Product[] => {
    return productList;
}

// Save a new product service logic
export const saveProduct = (product: Product): Product => {
    productList.push(product);
    return product;
}

export const getProductById = (id: number): Product | undefined => {
    return productList.find(product => product.id === id);
}

export const updateProduct = (id: number, data: Product) => {
    const product = productList.find(product => product.id === id);

    if (!product) {
        return null;
    }

    // Update the product with the new data
    Object.assign(product, data);

    return product;
}

export const deleteProduct = (id: number) => {
    const index = productList.findIndex(product => product.id === id);

    if (index === -1) {
        return false;
    }

    // Remove the product from the list
    productList.splice(index, 1);
    return true;
}

export const validateProduct = (product: Product) => {
    if (!product.id || !product.name || !product.price || !product.currency || !product.image) {
        return "All fields are required.";
    }
    return null;
}