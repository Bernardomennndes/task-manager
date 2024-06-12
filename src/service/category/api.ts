import { categorySchema } from "@/schemas/category";
import { z } from "zod";
import { axiosInstance } from "../fetcher";

type CategorySchema = z.infer<typeof categorySchema>

export const createCategory = async (
    url: string,
    { arg } : { arg: CategorySchema }
) => {
    await axiosInstance.post(url, {
        arg
    })
}


