const dbConfig = require("./config/db.config.js");
let localUrl = dbConfig.url || "mongodb://127.0.0.1:27017/parcel_deliver_db";
module.exports = {
    mongoConnect: () => {
        const mongoose = require("mongoose");

        return mongoose.connect(dbConfig.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // useFindAndModify: false,
            // useCreateIndex: true
        });
    }
};


