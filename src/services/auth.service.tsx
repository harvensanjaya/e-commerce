import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = async (
  username: string,
  password: string,
  callback: (success: boolean, token: string, res?: any) => void
) => {
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: username,
      password: password,
    });

    callback(true, response.data.token, response);
    return response.data;
  } catch (err: any) {
    const responseError = err?.response || err;

    callback(false, "", responseError); // send full error
    return null;
  }
};

export const getUser = async (token: string) => {
  try {
    const decode = jwtDecode(token);
    return decode;
  } catch (err: any) {
    const responseError = err?.response || err;
    console.log(responseError);
    return null;
  }
};
