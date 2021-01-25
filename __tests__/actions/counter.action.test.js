import { COUNTER_CHANGE } from '../../app/constants';
import { changeCount } from '../../app/actions/counts';

it('Counter acttion', () => {
  const value = 2;
  const result = {
    type: COUNTER_CHANGE,
    payload: value
  };

  expect(changeCount(value)).toEqual(result);
});
