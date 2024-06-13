import { useDeleteTask } from "@/service/mutations";
import { useTasks } from "@/service/queries";
import React from "react";

export const Tasks = () => {
  const { data } = useTasks();
  const { trigger } = useDeleteTask();
  
  const handleClick = (id: number) => {
    trigger({
        id: id
    }, {
        optimisticData: data && data.filter(task => task.id != id)
    })
  }
  return <div>{
    data?.map(task => (
        <div>
            <span>{task.title}</span>
            <button className="bg-red-500" onClick={() => handleClick(task.id)}>Delete</button>
        </div>
    ))}</div>;
};
