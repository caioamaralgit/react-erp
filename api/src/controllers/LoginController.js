const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    async auth(request, response) {
        const { username, password } = request.body;

        const user = await User.findOne({ username });

        if (!user) {
            return response.status(401).json({
                error: 'User not found'
            });
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return response.status(401).json({
                error: 'Invalid password'
            });
        }

        return response.json({
            user: {
                _id: user._id,
                username: user.username
            }
        });
    }
}
