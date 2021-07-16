import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Box,
  Link as CLink,
  Image as CImage,
  ListItem,
  Progress,
  UnorderedList
} from '@chakra-ui/react';
import Confetti from 'react-dom-confetti';

import { Module, ModuleConfig } from 'models';
import {
  logoutStart,
  logoutSuccess,
  selectCurrentUser,
  selectIsUserLoggedIn,
  selectLoading
} from 'store/auth';
import { UserAccountMenu } from '../user-account';
import { NavItem } from './nav-item.component';

type Props = {
  menus: Module[];
  moduleConfig: ModuleConfig;
}

const confettiConfig = {
  spread: 360,
  startVelocity: 20,
  colors: [
    '#1048a0',
    '#006fe8',
    '#fcae12',
    '#00c6ae',
    '#df0024',
    '#c33ece'
  ]
};

export const Nav: FC<Props> = ({ menus, moduleConfig }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [fire, setFire] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const loading = useSelector(selectLoading);

  const menuRegister = moduleConfig?.register || null; 
  const menuLogin = moduleConfig?.login  || null; 
  const menuAccount = moduleConfig?.account  || null;

  const checkRoute = (path: string) => (
    router.asPath === path
  );

  const handleFireConfetti = () => {
    setFire(true);
    const debounce = setTimeout(() => {
      setFire(false);
      clearTimeout(debounce);
    }, 0);
  };

  const handleUserAccountToggle = (open: boolean) => {
    setOpenAccount(open);
  };

  const handleLogout = () => {
    dispatch(logoutStart());

    const debounce = setTimeout(() => {
      dispatch(logoutSuccess());
      clearTimeout(debounce);
    }, 1500);
  };

  return (
    <Box as='nav'>
      <UnorderedList
        d='flex'
        listStyleType='none'
        fontSize='1rem'
        textTransform='uppercase'
      >
        {menus.map((menu: Module) => (
          <NavItem
            key={menu.name}
            item={menu}
            active={checkRoute(menu.path)}
          />
        ))}
        {loading
          ? (
            <ListItem className='menu-item' d='flex' alignItems='center' w='279px'>
              <Progress w='100%' size='xs' isIndeterminate />
            </ListItem>
          )
          : (<>
            {(!isUserLoggedIn && menuRegister) && (
              <NavItem key={menuRegister.name} item={menuRegister} onClick={handleFireConfetti}>
                <Confetti active={fire} config={confettiConfig} />
              </NavItem>
            )}
            {(!isUserLoggedIn && menuLogin) && <NavItem key={menuLogin.name} item={menuLogin} />}
            {(isUserLoggedIn && menuAccount) && (
              <NavItem key={menuAccount.name} item={menuAccount} empty>
                <CLink
                  w='100%'
                  p='4px 18px'
                  bgColor='#232323'
                  color='#fcae12'
                  fontFamily='Clonoid'
                  fontSize='10px'
                  textAlign='center'
                  lineHeight={1}
                  border='2px solid'
                  borderColor='brand.200'
                  borderRadius='999px'
                  whiteSpace='nowrap'
                  variant='outline'
                  onClick={() => handleUserAccountToggle(true)}
                >
                  <CImage
                    src='/assets/svgs/user-robot.svg'
                    alt='account'
                    mr='8px'
                    mt='-2px'
                    d='inline-block'
                    w='14px'
                    h='14px'
                    boxSizing='content-box'
                  />
                  {currentUser.username}
                </CLink>
                <UserAccountMenu
                  open={openAccount}
                  onClose={() => handleUserAccountToggle(false)}
                  onLogout={handleLogout}
                />
              </NavItem>
            )}
          </>)
        }
      </UnorderedList>
    </Box>
  );
};