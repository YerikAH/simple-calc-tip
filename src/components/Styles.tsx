import styled from "styled-components";

export const AppAll = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: grid;
`;
export const AppCenter = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const AppComponentCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;
export const AppComponentLogoContainer = styled.nav``;
export const AppComponentLogoLogo = styled.img``;

export const ContainerApp = styled.div`
  padding: 1.5rem;
  background: var(--white);
  border-radius: 1rem;
`;

export const ContainerAppOne = styled.div`
  width: 100%;
`;

export const AppOnePartOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 1rem 0;
`;
export const PartOneSpan = styled.span`
  font-size: 1rem;
  color: var(--dark-grayish-cyan);
`;
export const PartOneDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  background: var(--very-light-grayish-cyan);
  padding: 0.5rem;
  border-radius: 0.5em;
  margin: 0.5rem 0 1rem 0;
`;
export const PartOneImg = styled.img`
  position: absolute;
  bottom: 0;
  margin: auto 0.5rem;
  top: 0;
`;
export const PartOneInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  color: var(--very-dark-cyan);
  font-size: 1.5rem;
  text-align: right;
  outline: none;
`;

export const AppOnePartTwo = styled.div``;
export const PartTwoSpan = styled.span`
  font-size: 1rem;
  color: var(--dark-grayish-cyan);
`;
export const PartTwoDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  gap: 5%;
  margin: 1rem 0 2.5rem 0;
  height: 11rem;
  grid-template-rows: repeat(3, 3.3rem);
`;
export const PartTwoButton = styled.button`
  width: 100%;
  font-size: 1.5rem;
  background: var(--very-dark-cyan);
  color: var(--white);
  border-radius: 0.2rem;
  padding: 0.4rem;
`;
export const PartTwoButtonActive = styled.button`
  width: 100%;
  font-size: 1.5rem;
  background: var(--strong-cyan);
  color: var(--very-dark-cyan);
  border-radius: 0.2rem;
  padding: 0.4rem;
`;

export const PartTwoInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  background: var(--very-light-grayish-cyan);
  border-radius: 0.2rem;
  padding: 0.4rem;
  border: none;
  outline: none;
  color: var(--very-dark-cyan);
  text-align: center;
`;

export const ContainerAppTwo = styled.div`
  background: var(--very-dark-cyan);
  border-radius: 0.8rem;
  padding: 2rem 1.5rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
`;

export const AppTwoPartOne = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ATPartOneBoxOne = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ATPartOneBoxOneTitle = styled.h5`
  font-size: 1rem;
  color: var(--white);
`;
export const ATPartOneBoxOneDescription = styled.span`
  color: var(--grayish-cyan);
  font-size: 0.8rem;
`;
export const ATPartOneBoxTwoPrice = styled.h4`
  color: var(--strong-cyan);
  font-size: 2rem;
`;
export const AppTwoPartEnd = styled.button`
  width: 100%;
  background: var(--strong-cyan);
  color: var(--very-dark-cyan);
  padding: 0.8rem;
  border-radius: 0.3rem;
  font-size: 1rem;
`;
