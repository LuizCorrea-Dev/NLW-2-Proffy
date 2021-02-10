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
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  label {
    font-size: 1.4rem;
  }
`;

export const Select = styled.select`
 
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  color: var(--color-text-component);
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
  
  @media (max-width: 700px) {
  width: 100%;}
`;

export const Label = styled.label`
  color: var(--color-text-complement);
`;
