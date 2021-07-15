import { useEffect, FC } from 'react';
import { useSelector } from 'react-redux';
import { useToast, Box, Heading, Image as CImage, Text } from '@chakra-ui/react';

import { NotificationMessage } from 'models';
import { selectNotificationMessages } from 'store/core';

const statusColor: any = {
  success: 'brand.300',
  error: 'brand.400',
  warning: 'brand.500',
  info: 'brand.100'
};

const MCToast: FC<NotificationMessage> = ({ status, message }) => {
  return (
    <Box
      pt='10px'
      d='flex'
      flexDir='column'
      alignItems='center'
      bgColor='#232323'
      borderTop='5px solid'
      borderTopColor={statusColor[status]}
      borderTopRadius='2px'
      borderBottomRadius='20px'
      overflow='hidden'
    >
      <Text
        as='span'
        d='block'
        p='10px 12px'
        w='260px'
        bgColor='#0a0a0a'
        fontSize='14px'
        textAlign='center'
        border='1px solid rgba(255,255,255,0.2)'
        borderRadius='5px'
      >
        {message}
      </Text>
      <Heading
        color={statusColor[status]}
        as='h6'
        py='8px'
        fontSize='16px'
        fontWeight={400}
        textTransform='uppercase'
      >
        {status.toUpperCase()}
      </Heading>
    </Box>
  );
};

export const NotificationToast: FC = () => {
  const toast = useToast();
  const messages = useSelector(selectNotificationMessages);

  useEffect(() => {
    if (!messages.length) { return; }
    // Get the latest message and invoke chakra toast.
    const { status, message } = messages[messages.length - 1];
    toast({
      status,
      isClosable: true,
      // eslint-disable-next-line react/display-name
      render: ({ onClose }) => (
        <Box onClick={onClose} cursor='pointer'>
          <MCToast status={status} message={message} />
        </Box>
      )
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return null;
};
