import http from "../http-common";


class BikerDataService {



    // parcel operations 

    // A biker should be able to see a list of the parcels. #not picked up 
    getAvailableParcels(id) {
        return http.get(`/bikers/${id}/parcels`);
    }

    getPickedUpParcels(id) {
        return http.get(`/bikers/${id}/parcels/picked-up`);
    }


    getDeliveredParcels(id) {
        return http.get(`/bikers/${id}/parcels/delivered`);
    }


    // A biker should be able to pick up a parcel.
    // parcel cannot be picked up by other bikers.

    // updating pickup - deliver - cancel

    pickUpParcel(bikerId, parcelId) {
        return http.put(`/bikers/${bikerId}/parcels/${parcelId}/pickup`, data);
    }

    deliverParcel(bikerId, parcelId, data) {
        return http.put(`/bikers/${bikerId}/parcels/${parcelId}/deliver`, data);
    }

    /* 
        ------------------------------ enhancements -----------------------------------
    */


    // parcel operations 

    // getParcel(id) {
    //     return http.get(`/bikers/parcels/${id}`);
    // }

    // biker operations 

    // create(data) {
    //     return http.post("/bikers", data);
    // }

    // update(data) {
    //     return http.put("/bikers", data);

    // }

    // getAll() {
    //     return http.get("/bikers");
    // }

    // get(id) {
    //     return http.get(`/bikers/${id}`);
    // }


}

export default new BikerDataService();


