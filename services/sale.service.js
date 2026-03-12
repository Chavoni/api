const sales = [];

class SaleService {

    static list() {
        return sales;
    }

    static create(data) {
        const sale = {
            id: sales.length + 1,
            ...data
        };
        sales.push(sale);
        return sale;
    }

    static update(id, data) {
        const index = sales.findIndex(s => s.id == id);
        if (index === -1) throw new Error("Sale not found");

        sales[index] = { ...sales[index], ...data };
        return sales[index];
    }

    static remove(id) {
        const index = sales.findIndex(s => s.id == id);
        if (index === -1) throw new Error("Sale not found");

        return sales.splice(index, 1);
    }
}

module.exports = SaleService;