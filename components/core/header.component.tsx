import { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  Heading,
  Link as CLink,
  Text
} from '@chakra-ui/react';

import { checkLoginSession, getModuleConfig } from 'services';
import { selectModuleConfig, selectModuleConfigList, setModuleConfig } from 'store/core';
import {
  checkLoginSessionFailure,
  checkLoginSessionStart,
  checkLoginSessionSuccess
} from 'store/auth';
import { Nav } from './nav.component';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const moduleConfig = useSelector(selectModuleConfig);
  const modules = useSelector(selectModuleConfigList);

  // Check if user in signed in
  useEffect(() => {
    dispatch(checkLoginSessionStart());

    const checkSession = async () => {
      try {
        const user = await checkLoginSession();
        const debounce = setTimeout(() => {
          dispatch(checkLoginSessionSuccess(user));
          clearTimeout(debounce);
        }, 1500);
      } catch (error) {
        dispatch(checkLoginSessionFailure());
      }
    };

    checkSession();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (modules.length) { return; }

    const fetchModuleConfig = async () => {
      try {
        const moduleConfig = await getModuleConfig();
        dispatch(setModuleConfig(moduleConfig));
      } catch (error) {
        console.log(error);
      }
    }

    fetchModuleConfig();
  }, [modules, dispatch]);

  return (
    <Box
      as='header'
      pos='fixed'
      top={0}
      left={0}
      d='flex'
      justifyContent='space-between'
      alignItems='center'
      h='80px'
      w='full'
      px={6}
      py={4}
      bgColor='#0a0a0a'
      bgImg='url(/assets/svgs/header-bg.svg)'
      bgRepeat='repeat-x'
      zIndex={999}
    >
      <Box d='flex' alignItems='center' h='full'>
        <Box mr='14px' d='flex'>
          <Image src='/assets/svgs/ps-logo.svg' alt='logo' width={59} height={46} />
        </Box>
        <Link href='/' passHref>
          <CLink
            d='flex'
            alignItems='center'
            _hover={{ textDecor: 'none' }}
            _focus={{ textDecor: 'none' }}
          >
            <Box mr='24px' d='flex'>
              <Image src='/assets/svgs/logo.svg' alt='logo' width={167} height={42} />
            </Box>
            <Heading
              as='h1'
              d='flex'
              flexDir='column'
              h='full'
              color='#ffffff'
              fontSize='30px'
              textTransform='uppercase'
              lineHeight='1'
            >
              PlayStation
              <Text as='span' fontSize='0.58em' fontWeight='normal' lineHeight='1.2'>
                Database
              </Text>
            </Heading>
          </CLink>
        </Link>
      </Box>
      <Nav menus={modules.filter(module => !module.isMenuHidden)} moduleConfig={moduleConfig} />
    </Box>
  );
};
