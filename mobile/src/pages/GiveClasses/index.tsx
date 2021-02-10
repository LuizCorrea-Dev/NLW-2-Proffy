import React from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import bgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();

    Linking.openURL('http://proffy.nuapcode.com/');
  }

  return (
    <Styled.Container>
      <Styled.Background resizeMode="contain" source={bgImage}>
        <Styled.Title>Quer ser um Proffy?</Styled.Title>
        <Styled.Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Styled.Description>
      </Styled.Background>

      <Styled.OkButton onPress={handleNavigateBack}>
        <Styled.OkButtonText>Tudo bem</Styled.OkButtonText>
      </Styled.OkButton>
    </Styled.Container>
  );
}

export default GiveClasses;
