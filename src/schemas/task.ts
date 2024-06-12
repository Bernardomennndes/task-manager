import z from "zod";

export const taskSchema = z.object({
  // category: z.enum(["health"]).optional(),
  category: z.string().optional(),
  title: z
    .string({
      message: "Título obrigatório",
    })
    .min(3, {
      message: "Título deve conter no mínimo 3 caracteres.",
    }),
  description: z.string().optional(),
  start: z.string().datetime({
    message: "Selecione um horário de início.",
  }),
  end: z.string().datetime({
    message: "Selecione um horário de fim.",
  }),
  priority: z.enum(["low", "medium", "high"]),
  parent_id: z.number().optional(),
});
