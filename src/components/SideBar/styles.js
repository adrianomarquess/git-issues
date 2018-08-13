import styled from 'styled-components';

export const Container = styled.aside`
  background-color: #fff;
  width: 320px;
  padding: 30px;
  z-index: 1;

  -webkit-box-shadow: 5px 0px 15px 0px rgba(222, 222, 222, 1);
  -moz-box-shadow: 5px 0px 15px 0px rgba(222, 222, 222, 1);
  box-shadow: 5px 0px 15px 0px rgba(222, 222, 222, 1);
`;

export const Form = styled.form`
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: solid 1px #eee;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input[type='text'] {
    width: 182px;
    background-color: #eee;
    border: none;
    padding: 15px;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 15px;
  }

  button {
    flex: 1;
    border-radius: 5px;
    background-color: #59ea9a;
    border: none;

    i {
      font-size: 26px;
      color: #fff;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 260px;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 25px;

    button {
      flex: 1;
      background-color: transparent;
      border: none;

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
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-right: 15px;

          h1,
          span {
            text-align: left;
            width: 165px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }

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

        i {
          color: #999;
          font-size: 23px;
        }
      }
    }
  }
`;
