import { FC } from 'react';
import Image from 'next/image';
import { Box, Heading, Image as CImage, Text, useTheme } from '@chakra-ui/react';

import { Game } from 'models';
import { Layout } from 'components/core';

// Temporary
const currentDate: Date = new Date();

const games: Game[] = [
  {
    slug: 'game-1',
    title: 'Game 1',
    releaseDate: new Date(currentDate.setMonth(currentDate.getMonth() + 2)),
    coverImage: 'https://www.mobygames.com/images/covers/l/20831-nba-street-vol-2-playstation-2-front-cover.jpg',
  }, {
    slug: 'game-2',
    title: 'Game 2',
    releaseDate: new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
    coverImage: 'https://www.mobygames.com/images/covers/l/72651-final-fantasy-xii-playstation-2-front-cover.jpg',
  }, {
    slug: 'game-3',
    title: 'Game 3',
    releaseDate: new Date(currentDate.setMonth(currentDate.getMonth() + 3)),
    coverImage: 'https://preview.redd.it/5z78g9sl9vj51.jpg?width=2695&format=pjpg&auto=webp&s=43d78be72dbc88a64c6db6f3507dfeb286e4e034',
  }
];

type Props = {
  games?: Game[]
}

export const UpcomingReleases:FC<Props> = ({}) => {
  const { colors } = useTheme();

  return (
    <Box
      pos='relative'
      bgColor='brand.100'
      bgImg='url(/assets/svgs/pattern-buttons.svg)'
      bgRepeat='repeat-x'
    >
      <Box pos='absolute' top={0} bgColor={colors.brand[150]} h='2px' w='full' />
      <Layout zIndex={1}>
        <Box
          px='100px'
          d='flex'
          alignItems='center'
          justifyContent='space-between'
          w='full'
          h='155px'
        >
          <Box d='flex' h='full'>
            <Box pos='relative' bottom='72px' w='479px'>
              <Image
                src='/assets/pngs/trio-characters.png'
                alt='trio-characters'
                width='479'
                height='292'
              />
            </Box>
            <Heading
              as='h4'
              d='flex'
              flexDir='column'
              justifyContent='center'
              marginTop='36px'
              marginLeft='32px'
              textTransform='uppercase'
              fontSize='24px'
            >
              <Text as='span' fontSize='14px' fontWeight={400}>Upcoming</Text>
              Releases
            </Heading>
          </Box>
          <Box d='flex' flex='1' justifyContent='flex-end' py='18px' h='full'>
            {games.map(({ slug, coverImage, title }: Game) => (
              <Box key={slug} mx='15px' h='full'>
                <CImage src={coverImage} alt={title} h='full' objectFit='cover' />
              </Box>
            ))}
          </Box>
        </Box>
      </Layout>
      <Box pos='absolute' bottom={0} bgColor={colors.brand[150]} h='2px' w='full' />
    </Box>
  );
};
