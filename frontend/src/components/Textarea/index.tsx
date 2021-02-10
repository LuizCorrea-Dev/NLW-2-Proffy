import React, { TextareaHTMLAttributes } from 'react';

import * as Styled from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <Styled.Container className="textarea-block">
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Textarea id={name} {...rest} />
    </Styled.Container>
  );
};

export default Textarea;
