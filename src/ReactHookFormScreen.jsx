import * as React from 'react';
//import { Text, View, Button, TextInput } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();

export default function ReactHookForm() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
          style={{height: 50, width: 300, margin: 12, borderWidth: 1, padding: 10}}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      <br/>
      {errors.firstName && <>This is required.</>}
      <br/>
      <br/>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      <br/>
      <button title="Submit" onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
    
  );

  /*const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
        
      <input {...register("age")} />
      <p>{errors.age?.message}</p>
      
      <input type="submit" />
    </form>
  );*/

}