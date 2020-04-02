const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const minutesToExpire = 1;

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

        const token = jwt.sign(
            { id: user._id },
            process.env['JWT_SECRET'],
            { expiresIn: minutesToExpire * 60 }
        );

        return response.json({
            token,
            user: {
                _id: user._id,
                username: user.username
            }
        });
    }
}
