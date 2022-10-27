import React from "react";
import logo from "../assets/logo.svg";
import dollar from "../assets/icon-dollar.svg";
import person from "../assets/icon-person.svg";
import {
  AppComponentCenter,
  AppComponentLogoLogo,
  AppComponentLogoContainer,
  ContainerApp,
  ContainerAppOne,
  AppOnePartOne,
  PartOneSpan,
  PartOneDiv,
  PartOneImg,
  PartOneInput,
  PartTwoButton,
  PartTwoDiv,
  PartTwoSpan,
  AppOnePartTwo,
  PartTwoInput,
  ContainerAppTwo,
  AppTwoPartOne,
  ATPartOneBoxOne,
  ATPartOneBoxOneTitle,
  ATPartOneBoxOneDescription,
  ATPartOneBoxTwoPrice,
  AppTwoPartEnd,
} from "./Styles";

export default function AppComponent() {
  return (
    <React.Fragment>
      <AppComponentCenter>
        <AppComponentLogoContainer>
          <AppComponentLogoLogo src={logo} />
        </AppComponentLogoContainer>
      </AppComponentCenter>
      <ContainerApp>
        <ContainerAppOne>
          <AppOnePartOne>
            <PartOneSpan>Bill</PartOneSpan>
            <PartOneDiv>
              <PartOneImg src={dollar} alt="dolar" />
              <PartOneInput type="text" />
            </PartOneDiv>
          </AppOnePartOne>

          <AppOnePartTwo>
            <PartTwoSpan>Select Tip %</PartTwoSpan>
            <PartTwoDiv>
              <PartTwoButton>5%</PartTwoButton>
              <PartTwoButton>10%</PartTwoButton>
              <PartTwoButton>15%</PartTwoButton>
              <PartTwoButton>25%</PartTwoButton>
              <PartTwoButton>50%</PartTwoButton>
              <PartTwoInput type="text" />
            </PartTwoDiv>
          </AppOnePartTwo>

          <AppOnePartOne>
            <PartOneSpan>Number of people</PartOneSpan>
            <PartOneDiv>
              <PartOneImg src={person} alt="person" />
              <PartOneInput type="text" />
            </PartOneDiv>
          </AppOnePartOne>
        </ContainerAppOne>
        <ContainerAppTwo>
          <AppTwoPartOne>
            <ATPartOneBoxOne>
              <ATPartOneBoxOneTitle>Tip Amount</ATPartOneBoxOneTitle>
              <ATPartOneBoxOneDescription>/ person</ATPartOneBoxOneDescription>
            </ATPartOneBoxOne>
            <ATPartOneBoxTwoPrice>$00.00</ATPartOneBoxTwoPrice>
          </AppTwoPartOne>
          <AppTwoPartOne>
            <ATPartOneBoxOne>
              <ATPartOneBoxOneTitle>Total</ATPartOneBoxOneTitle>
              <ATPartOneBoxOneDescription>/ person</ATPartOneBoxOneDescription>
            </ATPartOneBoxOne>
            <ATPartOneBoxTwoPrice>$00.00</ATPartOneBoxTwoPrice>
          </AppTwoPartOne>
          <AppTwoPartEnd>RESET</AppTwoPartEnd>
        </ContainerAppTwo>
      </ContainerApp>
    </React.Fragment>
  );
}
