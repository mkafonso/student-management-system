import styled from "styled-components";

export const Container = styled.header`
  background: var(--terciary);
  height: 72px;
  color: white;

  display: flex;
  justify-content: flex-end;
  padding: 0 10px;

  .header_profile {
    display: flex;
    align-items: center;
    cursor: pointer;

    > img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }

    > span {
      margin-left: 10px;
      font-size: 16px;
    }
  }
`;
