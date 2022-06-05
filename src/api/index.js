import {get } from "../utils/request";

const api = {
    getMusicList(params) {
        return get("/api/v1/restserver/ting", params)
    }
}
export default api