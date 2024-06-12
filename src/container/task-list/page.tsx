import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { NewTaskDialog } from "./components/new-task-dialog";
import { useTasks } from "@/service/queries";

export default function TaskPage() {
  const { data: tasks } = useTasks();

  return (
    <section className="container">
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bem Vindo!</h2>
            <p className="text-muted-foreground">
              Aqui está uma lista das suas tarefas para esse mês!
            </p>
          </div>

          <NewTaskDialog />
        </div>

        <DataTable data={tasks ?? []} columns={columns} />
      </div>
    </section>
  );
}
