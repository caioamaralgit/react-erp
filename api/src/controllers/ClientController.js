const Client = require('../models/Client');

module.exports = {
    async index(request, response) {
        const clients = await Client.find();
        return response.json(clients);
    },

    async store(request, response) {
        const { name, cpf, address, phone } = request.body;

        const client = await Client.findOneAndUpdate({ cpf }, {
            $set: {
                name,
                cpf,
                address,
                phone
            }
        }, { new: true, upsert: true });

        return response.json(client);
    }
}
