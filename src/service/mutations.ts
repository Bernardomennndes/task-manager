import useSWRMutation from "swr/mutation";
import { useTasks } from "./queries";
import { ENDPOINTS } from "./backend-endpoints";
import { createTask, deleteTask, editTask } from "./task/api";

export function useCreateTask(){
    const { mutate } = useTasks();
    return useSWRMutation(ENDPOINTS.TASKS, createTask, {
        onError(){
            console.error("Erro ao processar requisição.")
        },
        onSuccess(){
            mutate();
        }
    })
}

export function useEditTask(){
    const { mutate } = useTasks();
    return useSWRMutation(ENDPOINTS.TASKS, editTask, {
        onError(){
            console.error("Erro ao processar requisição.")
        },
        onSuccess(){
            mutate();
        }
    })
}

export function useDeleteTask(){
    const { mutate } = useTasks();
    return useSWRMutation(ENDPOINTS.TASKS, deleteTask, {
        onError(){
            console.error("Erro ao processar requisição.")
        },
        onSuccess(){
            mutate();
        }
    })
}