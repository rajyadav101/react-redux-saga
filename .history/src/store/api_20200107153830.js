import { create } from "apisauce";

// Base API Init
const api = create({
    baseURL: "https://hn.algolia.com"
});
// Functions list init
let api = {};

func.getUser = async () => {
    try {
        const response = await api.get("/api/v1/search?query=redux");
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export default api;
