import { FC } from 'react';
import { Box, Grid } from '@chakra-ui/react';

type Props = {
  hidden?: boolean;
}

export const NavItemActive: FC<Props> = ({ hidden }) => (
  <Grid
    templateColumns='repeat(4, 1fr)'
    w='full'
    h={hidden ? '0px' : '10px'}
    transform={`scale(${hidden ? 0 : 1})`}
    overflow='hidden'
    transition='0.1s height linear, 0.12s transform 0.1s linear'
  >
    <Box d='flex' w='100%' h='100%'>
      <svg xmlns='http://www.w3.org/2000/svg' width='5' height='10' viewBox='0 0 5 10'>
        <g><polygon fill='#ffffff' points='0 0 0 5 5 10 5 0 0 0' /></g>
      </svg>
      <Box
        flex='1'
        pr='2px'
        d='flex'
        alignItems='center'
        justifyContent='center'
        w='100%'
        h='100%'
        bgColor='#ffffff'
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'>
          <g><path fill='#e041e0' d='M0,0V6H6V0ZM5.1,5.1H.8V.8H5.1Z'/></g>
        </svg>
      </Box>
    </Box>
    <Box
      d='flex'
      alignItems='center'
      justifyContent='center'
      w='100%'
      h='100%'
      bgColor='#ffffff'
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='6.9' height='6.1' viewBox='0 0 6.9 6.1'>
        <g><path fill='#00c6ae' d='M3.5,0,0,6.1H6.9ZM1.3,5.4,3.5,1.6,5.7,5.4H1.3Z' /></g>
      </svg>
    </Box>
    <Box
      d='flex'
      alignItems='center'
      justifyContent='center'
      w='100%'
      h='100%'
      bgColor='#ffffff'
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='5.9' height='5.9' viewBox='0 0 5.9 5.9'>
       <g><polygon fill='#258fef' points='5.9 0.6 5.3 0 2.9 2.3 0.6 0 0 0.6 2.3 2.9 0 5.3 0.6 5.9 2.9 3.6 5.2 5.9 5.9 5.3 3.5 2.9 5.9 0.6'/></g>
      </svg>
    </Box>
    <Box d='flex' w='100%' h='100%'>
    <Box
        flex='1'
        pl='2px'
        d='flex'
        alignItems='center'
        justifyContent='center'
        w='100%'
        h='100%'
        bgColor='#ffffff'
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='6.2' height='6.2' viewBox='0 0 6.2 6.2'>
          <g><path fill='#df0024' d='M3.1,0A3.1,3.1,0,0,0,0,3.1,3.1,3.1,0,0,0,3.1,6.2,3.1,3.1,0,0,0,6.2,3.1,3.1,3.1,0,0,0,3.1,0Zm0,5.4A2.3,2.3,0,0,1,.8,3.1,2.3,2.3,0,0,1,3.1.8,2.3,2.3,0,0,1,5.4,3.1,2.4,2.4,0,0,1,3.1,5.4Z'/></g>
        </svg>
      </Box>
      <svg xmlns='http://www.w3.org/2000/svg' width='5' height='10' viewBox='0 0 5 10'>
        <g><polygon fill='#ffffff' points='0 10 5 5 5 0 0 0 0 10' /></g>
      </svg>
    </Box>
  </Grid>
);
