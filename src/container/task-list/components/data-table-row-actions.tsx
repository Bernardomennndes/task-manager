import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Task } from "@/models/task";
import { useDeleteTask, useEditTask } from "@/service/mutations";
import * as Drawer from "@/components/ui/drawer";
import { TaskForm } from "@/components/task/task-form";
import { useState } from "react";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = row.original as Task;
  const [showDialog, setShowDialog] = useState(false);
  const { trigger: editTrigger } = useEditTask();
  const { trigger: deleteTrigger } = useDeleteTask();

  return (
    <>
      <Drawer.Drawer open={showDialog} onOpenChange={setShowDialog}>
        <Drawer.DrawerContent>
          <Drawer.DrawerHeader></Drawer.DrawerHeader>
          <div className="container max-w-[800px] py-4">
            <TaskForm
              defaultValues={{
                category: task.category,
                description: task.description,
                end: task.end,
                priority: task.priority,
                start: task.start,
                title: task.title,
              }}
              onSubmit={(values) => {
                editTrigger({
                  id: task.id,
                  task: {
                    end: values.end,
                    priority: values.priority,
                    start: values.start,
                    title: values.title,
                    category: values.category,
                    description: values.description,
                    parent_id: values.parent_id,
                  },
                }).then(() => setShowDialog(false));
              }}
            />
          </div>
        </Drawer.DrawerContent>
      </Drawer.Drawer>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={() => setShowDialog(!showDialog)}>
            Editar
          </DropdownMenuItem>
          {/* <DropdownMenuItem>Favorite</DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive"
            onClick={() => {
              deleteTrigger({ id: task.id });
            }}
          >
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
