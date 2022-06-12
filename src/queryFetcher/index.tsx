import axios from "axios";
import request from "../http";

export const getUserList = () => {
    return request.get("/user-list")
}
export const getUser = (userId: number) => {
    return request.get(`/user-list/${userId}`)
}