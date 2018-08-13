import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Header = ({ repository, filterIssues }) => (
  <Container>
    <div>
      <img alt="" src={repository.owner.avatar_url} />

      <div className="info-container">
        <h1>{repository.full_name}</h1>
        <span>{repository.owner.login}</span>
      </div>
    </div>

    <form>
      <select defaultValue="all" onChange={e => filterIssues(e.target.value)}>
        <option value="all">Todas</option>
        <option value="open">Abertas</option>
        <option value="closed">Fechadas</option>
      </select>
    </form>
  </Container>
);

Header.propTypes = {
  filterIssues: PropTypes.func.isRequired,
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

export default Header;
