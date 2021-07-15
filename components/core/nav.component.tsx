import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Box, UnorderedList } from '@chakra-ui/react';
import Confetti from 'react-dom-confetti';

import { Module, ModuleConfig } from 'models';
import { selectCurrentUser, selectIsUserLoggedIn } from 'store/auth';
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
  const router = useRouter();
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const [fire, setFire] = useState(false);
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
        {(!isUserLoggedIn && menuRegister) && (
          <NavItem key={menuRegister.name} item={menuRegister} onClick={handleFireConfetti}>
            <Confetti active={fire} config={confettiConfig} />
          </NavItem>
        )}
        {(!isUserLoggedIn && menuLogin) && <NavItem key={menuLogin.name} item={menuLogin} />}
        {(isUserLoggedIn && menuAccount) && (
          <NavItem key={menuAccount.name} item={{ ...menuAccount, label: currentUser.username }} />
        )}
      </UnorderedList>
    </Box>
  );
};