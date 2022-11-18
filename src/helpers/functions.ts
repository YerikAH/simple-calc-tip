export function trunc(x: number, posiciones: number = 0): number {
  let s: string = x.toString();
  let decimalLength: number = s.indexOf(".") + 1;
  let numStr: string = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}
export function formulaTip(
  bill: number,
  percent: number,
  people: number
): number {
  let resultTip = (bill * (percent / 100)) / people;
  return resultTip;
}
export function formulaTotal(
  bill: number,
  people: number,
  tip: number
): number {
  let resultTotal = bill / people + tip;
  return resultTotal;
}
