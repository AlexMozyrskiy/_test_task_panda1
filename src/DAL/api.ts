import axios from "axios";
import { CommentTSType } from "../BLL/commonTSTypes";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export const API = {
    comments() {
        return axiosInstance.get<Array<CommentTSType>>("comments")
            .then(response => {
                return response.data;
            });
    },
}