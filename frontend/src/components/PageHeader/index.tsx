import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import { ThemeContext } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from '../../hooks/theme';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import * as Styled from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props, title) => {
  const { title: themeTitle } = useContext(ThemeContext);

  const { toggleTheme } = useTheme();
  return (
    <Styled.PageHeader className="page-header">
      <Styled.TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <Toggle
          checked={themeTitle === 'dark'}
          onChange={toggleTheme}
          className="toggle"
          icons={{
            checked: <FaSun color="yellow" size={12} />,
            unchecked: <FaMoon color="white" size={12} />,
          }}
        />
        <img src={logoImg} alt="Proffy" />
      </Styled.TopBarContainer>

      <Styled.HeaderContent>
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </Styled.HeaderContent>
    </Styled.PageHeader>
  );
};

export default PageHeader;
