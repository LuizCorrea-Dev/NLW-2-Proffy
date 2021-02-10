import React, { SelectHTMLAttributes } from 'react';

import * as Styled from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <Styled.Container className="select-block">
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Styled.Select>
    </Styled.Container>
  );
};

export default Select;
