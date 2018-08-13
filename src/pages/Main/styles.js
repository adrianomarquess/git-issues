import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  display: flex;
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const IssuesList = styled.ul`
  list-style: none;
  padding: 30px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  li {
    background-color: #fff;
    padding: 20px;

    -webkit-box-shadow: 2px 2px 5px 0px rgba(222, 222, 222, 1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(222, 222, 222, 1);
    box-shadow: 2px 2px 5px 0px rgba(222, 222, 222, 1);

    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 15px;
    }

    div {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 16px;
        margin-bottom: 3px;

        width: 280px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      > span {
        color: #999;
        font-size: 13px;
        margin-bottom: 10px;
      }

      a {
        width: 145px;
        background-color: #b286d1;
        padding: 8px 15px;
        border-radius: 5px;
        text-decoration: none;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        i {
          color: #fff;
          font-size: 18px;
          margin-right: 5px;
        }

        span {
          font-size: 14px;
          color: #fff;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  }
`;
