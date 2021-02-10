import React, { InputHTMLAttributes } from 'react';

import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <Styled.Container className="input-block">
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Input type="text" id={name} {...rest} />
    </Styled.Container>
  );
};

export default Input;
