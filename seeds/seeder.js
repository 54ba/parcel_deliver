
const { senders,
    parcels,
    bikers } = require('./seederData');

const { Parcel, Sender, Biker } = require('../models');

const { mongoConnect } = require("../DBConnection");

//mongo handler
try {
    mongoConnect().then(() => {
        console.log("connected to mongo");

        Sender.deleteMany({}).then(() => {
            console.log("senders deleted");

            Sender.insertMany(senders).then(() => {
                console.log("senders seeded");

                Biker.deleteMany({}).then(() => {
                    console.log("bikers deleted");

                    Biker.insertMany(bikers).then(() => {
                        console.log("bikers seeded");

                        Parcel.deleteMany({}).then(() => {
                            console.log("parcels deleted");

                            Parcel.insertMany(parcels).then(() => {
                                console.log("parcels seeded");
                                process.exit();

                            });
                        });
                    });

                });
            });
        });

    });



} catch (e) {
    console.log(e.message);
}



