const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    async index(request, response) {
        const users = await User.find();
        return response.json(users);
    },

    async store(request, response) {
        const { username, email, phone } = request.body;
        const password = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10));

        const user = await User.findOneAndUpdate({ username }, {
            $set: {
                username,
                email,
                phone,
                password
            }
        }, { new: true, upsert: true });

        return response.json(user);
    }
}
