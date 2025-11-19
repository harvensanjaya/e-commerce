import axios from "axios";

export const login = async (email: string, password: string) => {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
        email: email,
        password: password,
    });
    return response.data;
};