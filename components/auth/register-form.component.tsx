import { useState, FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  SimpleGrid
} from '@chakra-ui/react';

import { UserCredential } from 'models';
import { register } from 'services';
import { appendNotificationMessages } from 'store/core';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  selectLoading
} from 'store/auth';
import { FormLabel } from 'components/core';

type FormData = UserCredential & {
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
    { path: ['confirmPassword'], message: 'Password does not match' }
  );

export const RegisterForm: FC = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectLoading);
  const [loading, setLoading] = useState(false);

  const methods = useForm<FormData>({ defaultValues, resolver: zodResolver(schema) });
  const { control, handleSubmit, reset } = methods;

  const handleSubmission = (e: FormEvent) => {
    e.preventDefault();

    handleSubmit(async (formData: FormData) => {
      setLoading(true);

      try {
        const { username, email, password } = formData;
        const user = await register({ username, email, password });

        dispatch(loginStart());
        const debounce = setTimeout(() => {
          setLoading(false);
          dispatch(loginSuccess(user));
          dispatch(appendNotificationMessages({
            status: 'success',
            message: 'Your account has been created'
          }));

          clearTimeout(debounce);
        }, 1500);
      } catch (error) {
        setLoading(false);
        dispatch(loginFailure());
        dispatch(appendNotificationMessages({
          status: 'error',
          message: error.message
        }));
      }
    })(e);
  };

  const handleClearFields = () => reset(defaultValues);

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
                fieldState: { error, isTouched },
                field: { onChange, onBlur, value }
              }) => (
                <FormControl isInvalid={!!error && isTouched}>
                  <FormLabel label='Username' error={error} isTouched={isTouched} />
                  <Input
                    variant='flushed'
                    value={value}
                    onBlur={onBlur}
                    onChange={val => onChange(val)}
                    isInvalid={!!error}
                  />
                </FormControl>
              )
            }
          />
          <Controller
            name='email'
            control={control}
            render={
              ({
                fieldState: { error, isTouched },
                field: { onChange, onBlur, value }
              }) => (
                <FormControl isInvalid={!!error && isTouched}>
                  <FormLabel label='Email' error={error} isTouched={isTouched} />
                  <Input
                    type='email'
                    variant='flushed'
                    value={value}
                    onBlur={onBlur}
                    onChange={val => onChange(val)}
                    isInvalid={!!error}
                  />
                </FormControl>
              )
            }
          />
          <Controller
            name='password'
            control={control}
            render={
              ({
                fieldState: { error, isTouched },
                field: { onChange, onBlur, value }
              }) => (
                <FormControl isInvalid={!!error && isTouched}>
                  <FormLabel label='Password' error={error} isTouched={isTouched} />
                  <Input
                    type='password'
                    variant='flushed'
                    value={value}
                    onBlur={onBlur}
                    onChange={val => onChange(val)}
                    isInvalid={!!error}
                  />
                </FormControl>
              )
            }
          />
          <Controller
            name='confirmPassword'
            control={control}
            render={
              ({
                fieldState: { error, isTouched },
                field: { onChange, onBlur, value }
              }) => (
                <FormControl isInvalid={!!error && isTouched}>
                  <FormLabel label='Repeat Password' error={error} isTouched={isTouched} />
                  <Input
                    type='password'
                    variant='flushed'
                    value={value}
                    onBlur={onBlur}
                    onChange={val => onChange(val)}
                    isInvalid={!!error}
                  />
                </FormControl>
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
            isLoading={loading || authLoading}
          >
            Create Account
          </Button>
        </Flex>
      </Box>
    </FormProvider>
  );
};
