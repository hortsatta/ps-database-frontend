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
  onClick?: () => void;
  empty?: boolean;
}

export const NavItem: FC<Props> = ({ item, active, children, onClick, empty }) => {
  const { className, path, label } = item;

  return (
    <ListItem
      className={clsx('menu-item', className, active && 'active')}
      d='flex'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      {...onClick && { onClick }}
    >
      {
        !empty &&
          <Link href={path} passHref>
            <CLink fontFamily={fonts.heading} _focus={{ boxShadow: 0 }} whiteSpace='nowrap'>
              {label}
            </CLink>
          </Link>
      }
      {children}
      {<NavItemActive hidden={!active} />}
    </ListItem>
  );
};

NavItem.defaultProps = {
  active: false,
  empty: false
};
