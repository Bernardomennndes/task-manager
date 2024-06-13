import { taskSchema } from "@/schemas/task";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "../ui/form";
import { useTransition } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { FormField } from "../ui/form";
import { priorities } from "@/lib/labels";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

type FormValues = z.infer<typeof taskSchema>;

interface TaskFormProps {
  onSubmit?: (values: FormValues) => void;
  defaultValues?: Partial<FormValues>;
}

export function TaskForm(props: TaskFormProps) {
  const { defaultValues: defaultValuesProp, onSubmit: onSubmitProp } = props;

  const form = useForm<FormValues>({
    defaultValues: defaultValuesProp,
    resolver: zodResolver(taskSchema),
  });

  const [isPending, startTransition] = useTransition();

  function onSubmit(values: FormValues) {
    console.log(values)
    // startTransition(() => {
    //   onSubmitProp?.(values);
    // });
  }

  return (
    <Form.Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Título</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="Título" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Descrição</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="Descrição" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Categoria</Form.FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <Form.FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria da tarefa." />
                  </SelectTrigger>
                </Form.FormControl>
                <SelectContent>
                  {priorities.map((item) => (
                    <SelectItem value={item.value}>
                      <div className="flex min-w-[140px]">
                        <item.icon className="mr-2 h-4 w-4"/>
                        {item.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Form.FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Prioridade</Form.FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <Form.FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o nível de prioridade da tarefa." />
                  </SelectTrigger>
                </Form.FormControl>
                <SelectContent>
                {priorities.map((item) => (
                    <SelectItem value={item.value}>
                      <div className="flex min-w-[140px]">
                        <item.icon className="mr-2 h-4 w-4"/>
                        {item.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Form.FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="start"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Data de Início</Form.FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Form.FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </Form.FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={new Date(field.value)}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </Form.FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Data de Fim</Form.FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Form.FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </Form.FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={new Date(field.value)}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(form.watch("start"))
                    }
                  />
                </PopoverContent>
              </Popover>
            </Form.FormItem>
          )}
        />
        <Button disabled={isPending}>
          {defaultValuesProp ? "Salvar" : "Adicionar"}
        </Button>
      </form>
    </Form.Form>
  );
}
