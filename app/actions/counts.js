import * as Constants from '../constants';

export const changeAge = (payload) => ({
  type: Constants.AGE_COUNTER,
  payload
});

export const changeWeigth = (payload) => ({
  type: Constants.WEIGHT_COUNTER,
  payload
});

export const changeHeight = (payload) => ({
  type: Constants.HEIGHT_COUNTER,
  payload
});

export const genderChanged = (payload) => ({
  type: Constants.GENDER_CHANGED,
  payload
});

export const getBMIResult = (payload) => ({
  type: Constants.GET_BMI_RESULT,
  payload
});

export const changeModalVisibility = (payload) => ({
  type: Constants.MODAL_VISIBILITY,
  payload
});
