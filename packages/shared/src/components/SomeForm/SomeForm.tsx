import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const userFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string(),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

const SomeForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  console.log('form errors ', errors);

  const onSubmit: SubmitHandler<UserFormSchema> = (data) => {
    console.log('onSubmit data: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <TextField {...field} />}
        />
        {errors.firstName?.message && (
          <div style={{ color: 'red' }}>{errors.firstName?.message}</div>
        )}
      </div>
      <div>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <TextField {...field} />}
        />
        {errors.lastName?.message && <div style={{ color: 'red' }}>{errors.lastName?.message}</div>}
      </div>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextField {...field} />}
        />
        {errors.email?.message && <div style={{ color: 'red' }}>{errors.email?.message}</div>}
      </div>
      <div>
        <Button type="submit">Submit Form</Button>
      </div>
    </form>
  );
};

export default SomeForm;
