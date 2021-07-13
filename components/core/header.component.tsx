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

import { getModuleConfig } from 'services';
import { selectModuleConfig, selectModuleConfigList, setModuleConfig } from 'store/core';
import { Nav } from './nav.component';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const moduleConfig = useSelector(selectModuleConfig);
  const modules = useSelector(selectModuleConfigList);

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

// function WfWf(props) {
//   return (
//     <React.Fragment>
//       <chakra.header h="full" bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4}>
//         <Flex alignItems="center" justifyContent="space-between" mx="auto">
//           <Link display="flex" alignItems="center" href="/">
//             <Logo />
//           </Link>
//           <Box display={{ base: "none", md: "inline-flex" }}>
//             <HStack spacing={1}>
//               <Box role="group">
//                 <Button
//                   bg={bg}
//                   color="gray.500"
//                   alignItems="center"
//                   fontSize="md"
//                   _hover={{ color: cl }}
//                   _focus={{ boxShadow: "none" }}
//                   rightIcon={<IoIosArrowDown />}
//                 >
//                   Features
//                 </Button>
//                 <Box
//                   pos="absolute"
//                   left={0}
//                   w="full"
//                   display="none"
//                   _groupHover={{ display: "block" }}
//                 >
//                   {Features}
//                 </Box>
//               </Box>
//               <Button
//                 bg={bg}
//                 color="gray.500"
//                 display="inline-flex"
//                 alignItems="center"
//                 fontSize="md"
//                 _hover={{ color: cl }}
//                 _focus={{ boxShadow: "none" }}
//               >
//                 Blog
//               </Button>
//               <Button
//                 bg={bg}
//                 color="gray.500"
//                 display="inline-flex"
//                 alignItems="center"
//                 fontSize="md"
//                 _hover={{ color: cl }}
//                 _focus={{ boxShadow: "none" }}
//               >
//                 Pricing
//               </Button>
//             </HStack>
//           </Box>
//           <Spacer />
//           <Box display="flex" alignItems="center">
//             <HStack spacing={1}>
//               <Button colorScheme="brand" variant="ghost" size="sm">
//                 Sign in
//               </Button>
//               <Button colorScheme="brand" variant="solid" size="sm">
//                 Sign up
//               </Button>
//             </HStack>
//             <IconButton
//               size="md"
//               fontSize="lg"
//               aria-label={`Switch to ${text} mode`}
//               variant="ghost"
//               color="current"
//               ml={{ base: "0", md: "3" }}
//               onClick={toggleMode}
//               icon={<SwitchIcon />}
//             />
//             <IconButton
//               display={{ base: "flex", md: "none" }}
//               aria-label="Open menu"
//               fontSize="20px"
//               color={useColorModeValue("gray.800", "inherit")}
//               variant="ghost"
//               icon={<AiOutlineMenu />}
//               onClick={mobileNav.onOpen}
//             />
//           </Box>
//         </Flex>

//         {MobileNavContent}
//       </chakra.header>
//     </React.Fragment>
//   );
// }
