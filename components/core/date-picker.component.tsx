import { FC } from 'react';
import RDatePicker from 'react-datepicker';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { CalendarIcon } from '@chakra-ui/icons';

type Props = {
  value: any;
  onChange: (val: any) => void;
  onBlur: (val: any) => void;
  error?: boolean
}

export const DatePicker: FC<Props> = ({ value, error, onChange, onBlur }) => (
  <RDatePicker
    selected={value}
    showPopperArrow={false}
    onChange={(val: Date) => onChange(val)}
    customInput={
      <InputGroup>
        <Input
          variant='flushed'
          value={dayjs(value).format('MM/DD/YYYY')}
          onBlur={onBlur}
          onChange={val => onChange(val)}
          isInvalid={!!error}
        />
        <InputRightElement cursor='pointer'><CalendarIcon /></InputRightElement>
      </InputGroup>
    }
  />
);
