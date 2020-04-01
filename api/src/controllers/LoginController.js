const User = require('../models/User');
const bcryptPassword = require('../utils/bcryptPassword');

module.exports = {
    async auth(request, response) {
        const { username, password } = request.body;

        const user = await User.findOne({ username });

        if (!user) {
            return response.status(401).json({
                error: 'User not found'
            });
        }

        const validPassword = bcryptPassword.decrypt(password, user.password, user.salt);

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
