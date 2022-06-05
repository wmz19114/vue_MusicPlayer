import request from "../utils/request.js";

export const getMusicList = () => {
    return request({ url: '/v8/fcg-bin/fcg_v8_toplist_cp.fcg?type=top&topid=27', methods: 'get' })
}

// const api = {
//     getMusicList(params) {
//         return request("/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg", params)
//     }
// }
// export default api