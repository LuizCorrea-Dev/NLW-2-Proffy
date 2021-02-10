import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import { Feather } from '@expo/vector-icons';

import nextIcon from '../../assets/images/icons/next.png';
import bgImage from '../../assets/images/onboarding.png';
import bgGreenImage from '../../assets/images/onboarding-green.png';

const Next = ({ ...props }) => (
  <BorderlessButton {...props}>
    <Image source={nextIcon} resizeMode="contain" />
  </BorderlessButton>
);

const Skip = ({ ...props }) => (
  <BorderlessButton {...props}>
    <Feather
      style={{ marginLeft: 25 }}
      name="skip-forward"
      size={24}
      color="#9C98A6"
    />
  </BorderlessButton>
);

const InitialOnboarding = () => {
  const { navigate } = useNavigation();

  function handleToLanding() {
    navigate('Landing');
  }

  return (
    <Onboarding
      bottomBarHeight={100}
      bottomBarColor={'#F0F0F7'}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      DoneButtonComponent={Next}
      onDone={handleToLanding}
      pages={[
        {
          backgroundColor: '#F0F0F7',
          image: (
            <Image
              resizeMode="cover"
              style={{
                marginTop: -100,
                width: '100%',
                height: '80%',
                justifyContent: 'center',
              }}
              source={bgImage}
            />
          ),
          title: '01.',
          subtitle: `Encontre vários${'\n'}professores para${'\n'}ensinar você`,
          titleStyles: {
            fontFamily: 'Archivo_400Regular',
            marginTop: -150,
            color: '#DBD9E4',
            fontSize: 40,
            lineHeight: 44,
            left: -128,
          },
          subTitleStyles: {
            fontFamily: 'Poppins_400Regular',
            marginTop: -60,
            color: '#6A6180',
            lineHeight: 34,
            fontSize: 24,
            textAlign: 'left',
            left: -55,
          },
        },
        {
          backgroundColor: '#F0F0F7',
          image: (
            <Image
              resizeMode="cover"
              style={{
                marginTop: -100,
                width: '100%',
                height: '80%',
                justifyContent: 'center',
              }}
              source={bgGreenImage}
            />
          ),
          title: '02.',
          subtitle: `Ou dê aulas${'\n'}sobre o que você${'\n'}mais conhece`,
          titleStyles: {
            fontFamily: 'Archivo_400Regular',
            marginTop: -150,
            color: '#DBD9E4',
            fontSize: 40,
            lineHeight: 44,
            left: -128,
          },
          subTitleStyles: {
            fontFamily: 'Poppins_400Regular',
            marginTop: -60,
            color: '#6A6180',
            lineHeight: 34,
            fontSize: 24,
            textAlign: 'left',
            left: -55,
          },
        },
      ]}
    />
  );
};

export default InitialOnboarding;
