const bcrypt = require('bcrypt');

module.exports = (plainPassword) => {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(plainPassword, salt);

    return { salt, password };
}
