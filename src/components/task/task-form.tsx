import { taskSchema } from "@/schemas/task";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "../ui/form";
import { useTransition } from "react";
import { Button } from "../ui/button";

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
    startTransition(() => {
      onSubmitProp?.(values);
    });
  }

  return (
    <Form.Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Button disabled={isPending}>
          {defaultValuesProp ? "Salvar" : "Adicionar"}
        </Button>
      </form>
    </Form.Form>
  );
}
