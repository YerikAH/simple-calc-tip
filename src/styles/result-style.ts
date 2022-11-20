import styled from "styled-components";


export const AppTwoPartOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.className === "true" && "1.5rem"};
`;

export const ATPartOneBoxOne = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    margin-top: 1rem;
  }
`;

export const ATPartOneBoxOneTitle = styled.h5`
  font-size: 1rem;
  color: var(--white);
`;

export const ATPartOneBoxOneDescription = styled.span`
  color: var(--grayish-cyan);
  font-size: 0.8rem;
  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;

export const ATPartOneBoxTwoPrice = styled.h4`
  color: var(--strong-cyan);
  font-size: 2rem;
  @media (min-width: 900px) {
    font-size: 3rem;
  }
`;

export const AppTwoPartEnd = styled.button`
  width: 100%;
  background: var(--strong-cyan);
  color: var(--very-dark-cyan);
  padding: 0.8rem;
  border-radius: 0.3rem;
  font-size: 1rem;
  transition: 0.3s;
  @media (min-width: 900px) {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  &:hover {
    background-color: var(--hover);
  }
`;


export const SeparateDiv = styled.div``;