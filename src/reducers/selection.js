import { SELECT_STORY } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case `${SELECT_STORY}_FULFILLED`:
      return action.payload
    default:
      return state
  }
}
