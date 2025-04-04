'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z.string().min(6, {message: 'Пароль повинен містити мінімум 6+ символів'}),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'], // вказуємо, до якого поля відноситься помилка
    message: 'Паролі не співпадають',
  });
type PasswordSchema = z.infer<typeof formSchema>;

export function PasswordForm() {
  // 1. Define your form.
  const form = useForm<PasswordSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: PasswordSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-[320px] p-4 border rounded-xl">
        <FormField
          control={form.control}
          name="currentPassword"
          render={({field}) => (
            <FormItem>
              <FormLabel>Старий пароль</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({field}) => (
            <FormItem>
              <FormLabel>Новий пароль</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({field}) => (
            <FormItem>
              <FormLabel>Підтвердити новий пароль</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Зберегти зміни</Button>
      </form>
    </Form>
  );
}
