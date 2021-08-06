import { FC, FormEvent, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Step, Steps, useSteps } from "chakra-ui-steps"

import { fonts } from 'config';
import { Game } from 'models';
import { create } from 'services';
import { loginFailure } from 'store/auth';
import { appendNotificationMessages } from 'store/core';
import { UpsertGameStep1 } from './upsert-game-step-1.component';
import { UpsertGameStep2 } from './upsert-game-step-2.component';

import 'react-datepicker/dist/react-datepicker.css';

export type SelectedPlatform = {
  label: string;
  value: number;
}

type FormData = Game & {
  selectedPlatforms: SelectedPlatform[];
  coverImageFile?: any;
  featureImageFile?: any;
}

const defaultValues: FormData = {
  title: '',
  description: undefined,
  developer: '',
  publisher: '',
  releaseDate: new Date(),
  platforms: [],
  selectedPlatforms: [],
  coverImageFile: undefined,
  featureImageFile: undefined,
};

const schema = z.object({
  title: z.string().nonempty(),
  description: z.string().optional(),
  developer: z.string().nonempty(),
  publisher: z.string().nonempty(),
  releaseDate: z.date(),
  platforms: z.number().array().nonempty(),
  selectedPlatforms: z
    .object({ label: z.string(), value: z.number() })
    .array()
    .nonempty(),
  coverImageFile: z.object({}).optional(),
  featureImageFile: z.object({}).optional()
});

type Props = {
  token: string;
}

export const UpsertGameForm: FC<Props> = ({ token }) => {
  const dispatch = useDispatch();
  const coverArtRef = useRef<any>(null);
  const featureImageRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  const { nextStep, prevStep, reset: resetSteps, activeStep } = useSteps({ initialStep: 0 });

  const methods = useForm<FormData>({ defaultValues, resolver: zodResolver(schema) });

  const { handleSubmit, getValues, reset } = methods;

  const steps = [
    { label: 'Step 1', description: 'Details', content: <UpsertGameStep1 /> },
    {
      label: 'Step 2',
      description: 'Additional Info',
      content: <UpsertGameStep2 coverArtRef={coverArtRef} featureImageRef={featureImageRef} />
    }
  ];

  const handleSubmission = async (e: FormEvent) => {
    e.preventDefault();

    handleSubmit(async () => {
      setLoading(true);

      try {
        const formData = getValues();
        const res = await create(formData, token);
      } catch (error) {
        setLoading(false);
        dispatch(loginFailure());
        dispatch(appendNotificationMessages({
          status: 'error',
          message: error.message
        }));
      }
    })(e);
  };

  const handleClearFields = () => {
    coverArtRef.current?.clear();
    featureImageRef.current?.clear();
    reset(defaultValues);
    resetSteps();
  };

  return (
    <FormProvider {...methods}>
      <Box bgColor='brand.100' as='form' onSubmit={handleSubmission}>
        <Box p='19px 60px 30px 32px'>
          <Steps
            colorScheme='teal'
            orientation='vertical'
            activeStep={activeStep}
            fontFamily={fonts.body}
          >
            {steps.map(({ label, description, content }) => (
              <Step
                className='chakra-step'
                key={label}
                label={label}
                description={description}
              >
                {content}
              </Step>
            ))}
          </Steps>
        </Box>
        <Flex
          p='21px 32px'
          justifyContent='space-between'
          borderY='2px solid'
          bgImg='url(/assets/svgs/pattern-buttons.svg)'
          bgRepeat='repeat-x'
          borderColor='brand.150'
        >
          <Button fontSize='12px' variant='ghost' onClick={handleClearFields}>
            Clear Fields
          </Button>
          <Box>
            <Button
              mr='8px'
              fontSize='12px'
              variant='ghost'
              disabled={activeStep <= 0}
              onClick={prevStep}
            >
              Previous
            </Button>
            {activeStep === steps.length - 1
              ? (<Button
                  type='submit'
                  variant='outline'
                  bgColor='brand.100'
                  color='brand.200'
                  borderColor='brand.200'
                  isLoading={loading}
                >
                  Add Game
                </Button>)
              : (<Button
                  type='button'
                  variant='outline'
                  bgColor='brand.100'
                  color='brand.200'
                  borderColor='brand.200'
                  isLoading={loading}
                  onClick={(e) => {
                    e.preventDefault();
                    nextStep();
                  }}
                >
                  Next
                </Button>
              )}
            </Box>
        </Flex>
      </Box>
    </FormProvider>
  );
};
