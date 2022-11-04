import React, { useEffect, useState } from "react";
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
  SeparateDiv,
  SpanError,
} from "./Styles";

export default function AppComponent() {
  type tipPor = {
    numberSelect: number;
    active: boolean;
  };
  type styleErr = {
    border: string;
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

  // state for error
  //bill
  const [erroBill, setErroBill] = useState<boolean>(false);
  const [errMessBill, setErrMessBill] = useState<string>("");
  const [styleErrBill, setStyleErrBill] = useState<styleErr>();
  // people
  const [erroPeople, setErroPeople] = useState<boolean>(false);
  const [errMessPeople, setErrMessPeople] = useState<string>("");
  const [styleErrPeople, setStyleErrPeople] = useState<styleErr>();

  // custom
  const [erroCustom, setErroCustom] = useState<boolean>(false);
  const [errMessCustom, setErrMessCustom] = useState<string>("");
  const [styleErrCustom, setStyleErrCustom] = useState<styleErr>();

  function trunc(x: number, posiciones: number = 0): number {
    let s: string = x.toString();
    let decimalLength: number = s.indexOf(".") + 1;
    let numStr: string = s.substr(0, decimalLength + posiciones);
    return Number(numStr);
  }

  function handleClick(id: number) {
    // reset ui
    let moreVar: tipPor[] = resetStatusTip();
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    useStateUpdate: React.Dispatch<React.SetStateAction<string>>,
    useStateUpdateOptional?: React.Dispatch<React.SetStateAction<string>>
  ): void {
    let inputChange: string = e.target.value;
    useStateUpdate(inputChange);
    if (useStateUpdateOptional !== undefined) {
      useStateUpdateOptional(inputChange);
      resetStatusTip();
    }
  }

  function validationInput(
    varToBeChecked: string,
    useBoolean: React.Dispatch<React.SetStateAction<boolean>>,
    useMessage: React.Dispatch<React.SetStateAction<string>>
  ): number {
    if (varToBeChecked === "0") {
      if (useBoolean !== undefined && useMessage !== undefined) {
        useBoolean(true);
        useMessage("Can't be zero");
      }
      return 1.0;
    } else {
      let verification = parseFloat(varToBeChecked);
      if (isNaN(verification)) {
        if (useBoolean !== undefined && useMessage !== undefined) {
          useBoolean(true);
          useMessage("You must enter numbers");
        }
        return 1.0;
      } else {
        if (useBoolean !== undefined) {
          useBoolean(false);
        }
        return verification;
      }
    }
  }
  function calcSimpleTip(): void {
    let billStateConvert: number;
    let peopleStateConvert: number;
    let porcentConvert: number;
    billStateConvert = validationInput(billState, setErroBill, setErrMessBill);
    peopleStateConvert = validationInput(
      peopleState,
      setErroPeople,
      setErrMessPeople
    );
    porcentConvert = validationInput(porcent, setErroCustom, setErrMessCustom);

    let calctip: number =
      (billStateConvert * (porcentConvert / 100)) / peopleStateConvert;
    let totalcalc: number = billStateConvert / peopleStateConvert + calctip;

    let tipAmountResult: string = `$${trunc(calctip, 2)}`;
    let totalPersonResult: string = `$${trunc(totalcalc, 2)}`;

    console.log("tip amount: ", calctip);
    console.log("total person result: ", totalcalc);
    setTipAmount(tipAmountResult);
    setTotalPerson(totalPersonResult);
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

  function handleReset(): void {
    setBillState("");
    setPeopleState("");
    setCustomState("");
    // setPorcent(""); by the effect, no affect in nothing, state for operation
    setTipAmount("$0.00");
    setTotalPerson("$0.00");
    resetStatusTip();
  }
  // calc calcSimpleTip when porcent is change

  useEffect(() => {
    calcSimpleTip();
  }, [porcent]);

  useEffect(() => {
    // render buttons percent
    setTipRender(initialState);
    // open app
    setTipAmount("$0.00");
    setTotalPerson("$0.00");
    setErroBill(false);
    setErroPeople(false);
    setErroCustom(false);
  }, []);

  useEffect(() => {
    if (erroBill) {
      let borderTy: styleErr = {
        border: "2px solid var(--red)",
      };
      setStyleErrBill(borderTy);
    } else {
      let borderTy: styleErr = {
        border: "none",
      };
      setStyleErrBill(borderTy);
    }
  }, [erroBill]);

  useEffect(() => {
    if (erroPeople) {
      let borderTy: styleErr = {
        border: "2px solid var(--red)",
      };
      setStyleErrPeople(borderTy);
    } else {
      let borderTy: styleErr = {
        border: "none",
      };
      setStyleErrPeople(borderTy);
    }
  }, [erroPeople]);

  useEffect(() => {
    if (erroCustom) {
      let borderTy: styleErr = {
        border: "2px solid var(--red)",
      };
      setStyleErrCustom(borderTy);
    } else {
      let borderTy: styleErr = {
        border: "none",
      };
      setStyleErrCustom(borderTy);
    }
  }, [erroCustom]);

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
                {erroBill && <SpanError>{errMessBill}</SpanError>}
                <PartOneDiv style={styleErrBill}>
                  <PartOneImg src={dollar} alt="dolar" />
                  <PartOneInput
                    type="text"
                    placeholder="0"
                    value={billState}
                    onChange={(e) => handleChange(e, setBillState)}
                    onBlur={calcSimpleTip}
                  />
                </PartOneDiv>
              </AppOnePartOne>

              <AppOnePartTwo>
                <PartTwoSpan>Select Tip %</PartTwoSpan>
                {erroCustom && <SpanError>{errMessCustom}</SpanError>}
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
                    style={styleErrCustom}
                  />
                </PartTwoDiv>
              </AppOnePartTwo>

              <AppOnePartOne>
                <PartOneSpan>Number of people</PartOneSpan>

                {erroPeople && <SpanError>{errMessPeople}</SpanError>}
                <PartOneDiv style={styleErrPeople}>
                  <PartOneImg src={person} alt="person" />
                  <PartOneInput
                    type="text"
                    placeholder="0"
                    value={peopleState}
                    onChange={(e) => handleChange(e, setPeopleState)}
                    onBlur={calcSimpleTip}
                  />
                </PartOneDiv>
              </AppOnePartOne>
            </ContainerAppOne>
            <ContainerAppTwo>
              <SeparateDiv>
                <AppTwoPartOne special="true">
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
              </SeparateDiv>
              <AppTwoPartEnd onClick={handleReset}>RESET</AppTwoPartEnd>
            </ContainerAppTwo>
          </ContainerApp>
        </AppCenter>
      </AppAll>
    </React.Fragment>
  );
}
