import { Task } from "@/models/task";
import useSWR from "swr";

export function useTasks() {
  return useSWR<Task[]>("/tasks", { fallbackData: [] });
}
