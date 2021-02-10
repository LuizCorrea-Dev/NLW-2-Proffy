import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import * as Styled from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Styled.Container>
        <PageHeader
          title="Proffys disponíveis"
          headerRight={
            <BorderlessButton onPress={handleToggleFiltersVisible}>
              <Feather name="filter" size={20} color="#FFF" />
            </BorderlessButton>
          }
        >
          {isFiltersVisible && (
            <Styled.SearchForm>
              <Styled.Label>Matéria</Styled.Label>
              <Styled.Input
                placeholderTextColor="#c1bccc"
                placeholder="Qual a matéria?"
                value={subject}
                onChangeText={(text) => setSubject(text)}
              ></Styled.Input>

              <Styled.InputGroup>
                <Styled.InputBlock>
                  <Styled.Label>Dia da semana</Styled.Label>
                  <Picker
                    selectedValue={week_day}
                    style={{
                      height: 54,
                      backgroundColor: '#fff',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      marginBottom: 16,
                      paddingHorizontal: 16,
                      marginTop: 4,
                    }}
                    onValueChange={(itemValue) =>
                      setWeekDay(itemValue.toString())
                    }
                  >
                    <Picker.Item label="Domingo" value={'0'} />
                    <Picker.Item label="Segunda-feira" value={'1'} />
                    <Picker.Item label="Terça-feira" value={'2'} />
                    <Picker.Item label="Quarta-feira" value={'3'} />
                    <Picker.Item label="Quinta-feira" value={'4'} />
                    <Picker.Item label="Sexta-feira" value={'5'} />
                    <Picker.Item label="Sábado" value={'6'} />
                  </Picker>
                </Styled.InputBlock>

                <Styled.InputBlock>
                  <Styled.Label>Horário</Styled.Label>
                  <Styled.Input
                    placeholderTextColor="#c1bccc"
                    placeholder="Qual o horário?"
                    value={time}
                    onChangeText={(text) => setTime(text)}
                  ></Styled.Input>
                </Styled.InputBlock>
              </Styled.InputGroup>

              <Styled.SubmitButton onPress={handleFiltersSubmit}>
                <Styled.SubmitButtonText>Filtrar</Styled.SubmitButtonText>
              </Styled.SubmitButton>
            </Styled.SearchForm>
          )}
        </PageHeader>

        <Styled.TeacherList
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        >
          {teachers.map((teacher: Teacher) => {
            return (
              <TeacherItem
                key={teacher.id}
                teacher={teacher}
                favorited={favorites.includes(teacher.id)}
              />
            );
          })}
        </Styled.TeacherList>
      </Styled.Container>
    </KeyboardAvoidingView>
  );
}

export default TeacherList;
