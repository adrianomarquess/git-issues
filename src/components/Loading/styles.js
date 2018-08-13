import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${props => (props.marginTop ? '30px' : '0')};
  margin-bottom: ${props => (props.marginTop ? '0' : '25px')};
  display: flex;
  justify-content: center;

  i {
    font-size: 28px;
    color: #999;
  }
`;
