import { taskSchema } from "@/schemas/task";
import { z } from "zod";

export type Task = {
  id: number;
  identifier: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  category: string;
  sub_tasks: Omit<Task, "sub_tasks">[];
} & z.infer<typeof taskSchema>;
