import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  h3 {
    background-color: #9ec3ff;
    padding: 10px;
    margin-bottom: 0;
  }
`;

const Method = ({ title, desc, example }) => (
  <Container>
    <h3>{title}</h3>
    <p>{desc}</p>
    <p>{example}</p>
  </Container>
);

Method.defaultProps = {
  title: '',
  desc: '',
  example: '',
};

Method.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  example: PropTypes.string,
};

export default Method;
