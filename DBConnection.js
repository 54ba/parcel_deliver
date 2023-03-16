const dbConfig = require("./config/db.config.js");

module.exports = {
    mongoConnect: () => {
        const mongoose = require("mongoose");
        localUri = dbConfig.url || "mongodb://127.0.0.1:27017/parcel_deliver_db";
        return mongoose.connect(localUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        });
    }
};


