const mongoose = require('mongoose');

module.exports = {
    connect: (dbuser, dbpass) => {
        if (!dbuser) {
            console.error("ERROR:", "dbuser required parameter not found");
            return;
        }

        if (!dbpass) {
            console.error("ERROR:", "dbpass required parameter not found");
            return;
        }

        return mongoose.connect(`mongodb://${dbuser}:${dbpass}@ds021671.mlab.com:21671/react-erp`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Mongoose:", "Connection established.");
        }).catch((error) => {
            console.error("Mongoose:", "Could not connect!");
            console.error("Error:", error.message);

            // Kill API process
            process.exit(1);
        });
    }
}