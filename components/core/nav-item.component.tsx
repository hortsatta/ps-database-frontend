import { FC } from 'react';
import Link from 'next/link';
import { Link as CLink, ListItem } from '@chakra-ui/react';
import clsx from 'clsx';

import { fonts } from 'config';
import { Module } from 'models';
import { NavItemActive } from './nav-item-active.component';

type Props = {
  item: Module;
  active?: boolean;
}

export const NavItem: FC<Props> = ({ item, active }) => {
  const { className, path, label } = item;

  return (
    <ListItem
      className={clsx('menu-item', className, active && 'active')}
      d='flex'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
    >
      <Link href={path} passHref>
        <CLink fontFamily={fonts.heading} _focus={{ boxShadow: 0 }}>
          {label}
        </CLink>
      </Link>
      {<NavItemActive hidden={!active} />}
    </ListItem>
  );
};
