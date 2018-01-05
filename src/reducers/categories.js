import { SELECT_CATEGORY } from '../actions/types';

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return Object.assign({}, state, {
        selected: action.payload
      })
    default:
      return state
  }
}

const initialState = {
  selected: 0,
  items: [
    {
      value: 'All categories',
      cat: 'all'
    },
    {
      value: 'Business',
      cat: 'b'
    },
    {
      value: 'Entertainment',
      cat: 'e'
    },
    {
      value: 'Health',
      cat: 'm'
    },
    {
      value: 'Sci/Tech',
      cat: 't'
    },
    {
      value: 'Sports',
      cat: 's'
    },
    {
      value: 'Top stories',
      cat: 'h'
    }
  ]
};
