const clients = [];

class ClientService {

    static list() {
        return clients;
    }

    static create(data) {
        const client = {
            id: clients.length + 1,
            ...data
        };
        clients.push(client);
        return client;
    }

    static update(id, data) {
        const index = clients.findIndex(c => c.id == id);
        if (index === -1) throw new Error("Client not found");

        clients[index] = { ...clients[index], ...data };
        return clients[index];
    }

    static remove(id) {
        const index = clients.findIndex(c => c.id == id);
        if (index === -1) throw new Error("Client not found");

        return clients.splice(index, 1);
    }
}

module.exports = ClientService;