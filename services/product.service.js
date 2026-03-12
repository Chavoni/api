const products = [];

class ProductService {

    static list() {
        return products;
    }

    static create(data) {
        const product = {
            id: products.length + 1,
            ...data
        };
        products.push(product);
        return product;
    }

    static update(id, data) {
        const index = products.findIndex(p => p.id == id);
        if (index === -1) throw new Error("Product not found");

        products[index] = { ...products[index], ...data };
        return products[index];
    }

    static remove(id) {
        const index = products.findIndex(p => p.id == id);
        if (index === -1) throw new Error("Product not found");

        return products.splice(index, 1);
    }
}

module.exports = ProductService;