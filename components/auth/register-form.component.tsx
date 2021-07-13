import { FC, FormEvent } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  VisuallyHidden
} from '@chakra-ui/react';

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultValues: FormData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const schema = z
  .object({
    username: z.string().min(6),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
  })
  .refine(
    data => data.password === data.confirmPassword,
    { path: ['confirmPassword'] }
  );

export const RegisterForm: FC = () => {
  const methods = useForm<FormData>({ defaultValues, resolver: zodResolver(schema) });
  const { control, handleSubmit, reset } = methods;

  const handleSubmission = (e: FormEvent) => {
    e.preventDefault();

    handleSubmit(async (userData: FormData) => {
      console.log(userData);
    })(e);
  };

  const handleClearFields = () => {
    reset({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <FormProvider {...methods}>
      <Box as='form' onSubmit={handleSubmission}>
        <SimpleGrid
          p='19px 32px 30px 32px'
          bgColor='brand.100'
          columns={1}
          spacing={7}
        >
          <Controller
            name='username'
            control={control}
            render={
              ({
                fieldState: { error },
                field: { onChange, onBlur, value }
              }) => (
                <Box>
                  <VisuallyHidden>Username</VisuallyHidden>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      variant='flushed'
                      value={value}
                      onBlur={onBlur}
                      onChange={val => onChange(val)}
                      isInvalid={!!error}
                    />
                  </FormControl>
                </Box>
              )
            }
          />
          <Controller
            name='email'
            control={control}
            render={
              ({
                fieldState: { error },
                field: { onChange, onBlur, value }
              }) => (
                <Box>
                  <VisuallyHidden>Email Address</VisuallyHidden>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      variant='flushed'
                      value={value}
                      onBlur={onBlur}
                      onChange={val => onChange(val)}
                      isInvalid={!!error}
                    />
                  </FormControl>
                </Box>
              )
            }
          />
          <Controller
            name='password'
            control={control}
            render={
              ({
                fieldState: { error },
                field: { onChange, onBlur, value }
              }) => (
                <Box>
                  <VisuallyHidden>Password</VisuallyHidden>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      variant='flushed'
                      value={value}
                      onBlur={onBlur}
                      onChange={val => onChange(val)}
                      isInvalid={!!error}
                    />
                  </FormControl>
                </Box>
              )
            }
          />
          <Controller
            name='confirmPassword'
            control={control}
            render={
              ({
                fieldState: { error },
                field: { onChange, onBlur, value }
              }) => (
                <Box>
                  <VisuallyHidden>Repeat Password</VisuallyHidden>
                  <FormLabel>Repeat Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      variant='flushed'
                      value={value}
                      onBlur={onBlur}
                      onChange={val => onChange(val)}
                      isInvalid={!!error}
                    />
                  </FormControl>
                </Box>
              )
            }
          />
        </SimpleGrid>
        <Flex
          p='21px 32px'
          justifyContent='space-between'
          bgColor='brand.100'
          borderY='2px solid'
          bgImg='url(/assets/svgs/pattern-buttons.svg)'
          bgRepeat='repeat-x'
          borderColor='brand.150'
        >
          <Button fontSize='12px' variant='ghost' onClick={handleClearFields}>
            Clear Fields
          </Button>
          <Button
            type='submit'
            variant='outline'
            bgColor='brand.100'
            color='brand.200'
            borderColor='brand.200'
          >
            Create Account
          </Button>
        </Flex>
      </Box>
    </FormProvider>
  );
};
