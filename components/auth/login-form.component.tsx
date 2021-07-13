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
  email: string;
  password: string;
}

const defaultValues: FormData = {
  email: '',
  password: ''
};

const schema = z.object({
  email: z.string(),
  password: z.string().min(6)
});

export const LoginForm: FC = () => {
  const methods = useForm<FormData>({ defaultValues, resolver: zodResolver(schema) });
  const { control, handleSubmit } = methods;

  const handleSubmission = (e: FormEvent) => {
    e.preventDefault();

    handleSubmit(async (userData: FormData) => {
      console.log(userData);
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
            name='email'
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
          >
            Login
          </Button>
        </Flex>
      </Box>
    </FormProvider>
  );
};
