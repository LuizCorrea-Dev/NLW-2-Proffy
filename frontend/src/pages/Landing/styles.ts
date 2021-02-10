import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;

    img {
      height: 100%;
    }

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const HeroImage = styled.img`
  width: 90vw;

  @media (min-width: 1100px) {
    width: 100%;
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.4rem;
    font: 700 2rem Archivo;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    transition: background-color 0.2s;
  }

  > a:first-child {
    margin-right: 1.6rem;
  }

  > a.study {
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-light);
    }
  }

  > a.give-classes {
    background: var(--color-secundary);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  a img {
    width: 4rem;
    margin-right: 2.4rem;
  }
  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-self: flex-start;
    > a {
      font-size: 2.4rem;
    }
    > a img {
      margin-right: 2.4rem;
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    margin-left: 0.8rem;
  }
  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;
