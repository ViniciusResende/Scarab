import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: min(601px , 100%);
  
  min-height: 100vh;
  height: 100%;

  @media(min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

