import { FC } from 'react';
import { Container } from '@chakra-ui/react';

type Props = {
  pt?: string;
  pb?: string;
  zIndex?: number;
  first?: boolean;
}

export const Layout: FC<Props> = ({ first, pt, pb, zIndex, children }) => (
  <Container
    margin='0 auto'
    px={0}
    pt={first ? '160px' : pt}
    pb={pb}
    maxW='1650px'
    w='full'
    {...zIndex && {
      pos: 'relative',
      zIndex
    }}
  >
    {children}
  </Container>
);

Layout.defaultProps = {
  pt: '0px',
  pb: '0px',
  zIndex: 0,
  first: false
};
