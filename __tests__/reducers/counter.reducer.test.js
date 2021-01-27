import * as Constants from '../../app/constants';
import reducer from '../../app/reducers';

describe('Count Reducer Test', () => {
  it('Reducer should returns the initial state', () => {
    const expectedRes = {
      counterReducer: {
        age: 0,
        weight: 0,
        height: 0,
        gender: 'female',
        bmiResult: 0,
        isModalVisible: false
      }
    };
    expect(reducer(undefined, {})).toEqual(expectedRes);
  });

  it('Reducer to change age state', () => {
    const age = 20;
    const expectedRes = {
      counterReducer: {
        age,
        weight: 0,
        height: 0,
        gender: 'female',
        bmiResult: 0,
        isModalVisible: false
      }
    };
    expect(
      reducer(undefined, { type: Constants.AGE_COUNTER, payload: age })
    ).toEqual(expectedRes);
  });

  it('Reducer to change weight state', () => {
    const weight = 80;
    const expectedRes = {
      counterReducer: {
        age: 0,
        weight,
        height: 0,
        gender: 'female',
        bmiResult: 0,
        isModalVisible: false
      }
    };
    expect(
      reducer(undefined, { type: Constants.WEIGHT_COUNTER, payload: weight })
    ).toEqual(expectedRes);
  });

  it('Reducer to change height state', () => {
    const height = 180;
    const expectedRes = {
      counterReducer: {
        age: 0,
        weight: 0,
        height,
        gender: 'female',
        bmiResult: 0,
        isModalVisible: false
      }
    };
    expect(
      reducer(undefined, { type: Constants.HEIGHT_COUNTER, payload: height })
    ).toEqual(expectedRes);
  });

  it('Reducer to change gender state', () => {
    const gender = 'male';
    const expectedRes = {
      counterReducer: {
        age: 0,
        weight: 0,
        height: 0,
        gender,
        bmiResult: 0,
        isModalVisible: false
      }
    };
    expect(
      reducer(undefined, { type: Constants.GENDER_CHANGED, payload: gender })
    ).toEqual(expectedRes);
  });
});
