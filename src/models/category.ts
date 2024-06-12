import { categorySchema } from "@/schemas/category"
import { z } from "zod"

export type Category = {
    id: number
    title: string
    created_at: Date
    updated_at: Date
} & z.infer<typeof categorySchema>