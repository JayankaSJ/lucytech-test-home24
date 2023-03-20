import axios from "axios";
import { HttpConfig } from "../config";

export async function executeApiCall(request: unknown) {
    const config = Object.assign({}, HttpConfig, request);
    const instance = axios.create(config);
    const response = await instance.request(config);
    return response.data.data;
}
