import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

import * as Styled from './styles';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        toast.success('Cadastro realizado com sucesso! 🎉');

        history.push('/');
      })
      .catch(() => {
        toast.error('😢 Ooops! Tem algo de errado no seu cadastro!');
      });
  }

  return (
    <Container page="form">
      <Styled.PageTeacherForm className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo é preencher esse formulário de inscrição"
        />

        <Styled.Main>
          <form onSubmit={handleCreateClass}>
            <Styled.Fieldset>
              <legend>Seus dados</legend>
              <Input
                name="name"
                label="Nome completo"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br />
              <Input
                name="avatar"
                label="Avatar"
                value={avatar}
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
              />
              <br />
              <Input
                name="whatsapp"
                label="WhatsApp"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                }}
              />
              <br />
              <Textarea
                name="bio"
                label="Biografia"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </Styled.Fieldset>

            <Styled.Fieldset>
              <legend>Sobre a aula</legend>
              <Select
                name="subject"
                label="Matéria"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Ciências', label: 'Ciências' },
                  { value: 'Educação Física', label: 'Educação Física' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'História', label: 'História' },
                  { value: 'Mátemática', label: 'Mátemática' },
                  { value: 'Portguês', label: 'Portguês' },
                  { value: 'Química', label: 'Química' },
                  { value: 'Inglês', label: 'Inglês' },
                  { value: 'Espanhol', label: 'Espanhol' },
                  { value: 'Informática', label: 'Informática' },
                ]}
              />
              <br />
              <Input
                name="cost"
                label="Custo da sua hora por aula"
                value={cost}
                onChange={(e) => {
                  setCost(e.target.value);
                }}
              />
            </Styled.Fieldset>

            <Styled.Fieldset>
              <legend>
                Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                  + Novo horário
                </button>
              </legend>

              {scheduleItems.map((scheduleItem, index) => {
                return (
                  <Styled.ScheduleItem key={scheduleItem.week_day}>
                    <Select
                      name="week_day"
                      label="Dia da Semana"
                      value={scheduleItem.week_day}
                      onChange={(e) =>
                        setScheduleItemValue(index, 'week_day', e.target.value)
                      }
                      options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' },
                      ]}
                    />
                    <Input
                      value={scheduleItem.from}
                      onChange={(e) =>
                        setScheduleItemValue(index, 'from', e.target.value)
                      }
                      name="from"
                      label="Das"
                      type="time"
                    />
                    <Input
                      value={scheduleItem.to}
                      onChange={(e) =>
                        setScheduleItemValue(index, 'to', e.target.value)
                      }
                      name="to"
                      label="Até"
                      type="time"
                    />
                    <br />
                  </Styled.ScheduleItem>
                );
              })}
            </Styled.Fieldset>

            <Styled.Footer>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! <br />
                Preencha todos os dados
              </p>
              <Styled.Button type="submit">Salvar cadastro</Styled.Button>
            </Styled.Footer>
          </form>
        </Styled.Main>
      </Styled.PageTeacherForm>
    </Container>
  );
}

export default TeacherForm;
