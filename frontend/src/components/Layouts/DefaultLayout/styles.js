import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "sidebar header" "sidebar content";
  grid-template-columns: 223px auto;
  grid-template-rows: 80px auto;
  background-color: var(--background);
  min-height: 100%;
`;

export const Content = styled.section`
  grid-area: content;
  padding: 24px 32px 32px 12px;
  min-height: 100%;
`;
