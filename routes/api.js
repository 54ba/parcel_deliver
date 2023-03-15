module.exports = app => {


    app.use('/api/bikers', require("./biker"));
    app.use('/api/parcels', require("./parcel"));
    app.use('/api/senders', require("./sender"));

}
