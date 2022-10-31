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

  // render buttons

  const [tipRender, setTipRender] = useState<tipPor[]>([]);

  // bill state

  const [billState, setBillState] = useState<string>();
  const [theState, setTheState] = useState<string[]>([]);

  // people state

  const [peopleState, setPeopleState] = useState<string>();
  const [theStatePeople, setTheStatePeople] = useState<string[]>([]);

  // custom state

  const [customState, setCustomState] = useState<string>();
  const [theCustomState, setTheCustomState] = useState<string[]>([]);

  // custom state or porcent state

  const [porcent, setPorcent] = useState<string>("");

  const handleBlur = () => {
    calcSimpleTip();
  };
  const handleClick = (id: number) => {
    let moreVar = resetStatusTip();
    const varTemp: tipPor[] = [...moreVar];
    // find number select
    let varfind: tipPor | undefined = varTemp.find(
      (item) => item.numberSelect === id
    );

    if (varfind !== undefined) {
      varfind.active = !varfind.active;
      // get the number select and make the operation
      let numberSelectPorcent: string = `${varfind.numberSelect}`;
      setPorcent(numberSelectPorcent);
    }

    setTipRender(varTemp);
    calcSimpleTip();
  };
  // bill state funcion only numbers input
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
  // people state funcion only numbers input
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
  // custom state funcion only numbers input
  const handleKeyThree = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      let stateTemp = [...theCustomState, e.key];
      setTheCustomState(stateTemp);
      let stateConvert: string = theCustomState.join("");
      setCustomState(stateConvert);
      setPorcent(stateConvert);
    } else {
      let stateConvert: string = theCustomState.join("");
      setCustomState(stateConvert);
      setPorcent(stateConvert);
    }

    if (e.key == "Backspace") {
      let stateTemp = theCustomState.pop();
      let otherTemp = [...theCustomState];
      let filterVar = otherTemp.filter((item: string) => item !== stateTemp);
      setTheCustomState(filterVar);

      let stateConvert: string = theCustomState.join("");
      setCustomState(stateConvert);
      setPorcent(stateConvert);
    }
  };

  //function operation
  function calcSimpleTip() {
    let billStateConvert: number;
    let peopleStateConvert: number;
    let porcentConvert: number;
    console.log("bill-state ", billState);
    console.log("people-state ", peopleState);
    console.log("porcent ", porcent);

    if (billState !== undefined && billState !== "0" && billState !== "") {
      billStateConvert = parseFloat(billState);
    } else if (billState == "0") {
      billStateConvert = 1.0;
    } else if (billState == "") {
      billStateConvert = 1.0;
    } else {
      billStateConvert = 1.0;
    }

    if (
      peopleState !== undefined &&
      peopleState !== "0" &&
      peopleState !== ""
    ) {
      peopleStateConvert = parseFloat(peopleState);
    } else if (peopleState == "0") {
      peopleStateConvert = 1.0;
    } else if (peopleState == "") {
      peopleStateConvert = 1.0;
    } else {
      peopleStateConvert = 1.0;
    }

    if (porcent !== undefined && porcent !== "0" && porcent !== "") {
      porcentConvert = parseFloat(porcent);
    } else if (porcent == "0") {
      porcentConvert = 1.0;
    } else if (porcent == "") {
      porcentConvert = 1.0;
    } else {
      porcentConvert = 1.0;
    }
    console.log("bill-state C ", billStateConvert);
    console.log("people-state C ", peopleStateConvert);
    console.log("porcent C ", porcentConvert);
    let calctip: number =
      (billStateConvert * (porcentConvert / 100)) / peopleStateConvert;
    let totalcalc: number = billStateConvert / peopleStateConvert + calctip;
    console.log(calctip);
    console.log(totalcalc);
  }

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
                    onBlur={handleBlur}
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
                  <PartTwoInput
                    type="text"
                    placeholder="Custom"
                    value={customState}
                    onKeyDown={(e) => handleKeyThree(e)}
                    onBlur={handleBlur}
                  />
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
                    onBlur={handleBlur}
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
