import axios from "axios"

const instance = axios.create({
    baseURL: "https://res.cloudinary.com/dcwka06ph/image/upload/v1669344948/Website_project/logo_mwaet4.jpg"
})

export default instance