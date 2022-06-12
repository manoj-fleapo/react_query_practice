import axios from "axios";
import request from "https";

export const getUserList = () => {
    return axios.get("http://localhost:4500/user-list")
} 