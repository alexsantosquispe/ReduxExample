import { COUNTER_CHANGE } from '../constants';

export const changeCount = (payload) => ({
  type: COUNTER_CHANGE,
  payload
});
