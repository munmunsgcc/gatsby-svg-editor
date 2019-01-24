import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Header = ({ title, subtitle, link }) => {
  const style = css`
    width: 100%;
    text-align: center;
    a {
      text-decoration: none;
    }
    h1 {
      margin-bottom: 0;
    }
  `;
  const Start = styled.div`
    ${style}
  `;

  return (
    <Start>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <Link to={link}>
        <p>{subtitle}</p>
      </Link>
    </Start>
  );
};

Header.defaultProps = {
  title: '',
  subtitle: '',
  link: '',
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
};

export default Header;
