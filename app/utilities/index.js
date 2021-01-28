import * as Constants from '../constants';

export const roundNumber = (value, decimals) => {
  if (
    typeof value === 'number' &&
    typeof decimals === 'number' &&
    decimals > 0
  ) {
    const decimalFactor = 10 ** decimals;
    const parsedValue =
      Math.round((value + Number.EPSILON) * decimalFactor) / decimalFactor;
    return parsedValue;
  }
  return value;
};

export const calculateBMI = (weight, height) => {
  let bmi = 0;

  if (typeof height === 'number' && height > 0) {
    bmi = roundNumber(weight / (height * height), 2);
  }
  return bmi;
};

export const getBMIDiagnostic = (bmiValue) => {
  let diagnostic;

  if (bmiValue < 18.5) {
    diagnostic = Constants.UNDERWEIGHT;
  } else if (bmiValue >= 18.5 && bmiValue < 25) {
    diagnostic = Constants.NORMAL;
  } else if (bmiValue >= 25 && bmiValue < 30) {
    diagnostic = Constants.OVERWEIGHT;
  } else {
    diagnostic = Constants.OBESITY;
  }

  return {
    bmi: bmiValue,
    diagnostic
  };
};
