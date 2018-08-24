import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ marginTop }) => (marginTop ? '30px' : '0')};
margin-bottom: ${({ marginTop }) => (marginTop ? '0' : '25px')};
  display: flex;
  justify-content: center;

  i {
    font-size: 28px;
    color: #999;
  }
`;
