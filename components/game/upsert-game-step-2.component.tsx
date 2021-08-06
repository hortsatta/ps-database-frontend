import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, FormControl, Flex, Textarea } from '@chakra-ui/react';

import { FormLabel, ImageUpload } from 'components/core';

type Props = {
  coverArtRef: any;
  featureImageRef: any;
}

export const UpsertGameStep2: FC<Props> = ({ coverArtRef, featureImageRef }) => {
  const { control } = useFormContext();

  return (
    <Flex flexWrap='wrap'>
      <Controller
        name='description'
        control={control}
        render={
          ({
            fieldState: { error, isTouched },
            field: { onChange, onBlur, value }
          }) => (
            <FormControl mb='28px' w='100%' isInvalid={!!error && isTouched}>
              <FormLabel label='Description' error={error} isTouched={isTouched} />
              <Textarea
                variant='flushed'
                value={value}
                onBlur={onBlur}
                onChange={val => onChange(val)}
                isInvalid={!!error}
              />
            </FormControl>
          )
        }
      />
      <Controller
        name='coverImageFile'
        control={control}
        render={
          ({
            fieldState: { error, isTouched },
            field: { onChange }
          }) => (
            <FormControl mr='32px' w='400px' isInvalid={!!error && isTouched}>
              <Box mb='16px'>
                <FormLabel label='Cover Art' error={error} isTouched={isTouched} />
              </Box>
              <Box>
                <ImageUpload
                  ref={coverArtRef}
                  name='coverImage'
                  onChange={(val: any) => onChange(val || undefined) }
                />
              </Box>
            </FormControl>
          )
        }
      />
      <Controller
        name='featureImageFile'
        control={control}
        render={
          ({
            fieldState: { error, isTouched },
            field: { onChange }
          }) => (
            <FormControl  w='700px' flex='1' isInvalid={!!error && isTouched}>
              <Box mb='16px'>
                <FormLabel label='Feature Image' error={error} isTouched={isTouched} />
              </Box>
              <Box>
                <ImageUpload
                  ref={featureImageRef}
                  name='featureImage'
                  onChange={(val: any) => onChange(val || undefined)}
                />
              </Box>
            </FormControl>
          )
        }
      />
    </Flex>
  );
};
