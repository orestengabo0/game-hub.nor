import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '000050f989ac4f498d3d1ced7273c747'
    }
})