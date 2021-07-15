import { FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  VisuallyHidden
} from '@chakra-ui/react';

import { AuthCredential } from 'models';
import { login } from 'services';
import { appendNotificationMessages } from 'store/core';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  selectLoading
} from 'store/auth';

const defaultValues: AuthCredential = {
  identifier: '',
  password: ''
};

const schema = z.object({
  identifier: z.string(),
  password: z.string().min(6)
});

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectLoading);
  const methods = useForm<AuthCredential>({ defaultValues, resolver: zodResolver(schema) });
  const { control, handleSubmit } = methods;

  const handleSubmission = (e: FormEvent) => {
    e.preventDefault();

    handleSubmit(async (credential: AuthCredential) => {
      try {
        dispatch(loginStart());

        const user = await login(credential);

        const debounce = setTimeout(() => {
          dispatch(loginSuccess(user));
          dispatch(appendNotificationMessages({
            status: 'success',
            message: 'You are now logged in'
          }));

          clearTimeout(debounce);
        }, 1500);
      } catch (error) {
        dispatch(loginFailure());
        dispatch(appendNotificationMessages({
          status: 'error',
          message: error.message
        }));
      }
    })(e);
  };

  return (
    <FormProvider {...methods}>
      <Box as='form' onSubmit={handleSubmission}>
        <Flex
          p='24px 32px 30px 32px'
          h='365px'
          flexDir='column'
          w='full'
          bgColor='brand.100'
        >
          <Controller
            name='identifier'
            control={control}
            render={
              ({
                fieldState: { error },
                field: { onChange, onBlur, value }
              }) => (
                <Box my='18px'>
                  <VisuallyHidden>Email or Username</VisuallyHidden>
                  <FormLabel>Email or Username</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
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
                <Box my='18px'>
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
        </Flex>
        <Flex
          p='21px 32px'
          justifyContent='center'
          bgColor='brand.100'
          borderY='2px solid'
          bgImg='url(/assets/svgs/pattern-buttons.svg)'
          bgRepeat='repeat-x'
          borderColor='brand.150'
        >
          <Button
            type='submit'
            variant='outline'
            w='50%'
            bgColor='brand.100'
            color='brand.200'
            borderColor='brand.200'
            isLoading={authLoading}
          >
            Login
          </Button>
        </Flex>
      </Box>
    </FormProvider>
  );
};
