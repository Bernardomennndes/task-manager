import { Tasks } from "@/models/task";
import useSWR from "swr";
import { ENDPOINTS } from "./backend-endpoints";

export function useTasks(){
    return useSWR<Tasks>(ENDPOINTS.TASKS)
}

