import styled from "styled-components";

export const FormContainer = styled.form`
  padding-top: 22px;
  width: 474px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (max-width: 320px) {
    width: auto;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`;
