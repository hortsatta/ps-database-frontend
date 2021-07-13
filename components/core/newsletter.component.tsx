import { FC, FormEvent } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  VisuallyHidden
} from '@chakra-ui/react';

type FormData = { email: string; }

const defaultValues: FormData = { email: '' };
const schema = z.object({ email: z.string().email() });

export const Newsletter: FC = () => {
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
      <Box d='flex' alignItems='flex-end'>
        <Heading
          as='h4'
          mr='32px'
          mb='-7px'
          d='flex'
          flexDir='column'
          fontSize='24px'
          textTransform='uppercase'
        >
          <Text as='span' fontSize='14px' fontWeight={400}>
            Subscribe to Our
          </Text>
          Newsletter
        </Heading>
        <Box
          as='form'
          d='flex'
          alignItems='flex-end'
          flex={1}
          onSubmit={handleSubmission}
        >
          <Controller
            name='email'
            control={control}
            render={
              ({
                fieldState: { error },
                field: { onChange, onBlur, value }
              }) => (
                <Flex mr='8px' flex={1}>
                  <VisuallyHidden>Email Address</VisuallyHidden>
                  <FormControl>
                    <Input
                      _placeholder={{
                        color: 'rgba(255,255,255,0.9)'
                      }}
                      placeholder='Email Address'
                      variant='flushed'
                      value={value}
                      onBlur={onBlur}
                      onChange={val => onChange(val)}
                      isInvalid={!!error}
                    />
                  </FormControl>
                </Flex>
              )
            }
          />
          <Flex>
            <Button
              type='submit'
              variant='outline'
              colorScheme='gray'
              h='30px'
            >
              Sign Me Up
            </Button>
          </Flex>
        </Box>
      </Box>
    </FormProvider>
  );
};
