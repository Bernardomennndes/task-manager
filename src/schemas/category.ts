import z from 'zod'

export const categorySchema = z.object({
    title: z.string({
        message: "Título obrigatório."
    }).min(4, {
        message: "Título deve conter no mínimo 4 caracteres."
    })
})