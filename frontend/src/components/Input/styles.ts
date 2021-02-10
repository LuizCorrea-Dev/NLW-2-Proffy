import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  @media (max-width: 700px) {
    + div {
      margin-top: 1.4rem;
    }
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${({ theme }) =>
      theme.title === 'light'
        ? 'var(--color-primary-light)'
        : 'var(--color-primary-darker)'};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  label {
    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
`;

export const Label = styled.label`
  color: var(--color-text-component);
`;
