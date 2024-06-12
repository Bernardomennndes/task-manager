import { TaskForm } from "@/components/task/task-form";
import { Button } from "@/components/ui/button";
import * as Drawer from "@/components/ui/drawer";
import { PlusIcon } from "@radix-ui/react-icons";

export function NewTaskDialog() {
  return (
    <Drawer.Drawer>
      <Drawer.DrawerTrigger asChild>
        <Button size="sm">
          <PlusIcon className="h-4 w-4 mr-2" /> Nova Tarefa
        </Button>
      </Drawer.DrawerTrigger>

      <Drawer.DrawerContent>
        <Drawer.DrawerHeader></Drawer.DrawerHeader>

        <div className="container max-w-[800px] py-4">
          <TaskForm
            onSubmit={(values) => {
              console.log(values);
            }}
          />
        </div>
      </Drawer.DrawerContent>
    </Drawer.Drawer>
  );
}
