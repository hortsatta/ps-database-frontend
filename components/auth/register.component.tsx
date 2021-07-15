import { FC } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image as CImage,
} from '@chakra-ui/react';
import { RegisterForm } from './register-form.component';

type FormProps = {
  onToggle: () => void;
}

export const Register: FC<FormProps> = ({ onToggle }) => (
  <Flex w='full' flexDir='column' justifyContent='center' alignItems='center'>
    <Box
      pos='relative'
      w='100%'
      maxW='600px'
      borderTop='2px solid'
      borderRight='2px solid'
      borderColor='brand.150'
    >
      <CImage
        src='/assets/pngs/register.png'
        alt='register'
        pos='absolute'
        bottom={0}
        left='-305px'
        w='305px'
        h='488px'
      />
      <Heading
        as='h2'
        pt='24px'
        px='32px'
        bgColor='brand.100'
        fontSize='18px'
        fontWeight={400}
        textTransform='uppercase'
        textAlign='center'
      >
        Registration
      </Heading>
      <RegisterForm />
    </Box>
    <Button
      variant='link'
      mt='22px'
      fontSize='11px'
      onClick={onToggle}
    >
      I already have an account, sign me in.
    </Button>
  </Flex>
);
