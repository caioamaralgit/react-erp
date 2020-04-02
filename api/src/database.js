const mongoose = require('mongoose');

// Kill API process
function kill() {
    process.exit(1);
}

module.exports = {
    connect: async function (dbuser, dbpass) {
        if (!dbuser) {
            console.error("ERROR:", "dbuser required parameter not found");
            kill();
        }

        if (!dbpass) {
            console.error("ERROR:", "dbpass required parameter not found");
            kill();
        }

        return mongoose.connect(`mongodb://${dbuser}:${dbpass}@ds021671.mlab.com:21671/react-erp`, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).catch((error) => {
            console.error("Mongoose could not connect!");
            console.error("Error:", error.message);
            kill();
        });
    }
}
