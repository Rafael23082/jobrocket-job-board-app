import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
    withCredentials: true
})

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status == 401 && error.response.data == "You are not authenticated" && !error.config._retry){
            error.config._retry = true;
            try{
                await api.post("/auth/refresh");
                return api(error.config);
            }catch(err){
                console.log(err.message);
            }
        }
    }
)

export default api;