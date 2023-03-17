import http from "../http-common";


class ParcelDataService {
    create(data) {
        return http.post("/parcels", data);
    }

    getAll() {
        return http.get("/parcels");
    }

    get(id) {
        return http.get(`/parcels/${id}`);
    }



    /* 
        ------------------------------ enhancements -----------------------------------
    */


    // get(id) {
    //     return http.get(`/parcels/${id}`);
    // }

    // update(id, data) {
    //     return http.put(`/parcels/${id}`, data);
    // }

    // delete(id) {
    //     return http.delete(`/parcels/${id}`);
    // }

    // findByTitle(title) {
    //     return http.get(`/parcels?title=${title}`);
    // }
}

export default new ParcelDataService();

