const mongoose = require('mongoose');

module.exports = {
    connect: async function (dbuser, dbpass) {
        if (!dbuser) {
            console.error("ERROR:", "dbuser required parameter not found");
            return;
        }

        if (!dbpass) {
            console.error("ERROR:", "dbpass required parameter not found");
            return;
        }

        return await mongoose.connect(`mongodb://${dbuser}:${dbpass}@ds021671.mlab.com:21671/react-erp`, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}
