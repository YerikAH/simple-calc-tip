import React from "react";
import {
  AppTwoPartOne,
  ATPartOneBoxOne,
  ATPartOneBoxOneTitle,
  ATPartOneBoxOneDescription,
  ATPartOneBoxTwoPrice,
  AppTwoPartEnd,
  SeparateDiv,
} from "../styles/result-style";
import { PropsResult } from "../model/types";

export default function ResultComponent({
  tipAmount,
  totalPerson,
  handleReset,
}: PropsResult) {
  return (
    <>
      <SeparateDiv>
        <AppTwoPartOne className="true">
          <ATPartOneBoxOne>
            <ATPartOneBoxOneTitle>Tip Amount</ATPartOneBoxOneTitle>
            <ATPartOneBoxOneDescription>/ person</ATPartOneBoxOneDescription>
          </ATPartOneBoxOne>
          <ATPartOneBoxTwoPrice>{tipAmount}</ATPartOneBoxTwoPrice>
        </AppTwoPartOne>
        <AppTwoPartOne>
          <ATPartOneBoxOne>
            <ATPartOneBoxOneTitle>Total</ATPartOneBoxOneTitle>
            <ATPartOneBoxOneDescription>/ person</ATPartOneBoxOneDescription>
          </ATPartOneBoxOne>
          <ATPartOneBoxTwoPrice>{totalPerson}</ATPartOneBoxTwoPrice>
        </AppTwoPartOne>
      </SeparateDiv>
      <AppTwoPartEnd onClick={handleReset}>RESET</AppTwoPartEnd>
    </>
  );
}
