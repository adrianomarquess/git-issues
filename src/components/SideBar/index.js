import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';
import { Container, Form, List } from './styles';

class SideBar extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    addRepository: PropTypes.func.isRequired,
    selectRepository: PropTypes.func.isRequired,
    repositories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        full_name: PropTypes.string,
        owner: PropTypes.shape({
          login: PropTypes.string,
          avatar_url: PropTypes.string,
        }),
      }),
    ).isRequired,
  };

  state = {
    textInput: '',
  };

  onAddRepository = (e) => {
    e.preventDefault();

    const { textInput } = this.state;
    const { addRepository } = this.props;

    if (textInput.length > 0) {
      addRepository(textInput);
      this.setState({ textInput: '' });
    }
  };

  render() {
    const { textInput } = this.state;
    const { repositories, loading, selectRepository } = this.props;

    return (
      <Container>
        <Form onSubmit={this.onAddRepository}>
          <input
            type="text"
            placeholder="Novo repositório"
            value={textInput}
            onChange={e => this.setState({ textInput: e.target.value })}
          />
          <button type="submit">
            <i className="fa fa-plus-circle" />
          </button>
        </Form>

        {loading && <Loading />}

        <List>
          {repositories.map(repository => (
            <li key={repository.id}>
              <button type="button" onClick={() => selectRepository(repository)}>
                <div>
                  <img alt="" src={repository.owner.avatar_url} />

                  <div className="info-container">
                    <h1>{repository.full_name}</h1>
                    <span>{repository.owner.login}</span>
                  </div>

                  <i className="fa fa-angle-right" />
                </div>
              </button>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default SideBar;
