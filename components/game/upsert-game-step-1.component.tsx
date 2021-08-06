import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, Input, SimpleGrid } from '@chakra-ui/react';

import { DatePicker, FormLabel, MultiSelect } from 'components/core';
import { SelectedPlatform } from './upsert-game-form.component';

export const UpsertGameStep1: FC = () => {
  const { control,  setValue } = useFormContext();

  const handleMultiSelectChange = (selectedPlatforms: SelectedPlatform[]) => {
    setValue<any>(
      'platforms',
      selectedPlatforms.map(({ value }) => value)
    );
  }
  
  return (
    <SimpleGrid columns={1} spacing={7}>
      <Controller
        name='title'
        control={control}
        render={
          ({
            fieldState: { error, isTouched },
            field: { onChange, onBlur, value }
          }) => (
            <FormControl isInvalid={!!error && isTouched}>
              <FormLabel label='Title' error={error} isTouched={isTouched} />
              <Input
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
        name='developer'
        control={control}
        render={
          ({
            fieldState: { error, isTouched },
            field: { onChange, onBlur, value }
          }) => (
            <FormControl isInvalid={!!error && isTouched}>
              <FormLabel label='Developer' error={error} isTouched={isTouched} />
              <Input
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
        name='publisher'
        control={control}
        render={
          ({
            fieldState: { error, isTouched },
            field: { onChange, onBlur, value }
          }) => (
            <FormControl isInvalid={!!error && isTouched}>
              <FormLabel label='Publisher' error={error} isTouched={isTouched} />
              <Input
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
        name='selectedPlatforms'
        control={control}
        render={
          ({
            fieldState: { error, isTouched },
            field: { onChange, onBlur, value }
          }) => (
            <FormControl isInvalid={!!error && isTouched}>
              <FormLabel label='Platforms' error={error} isTouched={isTouched} />
              <MultiSelect
                name='selectedPlatforms'
                placeholder=''
                options={[
                  { label: 'Playstation 1', value: 1 },
                  { label: 'Playstation 2', value: 2 },
                  { label: 'Playstation 3', value: 3 }
                ]}
                onBlur={onBlur}
                onChange={(val: any) => {
                  onChange(val);
                  handleMultiSelectChange(val);
                }}
                value={value}
                error={!!error}
              />
            </FormControl>
          )
        }
      />
      <Controller
        name='releaseDate'
        control={control}
        render={
          ({
            fieldState: { error, isTouched },
            field: { onChange, onBlur, value }
          }) => (
            <FormControl isInvalid={!!error && isTouched}>
              <FormLabel label='Release Date' error={error} isTouched={isTouched} />
              <DatePicker
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!error}
              />
            </FormControl>
          )
        }
      />
    </SimpleGrid>
  );
};
