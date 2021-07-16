import { FC } from 'react';
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VisuallyHidden
} from '@chakra-ui/react';

type Props = {
  open: boolean;
  onLogout: () => void;
  onClose: () => void;
}

export const UserAccountMenu: FC<Props> = ({ open, onClose, onLogout }) => (
  <Popover
    placement='bottom'
    isOpen={open}
    onClose={onClose}
    closeOnBlur
  >
    <PopoverTrigger>
      <VisuallyHidden>User Account Menu</VisuallyHidden>
    </PopoverTrigger>
    <PopoverContent
      w='200px'
      mt='12px'
      bgColor='#060606'
      borderColor='#292929'
      borderRadius={0}
      _focus={{ boxShadow: 'none', outline: '#292929' }}
    >
      <PopoverBody p='16px 18px' >
        <Button
          w='100%'
          color='brand.150'
          fontSize='12px'
          variant='link'
          onClick={onLogout}
        >
          Logout
        </Button>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

UserAccountMenu.defaultProps = { open: false };
