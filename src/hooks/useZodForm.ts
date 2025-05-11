import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, DefaultValues } from 'react-hook-form'
import z, { ZodSchema } from 'zod'

const useZodForm = <T extends ZodSchema>(
  schema: T,
  mutation: (data: z.infer<T>) => void,
  defaultValues?: DefaultValues<z.infer<T>>
) => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const onFormSubmit = handleSubmit(async (values) => mutation(values))

  return { register, watch, reset, onFormSubmit, errors }
}

export default useZodForm