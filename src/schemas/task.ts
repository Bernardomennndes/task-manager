import z from "zod";

export const taskSchema = z.object({
  category_id: z.number().optional(),
  title: z
    .string({
      message: "Título obrigatório",
    })
    .min(3, {
      message: "Título deve conter no mínimo 3 caracteres.",
    }),
  description: z.string().optional(),
  start: z.string().datetime(),
  end: z.string().datetime(),
  priority: z.number().optional(),
  parent_id: z.number().optional(),
});