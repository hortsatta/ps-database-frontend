import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { Box, Heading } from '@chakra-ui/react';

import { parseCookies } from 'helpers';
import { Layout } from 'components/core';
import { UpsertGameForm } from 'components/game';

type Props = {
  token: string; 
}

const AddGamePage: FC<Props> = ({ token }) => {
  return (
    <Layout first>
      <Box m='0 auto 60px auto' maxW='1300px'>
        <Heading
          as='h2'
          pt='32px'
          px='32px'
          bgColor='brand.100'
          fontSize='18px'
          fontWeight={400}
          textTransform='uppercase'
          textAlign='center'
        >
          Add New Game
        </Heading>
        <UpsertGameForm token={token} />
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps  = async ({ req }) => {
  const { token }: any = parseCookies(req); console.log('token', token);

  return {
    props: { token: token || '' }
  }
};

export default AddGamePage;
