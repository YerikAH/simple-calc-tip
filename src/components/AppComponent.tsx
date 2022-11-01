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
  const [billState, setBillState] = useState<string>("");
  const [peopleState, setPeopleState] = useState<string>("");
  const [customState, setCustomState] = useState<string>("");
  const [porcent, setPorcent] = useState<string>("");
  const [tipAmount, setTipAmount] = useState<string>("$00.00");
  const [totalPerson, setTotalPerson] = useState<string>("$00.00");

  function handleClick(id: number) {
    // reset ui
    let moreVar = resetStatusTip();
    // select id
    const varTemp: tipPor[] = [...moreVar];
    let varfind: tipPor | undefined = varTemp.find(
      (item) => item.numberSelect === id
    );
    if (varfind !== undefined) {
      let numberSelectPorcent: string = `${varfind.numberSelect}`;
      setPorcent(numberSelectPorcent);
      // change activate for ui
      varfind.active = !varfind.active;
      // select the number
      setTipRender(varTemp);
    }
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    useStateUpdate: React.Dispatch<React.SetStateAction<string>>,
    useStateUpdateOptional?: React.Dispatch<React.SetStateAction<string>>
  ) => {
    let inputChange = e.target.value;
    useStateUpdate(inputChange);
    if (useStateUpdateOptional !== undefined) {
      useStateUpdateOptional(inputChange);
      resetStatusTip();
    }
  };
  function trunc(x: number, posiciones: number = 0): number {
    let s: string = x.toString();
    let decimalLength: number = s.indexOf(".") + 1;
    let numStr: string = s.substr(0, decimalLength + posiciones);
    return Number(numStr);
  }

  function validationInput(varToBeChecked: string): number {
    if (varToBeChecked === "0") {
      return 1.0;
    } else {
      let verification = parseFloat(varToBeChecked);
      if (isNaN(verification)) {
        return 1.0;
      } else {
        return verification;
      }
    }
  }
  function calcSimpleTip() {
    let billStateConvert: number;
    let peopleStateConvert: number;
    let porcentConvert: number;
    billStateConvert = validationInput(billState);
    peopleStateConvert = validationInput(peopleState);
    porcentConvert = validationInput(porcent);
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("bill state: ", billStateConvert);
    console.log("people state: ", peopleStateConvert);
    console.log("percent state: ", porcentConvert);

    let calctip: number =
      (billStateConvert * (porcentConvert / 100)) / peopleStateConvert;
    let totalcalc: number = billStateConvert / peopleStateConvert + calctip;

    let tipAmountResult: string = `$${trunc(calctip, 2)}`;
    let totalPersonResult: string = `$${trunc(totalcalc, 2)}`;

    console.log("tip amount: ", calctip);
    console.log("total person result: ", totalcalc);
    setTipAmount(tipAmountResult);
    setTotalPerson(totalPersonResult);
    return true;
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
    calcSimpleTip();
  }, [porcent]);
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
                    onChange={(e) => handleChange(e, setBillState)}
                    onBlur={calcSimpleTip}
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
                        <PartTwoButtonActive
                          key={item.numberSelect}
                          onClick={() => handleClick(item.numberSelect)}
                        >
                          {item.numberSelect}%
                        </PartTwoButtonActive>
                      )
                    )}
                  </>
                  <PartTwoInput
                    type="text"
                    placeholder="Custom"
                    value={customState}
                    onChange={(e) =>
                      handleChange(e, setCustomState, setPorcent)
                    }
                    onBlur={calcSimpleTip}
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
                    onChange={(e) => handleChange(e, setPeopleState)}
                    onBlur={calcSimpleTip}
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
                <ATPartOneBoxTwoPrice>{tipAmount}</ATPartOneBoxTwoPrice>
              </AppTwoPartOne>
              <AppTwoPartOne>
                <ATPartOneBoxOne>
                  <ATPartOneBoxOneTitle>Total</ATPartOneBoxOneTitle>
                  <ATPartOneBoxOneDescription>
                    / person
                  </ATPartOneBoxOneDescription>
                </ATPartOneBoxOne>
                <ATPartOneBoxTwoPrice>{totalPerson}</ATPartOneBoxTwoPrice>
              </AppTwoPartOne>
              <AppTwoPartEnd>RESET</AppTwoPartEnd>
            </ContainerAppTwo>
          </ContainerApp>
        </AppCenter>
      </AppAll>
    </React.Fragment>
  );
}
