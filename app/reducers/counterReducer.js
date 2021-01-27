import * as Constants from '../constants';

const initialState = {
  age: 0,
  weight: 0,
  height: 0,
  gender: 'female',
  bmiResult: 0,
  isModalVisible: false
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.AGE_COUNTER:
      return {
        ...state,
        age: action.payload
      };
    case Constants.WEIGHT_COUNTER:
      return {
        ...state,
        weight: action.payload
      };
    case Constants.HEIGHT_COUNTER:
      return {
        ...state,
        height: action.payload
      };
    case Constants.GENDER_CHANGED:
      return {
        ...state,
        gender: action.payload
      };
    case Constants.GET_BMI_RESULT:
      return {
        ...state,
        bmiResult: action.payload
      };
    case Constants.MODAL_VISIBILITY:
      return {
        ...state,
        isModalVisible: action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
