import axios from 'axios'

const instance = axios.create({
    baseURL: "/v2/posts"
})

export default instance;