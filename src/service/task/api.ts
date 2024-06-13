import { taskSchema } from "@/schemas/task";
import z from "zod";
import { axiosInstance } from "../fetcher";
import { Task } from "@/models/task";

type TaskSchema = z.infer<typeof taskSchema>;

export const createTask = async (url: string, { arg }: { arg: TaskSchema }) => {
  await axiosInstance.post(url, {
    ...arg,
  });
};

export const editTask = async (
  url: string,
  { arg: { task, id } }: { arg: { task: TaskSchema; id: number } }
) => {
  return (
    await axiosInstance.patch(`${url}/${id}`, {
      ...task,
    })
  ).data;
};

export const deleteTask = async (
  url: string,
  { arg }: { arg: { id: number } }
) => {
  return (await axiosInstance.delete<Task>(`${url}/${arg.id}`)).data;
};
