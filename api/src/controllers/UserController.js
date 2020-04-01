const User = require('../models/User');
const bcryptPassword = require('../utils/bcryptPassword');

module.exports = {
    async index(request, response) {
        const users = await User.find();
        return response.json(users);
    },

    async store(request, response) {
        const { username, email, phone } = request.body;
        const { salt, hashedPassword: password } = bcryptPassword.encrypt(request.body.password);

        const user = await User.findOneAndUpdate({ username }, {
            $set: {
                username,
                email,
                phone,
                password,
                salt
            }
        }, { new: true, upsert: true });

        return response.json(user);
    }
}
