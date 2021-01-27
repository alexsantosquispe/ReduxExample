import * as Constants from '../../app/constants';
import * as Actions from '../../app/actions/counts';

describe('Actions test', () => {
  it('Age changed action', () => {
    const value = 20;
    const result = {
      type: Constants.AGE_COUNTER,
      payload: value
    };

    expect(Actions.changeAge(value)).toEqual(result);
  });

  it('Weight changed action', () => {
    const value = 60;
    const result = {
      type: Constants.WEIGHT_COUNTER,
      payload: value
    };

    expect(Actions.changeWeigth(value)).toEqual(result);
  });

  it('Height changed action', () => {
    const value = 170;
    const result = {
      type: Constants.HEIGHT_COUNTER,
      payload: value
    };

    expect(Actions.changeHeight(value)).toEqual(result);
  });

  it('Gender changed action', () => {
    const value = 'female';
    const result = {
      type: Constants.GENDER_CHANGED,
      payload: value
    };

    expect(Actions.genderChanged(value)).toEqual(result);
  });
});
