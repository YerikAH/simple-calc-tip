import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import dollar from "../assets/icon-dollar.svg";
import person from "../assets/icon-person.svg";
import ResultComponent from "./ResultComponent";
import { TipPor, StyleErr } from "../model/types";
import { trunc, formulaTip, formulaTotal } from "../helpers/functions";
import { noIsNumber, IsZero } from "../helpers/messages";
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
  AppAll,
  AppCenter,
  PartTwoButtonActive,
  SpanError,
} from "../styles/app-style";

// not error
const notError: StyleErr = {
  border: "none",
};
// buttons render
const initialState: TipPor[] = [
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

export default function AppComponent() {
  // render buttons

  const [tipRender, setTipRender] = useState<TipPor[]>([]);
  const [billState, setBillState] = useState("");
  const [peopleState, setPeopleState] = useState("");
  const [customState, setCustomState] = useState("");
  const [porcent, setPorcent] = useState("");
  const [tipAmount, setTipAmount] = useState<string>("$00.00");
  const [totalPerson, setTotalPerson] = useState<string>("$00.00");

  // state for error
  //bill
  const [erroBill, setErroBill] = useState(false);
  const [errMessBill, setErrMessBill] = useState("");
  const [styleErrBill, setStyleErrBill] = useState<StyleErr>(notError);
  // people
  const [erroPeople, setErroPeople] = useState(false);
  const [errMessPeople, setErrMessPeople] = useState("");
  const [styleErrPeople, setStyleErrPeople] = useState<StyleErr>(notError);

  // custom
  const [erroCustom, setErroCustom] = useState(false);
  const [errMessCustom, setErrMessCustom] = useState("");
  const [styleErrCustom, setStyleErrCustom] = useState<StyleErr>(notError);

  function handleClick(id: number) {
    // reset ui
    const moreVar: TipPor[] = resetStatusTip();
    // select id
    const varTemp: TipPor[] = [...moreVar];
    const varfind: TipPor | undefined = varTemp.find(
      (item) => item.numberSelect === id
    );
    if (varfind !== undefined) {
      const numberSelectPorcent: string = `${varfind.numberSelect}`;
      setPorcent(numberSelectPorcent);
      // change activate for ui
      varfind.active = !varfind.active;
      // select the number
      setTipRender(varTemp);
    }
  }
  function handleBlur(
    setBorder: React.Dispatch<React.SetStateAction<StyleErr>>,
    err: boolean
  ) {
    let borderTy: StyleErr;
    if (err) {
      borderTy = {
        border: "3px solid var(--red)",
      };
    } else {
      borderTy = {
        border: "none",
      };
    }
    setBorder(borderTy);
  }
  function handleClickBorder(
    setBorder: React.Dispatch<React.SetStateAction<StyleErr>>,
    err: boolean
  ) {
    if (err) {
      let borderTy: StyleErr = {
        border: "3px solid var(--red)",
      };
      setBorder(borderTy);
    } else {
      let borderTy: StyleErr = {
        border: "3px solid var(--strong-cyan)",
      };
      setBorder(borderTy);
    }
  }
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    useStateUpdate: React.Dispatch<React.SetStateAction<string>>,
    useStateUpdateOptional?: React.Dispatch<React.SetStateAction<string>>
  ) {
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
    useMessage: React.Dispatch<React.SetStateAction<string>>,
    moneyorpeople: boolean
  ): number {
    // If the user sent a value of 0 = there mistake
    const noEpace = varToBeChecked.trim();
    if (noEpace === "0") {
      useBoolean(true);
      useMessage(IsZero);
      return 1.0;
    } else {
      // If the user did not send a number = there mistake
      let regexOnlyNumber: RegExp;
      if (moneyorpeople) {
        regexOnlyNumber = /^[0-9]+$/;
      } else {
        regexOnlyNumber = /^[0-9]+([.][0-9]+)?$/;
      }
      if (!regexOnlyNumber.test(noEpace.trim())) {
        useBoolean(true);
        useMessage(noIsNumber);
        return 1.0;
      } else {
        // If the user sent a number = there is no mistake
        const verification = parseFloat(noEpace);
        useBoolean(false);
        return verification;
      }
    }
  }
  function calcSimpleTip() {
    const billStateConvert = validationInput(
      billState,
      setErroBill,
      setErrMessBill,
      false
    );
    const peopleStateConvert = validationInput(
      peopleState,
      setErroPeople,
      setErrMessPeople,
      true
    );

    const porcentConvert = validationInput(
      porcent,
      setErroCustom,
      setErrMessCustom,
      false
    );

    const calctip = formulaTip(
      billStateConvert,
      porcentConvert,
      peopleStateConvert
    );
    const totalcalc = formulaTotal(
      billStateConvert,
      peopleStateConvert,
      calctip
    );

    const tipAmountResult: string = `$${trunc(calctip, 2)}`;
    const totalPersonResult: string = `$${trunc(totalcalc, 2)}`;

    setTipAmount(tipAmountResult);
    setTotalPerson(totalPersonResult);
  }

  function resetStatusTip() {
    const moreVar = [...tipRender];
    moreVar.map((item) => {
      if (item.active) {
        item.active = false;
      }
    });
    setTipRender(moreVar);
    return moreVar;
  }

  function handleReset() {
    setBillState("");
    setPeopleState("");
    setCustomState("");
    setPorcent(""); //by the effect, no affect in nothing, state for operation
    setTipAmount("$0.00");
    setTotalPerson("$0.00");
    resetStatusTip();
    // setErroBill(false);
    // setErroCustom(false);
    // setErroPeople(false);
  }
  // run calcSimpleTip when percent input or people input or bill input

  useEffect(() => {
    calcSimpleTip();
  }, [porcent]);

  useEffect(() => {
    handleClickBorder(setStyleErrCustom, erroCustom);
  }, [customState]);

  useEffect(() => {
    calcSimpleTip();
    handleClickBorder(setStyleErrPeople, erroPeople);
  }, [peopleState]);

  useEffect(() => {
    calcSimpleTip();
    handleClickBorder(setStyleErrBill, erroBill);
  }, [billState]);

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
      let borderTy: StyleErr = {
        border: "3px solid var(--red)",
      };
      setStyleErrBill(borderTy);
    } else {
      let borderTy: StyleErr = {
        border: "none",
      };
      setStyleErrBill(borderTy);
    }
  }, [erroBill]);

  useEffect(() => {
    if (erroPeople) {
      let borderTy: StyleErr = {
        border: "3px solid var(--red)",
      };
      setStyleErrPeople(borderTy);
    } else {
      let borderTy: StyleErr = {
        border: "none",
      };
      setStyleErrPeople(borderTy);
    }
  }, [erroPeople]);

  useEffect(() => {
    if (erroCustom) {
      let borderTy: StyleErr = {
        border: "3px solid var(--red)",
      };
      setStyleErrCustom(borderTy);
    } else {
      let borderTy: StyleErr = {
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
                    placeholder="0"
                    value={billState}
                    onChange={(e) => handleChange(e, setBillState)}
                    onBlur={() => handleBlur(setStyleErrBill, erroBill)}
                    onClick={() => handleClickBorder(setStyleErrBill, erroBill)}
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
                    placeholder="Custom"
                    value={customState}
                    onChange={(e) =>
                      handleChange(e, setCustomState, setPorcent)
                    }
                    onBlur={() => handleBlur(setStyleErrCustom, erroCustom)}
                    onClick={() =>
                      handleClickBorder(setStyleErrCustom, erroCustom)
                    }
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
                    placeholder="0"
                    value={peopleState}
                    onChange={(e) => handleChange(e, setPeopleState)}
                    onBlur={() => handleBlur(setStyleErrPeople, erroPeople)}
                    onClick={() =>
                      handleClickBorder(setStyleErrPeople, erroPeople)
                    }
                  />
                </PartOneDiv>
              </AppOnePartOne>
            </ContainerAppOne>
            <ContainerAppTwo>
              <ResultComponent
                tipAmount={tipAmount}
                totalPerson={totalPerson}
                handleReset={handleReset}
              ></ResultComponent>
            </ContainerAppTwo>
          </ContainerApp>
        </AppCenter>
      </AppAll>
    </React.Fragment>
  );
}
