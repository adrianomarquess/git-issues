import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Loading = ({ marginTop }) => (
  <Container marginTop={marginTop}>
    <i className="fa fa-spinner fa-spin" />
  </Container>
);

Loading.propTypes = {
  marginTop: PropTypes.bool,
};

Loading.defaultProps = {
  marginTop: false,
};

export default Loading;
