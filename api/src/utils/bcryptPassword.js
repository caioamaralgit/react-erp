const bcrypt = require('bcrypt');

module.exports = {
    encrypt: (password) => {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        return { hashedPassword, salt };
    },

    decrypt: (password, hashedPassword, salt) => {
        return hashedPassword === bcrypt.hashSync(password, salt);
    }
}
