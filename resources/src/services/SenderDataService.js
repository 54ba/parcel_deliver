import http from "../http-common";


class SenderDataService {

    // parcel operations 
    // A sender should be able to see the status of his parcels.
    getParcelsByStatus(id, status) {
        return http.get(`/senders/${id}/parcels/${status}`);
    }

    // A sender should be able to create a parcel to be delivered by specifying pick-up and drop-off 
    // address (should be just a text)
    createParcel(id, data) {

        // data_schema = {
        //     pick_up: 'string',
        //     drop_off: 'string'
        // }

        return http.post(`/senders/${id}/parcels`, data);
    }



    /* 
        ------------------------------ enhancements -----------------------------------
    */

    // parcel operations 

    // getParcel(id) {
    //     return http.get(`/senders/parcels/${id}`);
    // }

    // updateParcelStatus(data) {
    //     return http.put(`/senders/parcels`, data);
    // }

    // cancelParcel(data) {
    //     return http.put(`/senders/parcels`, data);
    // }

    // assignParcel(data) {
    //     return http.put(`/senders/parcels`, data);
    // }

    // deleteParcel(data) { 
    //     return http.post("/senders", data);
    // }

    // create(data) {
    //     return http.post("/senders", data);
    // }

    // update(data) {
    //     return http.put("/senders", data);
    // }

    // sender operations

    // getAll() {
    //     return http.get("/senders");
    // }

    // get(id) {
    //     return http.get(`/senders/${id}`);
    // }




}

export default new SenderDataService();


