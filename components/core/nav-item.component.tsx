import { FC } from 'react';
import Link from 'next/link';
import { Image as CImage, Link as CLink, ListItem } from '@chakra-ui/react';
import clsx from 'clsx';

import { fonts } from 'config';
import { Module } from 'models';
import { NavItemActive } from './nav-item-active.component';

type Props = {
  item: Module;
  active?: boolean;
  onClick?: () => void;
}

export const NavItem: FC<Props> = ({ item, active, children, onClick }) => {
  const { className, path, label, tooltip } = item;
  const isAccount = tooltip.toLowerCase() === 'account';

  return (
    <ListItem
      className={clsx('menu-item', className, active && 'active')}
      d='flex'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      {...onClick && { onClick }}
    >
      <Link href={path} passHref>
        <CLink fontFamily={fonts.heading} _focus={{ boxShadow: 0 }}>
          {isAccount && (
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
          )}
          {label}
        </CLink>
      </Link>
      {children}
      {<NavItemActive hidden={!active} />}
    </ListItem>
  );
};
