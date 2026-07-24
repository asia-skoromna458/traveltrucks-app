import axios from "axios";
import { Camper } from "../types/camper";


export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})
interface GetAllCampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}



export const getAllCamper = async (
    params:
        {
            page?: number;
            perPage?: number;
            location?: string;
            form?: string;
            engine?: string;
            transmission?: string;
        }): Promise<GetAllCampersResponse> => {
    const res = await api.get<GetAllCampersResponse>('/campers', {params});
    return res.data
}

export const getCamperById = async (id: string) => {
  const res = await api.get(`/campers/${id}`);
  return res.data;
};
