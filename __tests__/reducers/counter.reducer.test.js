import reducer from '../../app/reducers';
import { COUNTER_CHANGE } from '../../app/constants';

describe('Count Reducer Test', () => {
  it('Reducer should returns the initial state', () => {
    const expectedRes = { countReducer: { count: 0 } };
    expect(reducer(undefined, {})).toEqual(expectedRes);
  });

  it('Reducer should return the incremented/decremented counter', () => {
    const expectedRes = { countReducer: { count: 5 } };
    expect(reducer(undefined, { type: COUNTER_CHANGE, payload: 5 })).toEqual(
      expectedRes
    );
  });
});
