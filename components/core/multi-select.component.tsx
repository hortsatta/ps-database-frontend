import { FC } from 'react';
import Select from 'react-select';
import { SelectComponentsProps } from 'react-select/src/Select';
import clsx from 'clsx';

import { colors } from 'config';

const styles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'rgba(255,255,255,0.5)' : 'transparent',
    cursor: 'pointer'
  }),
  multiValue:(provided: any) => ({
    ...provided,
    backgroundColor: colors.brand[300],
    color: 'white'
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: 'white'
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    cursor: 'pointer'
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderColor: state.isFocused ? '#3182ce' : '#e2e8f0',
    borderWidth: 0,
    borderBottomWidth: '1px',
    borderRadius: 0,
    boxShadow: state.isFocused ? '0px 1px 0px 0px #3182ce' : 'none',
    cursor: 'text'
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    color: 'white',
    cursor: 'pointer'
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: 'white',
    cursor: 'pointer'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  input: (provided: any) => ({
    ...provided,
    color: 'white'
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: colors.brand[150],
    borderRadius: 0
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    paddingLeft: '0px'
  })
};

export const MultiSelect: FC<SelectComponentsProps> = ({
  className,
  classNamePrefix,
  defaultValue,
  error,
  ...otherProps
}) => (
  <Select
    styles={styles}
    className={clsx('multi-select', className, error && 'error')}
    classNamePrefix='select'
    defaultValue={defaultValue || []}
    closeMenuOnSelect={false}
    isMulti
    {...otherProps}
  />
);
