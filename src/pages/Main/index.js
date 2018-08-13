import React, { Component } from 'react';
import api from '../../services/api';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { Container, Section, IssuesList } from './styles';

class Main extends Component {
  state = {
    repositories: [],
    issues: [],
    repositorySelected: null,
    sidebarLoading: false,
    issuesLoading: false,
  };

  addRepository = async (text) => {
    try {
      await this.setState({ sidebarLoading: true });
      const { data } = await api.get(`repos/${text}`);

      const { repositories } = this.state;
      this.setState({
        repositories: [...repositories, data],
        sidebarLoading: false,
      });
    } catch (error) {
      this.setState({
        sidebarLoading: false,
      });
    }
  };

  selectRepository = async (repository) => {
    await this.setState({
      repositorySelected: repository,
      issuesLoading: true,
      issues: [],
    });

    try {
      const { data } = await api.get(`repos/${repository.full_name}/issues?state=all`);

      this.setState({ issues: data, issuesLoading: false });
    } catch (error) {
      this.setState({ issuesLoading: false });
    }
  };

  filterIssues = async (state) => {
    await this.setState({ issuesLoading: true });

    try {
      const { repositorySelected } = this.state;
      const { data } = await api.get(`repos/${repositorySelected.full_name}/issues?state=${state}`);

      await this.setState({ issuesLoading: false, issues: data });
    } catch (error) {
      await this.setState({ issuesLoading: false });
    }
  };

  render() {
    const {
      repositories, sidebarLoading, repositorySelected, issuesLoading, issues,
    } = this.state;

    return (
      <Container>
        <SideBar
          repositories={repositories}
          addRepository={this.addRepository}
          selectRepository={this.selectRepository}
          loading={sidebarLoading}
        />

        {repositorySelected && (
          <Section>
            <Header repository={repositorySelected} filterIssues={this.filterIssues} />

            {issuesLoading && <Loading marginTop />}

            <IssuesList>
              {issues.map(issue => (
                <li key={issue.id}>
                  <img src={issue.user.avatar_url} alt="" />

                  <div>
                    <h1>{issue.title}</h1>
                    <span>{issue.user.login}</span>
                    <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-external-link" />
                      <span>Abrir Issue</span>
                    </a>
                  </div>
                </li>
              ))}
            </IssuesList>
          </Section>
        )}
      </Container>
    );
  }
}

export default Main;
