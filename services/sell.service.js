const sellers = [];

class SellerService {

    static list() {
        return sellers;
    }

    static create(data) {
        const seller = {
            id: sellers.length + 1,
            ...data
        };
        sellers.push(seller);
        return seller;
    }

    static update(id, data) {
        const index = sellers.findIndex(s => s.id == id);
        if (index === -1) throw new Error("Seller not found");

        sellers[index] = { ...sellers[index], ...data };
        return sellers[index];
    }

    static remove(id) {
        const index = sellers.findIndex(s => s.id == id);
        if (index === -1) throw new Error("Seller not found");

        return sellers.splice(index, 1);
    }
}

module.exports = SellerService;