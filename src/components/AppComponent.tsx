import React, { cloneElement, useEffect, useState } from "react";
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
  AppAll,
  AppCenter,
  PartTwoButtonActive,
} from "./Styles";

export default function AppComponent() {
  type tipPor = {
    numberSelect: number;
    active: boolean;
  };
  const initialState: tipPor[] = [
    {
      numberSelect: 5,
      active: false,
    },
    {
      numberSelect: 10,
      active: false,
    },
    {
      numberSelect: 15,
      active: false,
    },
    {
      numberSelect: 25,
      active: false,
    },
    {
      numberSelect: 50,
      active: false,
    },
  ];

  const [tipRender, setTipRender] = useState<tipPor[]>([]);
  const [billState, setBillState] = useState<string>();
  const [theState, setTheState] = useState<string[]>([]);

  const [peopleState, setPeopleState] = useState<string>();
  const [theStatePeople, setTheStatePeople] = useState<string[]>([]);
  const handleClick = (id: number) => {
    let moreVar = resetStatusTip();
    const varTemp: tipPor[] = [...moreVar];
    let varfind: tipPor | undefined = varTemp.find(
      (item) => item.numberSelect === id
    );
    if (varfind !== undefined) {
      varfind.active = !varfind.active;
    }
    setTipRender(varTemp);
  };
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let onlyNumbers: string[] = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      ".",
    ];
    console.log(billState);
    if (onlyNumbers.includes(e.key)) {
      let stateTemp = [...theState, e.key];
      setTheState(stateTemp);
      let stateConvert: string = theState.join("");
      setBillState(stateConvert);
    } else {
      let stateConvert: string = theState.join("");
      setBillState(stateConvert);
    }

    if (e.key == "Backspace") {
      let stateTemp = theState.pop();
      let otherTemp = [...theState];
      let filterVar = otherTemp.filter((item: string) => item !== stateTemp);
      setTheState(filterVar);

      let stateConvert: string = theState.join("");
      setBillState(stateConvert);
    }
  };
  const handleKeyTwo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let onlyNumbers: string[] = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      ".",
    ];
    console.log(peopleState);
    if (onlyNumbers.includes(e.key)) {
      let stateTemp = [...theStatePeople, e.key];
      setTheStatePeople(stateTemp);
      let stateConvert: string = theStatePeople.join("");
      setPeopleState(stateConvert);
    } else {
      let stateConvert: string = theStatePeople.join("");
      setPeopleState(stateConvert);
    }

    if (e.key == "Backspace") {
      let stateTemp = theStatePeople.pop();
      let otherTemp = [...theStatePeople];
      let filterVar = otherTemp.filter((item: string) => item !== stateTemp);
      setTheStatePeople(filterVar);

      let stateConvert: string = theStatePeople.join("");
      setPeopleState(stateConvert);
    }
  };
  function resetStatusTip(): tipPor[] {
    const moreVar = [...tipRender];
    moreVar.map((item) => {
      if (item.active) {
        item.active = false;
      }
    });
    setTipRender(moreVar);
    return moreVar;
  }

  useEffect(() => {
    setTipRender(initialState);
  }, []);
  return (
    <React.Fragment>
      <AppAll>
        <AppCenter>
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
                  <PartOneInput
                    type="text"
                    value={billState}
                    onKeyDown={(e) => handleKey(e)}
                  />
                </PartOneDiv>
              </AppOnePartOne>

              <AppOnePartTwo>
                <PartTwoSpan>Select Tip %</PartTwoSpan>
                <PartTwoDiv>
                  <>
                    {tipRender.map((item) =>
                      !item.active ? (
                        <PartTwoButton
                          key={item.numberSelect}
                          onClick={() => handleClick(item.numberSelect)}
                        >
                          {item.numberSelect}%
                        </PartTwoButton>
                      ) : (
                        <PartTwoButtonActive key={item.numberSelect}>
                          {item.numberSelect}%
                        </PartTwoButtonActive>
                      )
                    )}
                  </>
                  <PartTwoInput type="text" placeholder="Custom" />
                </PartTwoDiv>
              </AppOnePartTwo>

              <AppOnePartOne>
                <PartOneSpan>Number of people</PartOneSpan>
                <PartOneDiv>
                  <PartOneImg src={person} alt="person" />
                  <PartOneInput
                    type="text"
                    value={peopleState}
                    onKeyDown={(e) => handleKeyTwo(e)}
                  />
                </PartOneDiv>
              </AppOnePartOne>
            </ContainerAppOne>
            <ContainerAppTwo>
              <AppTwoPartOne>
                <ATPartOneBoxOne>
                  <ATPartOneBoxOneTitle>Tip Amount</ATPartOneBoxOneTitle>
                  <ATPartOneBoxOneDescription>
                    / person
                  </ATPartOneBoxOneDescription>
                </ATPartOneBoxOne>
                <ATPartOneBoxTwoPrice>$00.00</ATPartOneBoxTwoPrice>
              </AppTwoPartOne>
              <AppTwoPartOne>
                <ATPartOneBoxOne>
                  <ATPartOneBoxOneTitle>Total</ATPartOneBoxOneTitle>
                  <ATPartOneBoxOneDescription>
                    / person
                  </ATPartOneBoxOneDescription>
                </ATPartOneBoxOne>
                <ATPartOneBoxTwoPrice>$00.00</ATPartOneBoxTwoPrice>
              </AppTwoPartOne>
              <AppTwoPartEnd>RESET</AppTwoPartEnd>
            </ContainerAppTwo>
          </ContainerApp>
        </AppCenter>
      </AppAll>
    </React.Fragment>
  );
}
