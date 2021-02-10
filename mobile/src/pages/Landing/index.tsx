import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import * as Styled from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPage() {
    navigate('Study');
  }
  return (
    <Styled.Container>
      <Styled.Landing source={landingImg} />
      <Styled.Title>
        Seja bem-vindo, {'\n'}
        <Styled.TitleBold>O que deseja fazer?</Styled.TitleBold>
      </Styled.Title>
      <Styled.ButtonsContainer>
        <Styled.ButtonPrimary onPress={handleNavigateToStudyPage}>
          <Styled.Study source={studyIcon} />
          <Styled.ButtonText>Estudar</Styled.ButtonText>
        </Styled.ButtonPrimary>

        <Styled.ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
          <Styled.Study source={giveClassesIcon} />
          <Styled.ButtonText>Dar aulas</Styled.ButtonText>
        </Styled.ButtonSecondary>
      </Styled.ButtonsContainer>

      <Styled.TotalConnections>
        Total de {totalConnections} conexões já realizadas.{' '}
        <Styled.Heart source={heartIcon} />
      </Styled.TotalConnections>
    </Styled.Container>
  );
}

export default Landing;
