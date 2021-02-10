import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';

import logoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import * as Styled from './styles';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <Styled.PageLanding>
      <Container page="landing">
        <Styled.LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </Styled.LogoContainer>

        <Styled.HeroImage
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <Styled.ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </Styled.ButtonsContainer>

        <Styled.TotalConnections>
          Total de {totalConnections} conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </Styled.TotalConnections>
      </Container>
    </Styled.PageLanding>
  );
}

export default Landing;
