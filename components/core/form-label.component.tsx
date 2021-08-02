import { FC } from 'react';
import {
  Box,
  FormLabel as CFormLabel,
  Tooltip,
  VisuallyHidden
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

type Props = {
  label: string;
  error: any;
  isTouched: any;
}

export const FormLabel: FC<Props> = ({ label, error, isTouched }) => (
  <>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Box d='flex' alignItems='center'>
      <CFormLabel>{label}</CFormLabel>
      {(!!error && isTouched) && <Tooltip
        label={error?.message}
        aria-label={error?.message}
      >
        <WarningTwoIcon />
      </Tooltip>}
    </Box>
  </>
);
