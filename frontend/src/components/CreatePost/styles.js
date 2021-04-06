import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;  

  width: 100%;

  > h2 {
    width: 100%;
    border-bottom: 1px solid var(--outline);

    padding: 0.75rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  > input {
    outline: 0;
    width: 100%;
    padding: 0.75rem;
    font-size: 1.25rem;

    border-bottom: 1px solid var(--razer);

    &::placeholder{
      font-size: 1.25rem;
    }
  }

  > input.onError {
    border-bottom-color: var(--error);
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  background-size: 49px 49px;
`;

export const SubmitArea = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  outline: 0;
  margin: 1rem;
  > input {
    color: #000;
    font-weight: bold;
    padding: 0.5rem 2rem;
    background: var(--razer);
    border-radius: 3rem;
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;