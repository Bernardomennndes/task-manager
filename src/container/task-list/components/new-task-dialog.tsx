import React from "react";

import { TaskForm } from "@/components/task/task-form";
import { Button } from "@/components/ui/button";
import * as Drawer from "@/components/ui/drawer";
import { useCreateTask } from "@/service/mutations";
import { PlusIcon } from "@radix-ui/react-icons";

export function NewTaskDialog() {
  const { trigger } = useCreateTask();

  const [open, setOpen] = React.useState(false);

  return (
    <Drawer.Drawer open={open} onOpenChange={setOpen}>
      <Drawer.DrawerTrigger asChild>
        <Button size="sm">
          <PlusIcon className="h-4 w-4 mr-2" /> Nova Tarefa
        </Button>
      </Drawer.DrawerTrigger>

      <Drawer.DrawerContent>
        <Drawer.DrawerHeader></Drawer.DrawerHeader>

        <div className="container max-w-[800px] py-8">
          <TaskForm
            onSubmit={async (values) => {
              trigger(values).then(() => {
                setOpen(false);
              });
            }}
          />
        </div>
      </Drawer.DrawerContent>
    </Drawer.Drawer>
  );
}
