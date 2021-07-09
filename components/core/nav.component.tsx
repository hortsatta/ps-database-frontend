import { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, UnorderedList } from '@chakra-ui/react';

import { Module, ModuleConfig } from 'models';
import { NavItem } from './nav-item.component';

type Props = {
  menus: Module[];
  moduleConfig: ModuleConfig;
}

export const Nav: FC<Props> = ({ menus, moduleConfig }) => {
  const router = useRouter();
  const menuRegister = moduleConfig?.register || null; 
  const menuLogin = moduleConfig?.login  || null; 

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
        {menuRegister && <NavItem key={menuRegister.name} item={menuRegister} />}
        {menuLogin && <NavItem key={menuLogin.name} item={menuLogin} />}
      </UnorderedList>
    </Box>
  );
};