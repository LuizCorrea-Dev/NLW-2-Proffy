import React, { useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import api from '../../services/api';

import * as Styled from './styles';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsApp() {
    api.post('connections', {
      user_id: teacher.id,
    });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });
      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Styled.Container>
      <Styled.Profile>
        <Styled.Avatar source={{ uri: teacher.avatar }} />
        <Styled.ProfileInfo>
          <Styled.Name>{teacher.name}</Styled.Name>
          <Styled.Subject>{teacher.subject}</Styled.Subject>
        </Styled.ProfileInfo>
      </Styled.Profile>

      <Styled.Bio>{teacher.bio}</Styled.Bio>

      <Styled.Footer>
        <Styled.Price>
          Preço/hora{'   '}
          <Styled.PriceValue>R$ {teacher.cost}</Styled.PriceValue>
        </Styled.Price>

        <Styled.ButtonsContainer>
          <Styled.FavoriteButton
            favorited={isFavorited}
            onPress={handleToggleFavorite}
          >
            {isFavorited ? (
              <Styled.Favorite source={unfavoriteIcon} />
            ) : (
              <Styled.Favorite source={heartOutlineIcon} />
            )}
          </Styled.FavoriteButton>

          <Styled.ContactButton onPress={handleLinkToWhatsApp}>
            <Styled.Whatsapp source={whatsappIcon} />
            <Styled.ContactButtonText>
              Entrar em contato
            </Styled.ContactButtonText>
          </Styled.ContactButton>
        </Styled.ButtonsContainer>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default TeacherItem;
