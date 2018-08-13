import styled from 'styled-components';

export const Container = styled.header`
  height: 100px;
  padding: 30px;
  background-color: #fff;

  -webkit-box-shadow: 0px 5px 15px 0px rgba(222, 222, 222, 1);
  -moz-box-shadow: 0px 5px 15px 0px rgba(222, 222, 222, 1);
  box-shadow: 0px 5px 15px 0px rgba(222, 222, 222, 1);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      margin-right: 15px;
    }

    .info-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 16px;
        color: #000;
        margin-bottom: 3px;
      }

      span {
        font-size: 13px;
        color: #999;
      }
    }
  }

  form {
    select {
      width: 200px;
      height: 45px;
      background-color: #fff;
      font-size: 16px;
      border: solid 1px #ddd;
      color: #999;
    }
  }
`;
