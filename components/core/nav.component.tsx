import { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, UnorderedList } from '@chakra-ui/react';

import { Module, ModuleConfig } from 'models';
import { NavItem } from './nav-item.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsUserLoggedIn } from 'store/auth';

type Props = {
  menus: Module[];
  moduleConfig: ModuleConfig;
}

export const Nav: FC<Props> = ({ menus, moduleConfig }) => {
  const router = useRouter();
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const menuRegister = moduleConfig?.register || null; 
  const menuLogin = moduleConfig?.login  || null; 
  const menuAccount = moduleConfig?.account  || null; 

  const checkRoute = (path: string) => (
    router.asPath === path
  );

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
        {(!isUserLoggedIn && menuRegister) && <NavItem key={menuRegister.name} item={menuRegister} />}
        {(!isUserLoggedIn && menuLogin) && <NavItem key={menuLogin.name} item={menuLogin} />}
        {(isUserLoggedIn && menuAccount) && (
          <NavItem key={menuAccount.name} item={{ ...menuAccount, label: currentUser.username }} />
        )}
      </UnorderedList>
    </Box>
  );
};