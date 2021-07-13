import { FC } from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';

type Props = ContainerProps & {
  first?: boolean;
}

export const Layout: FC<Props> = ({ pt, pb, h, zIndex, first, children }) => (
  <Container
    h={h}
    pos='relative'
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
