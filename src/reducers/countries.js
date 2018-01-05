import { SELECT_COUNTRY } from '../actions/types';

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_COUNTRY:
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
      value: 'Australia',
      geo: 'AU'
    },
    {
      value: 'Argentina',
      geo: 'US'
    },
    {
      value: 'Austria',
      geo: 'AT'
    },
    {
      value: 'Belgium',
      geo: 'BE'
    },
    {
      value: 'Brazil',
      geo: 'BR'
    },
    {
      value: 'Canada',
      geo: 'CA'
    },
    {
      value: 'Chile',
      geo: 'CL'
    },
    {
      value: 'Colombia',
      geo: 'CO'
    },
    {
      value: 'France',
      geo: 'FR'
    },
    {
      value: 'Germany',
      geo: 'DE'
    },
    {
      value: 'India',
      geo: 'IN'
    },
    {
      value: 'Ireland',
      geo: 'IE'
    },
    {
      value: 'Italy',
      geo: 'IT'
    },
    {
      value: 'Japan',
      geo: 'JP'
    },
    {
      value: 'Malaysia',
      geo: 'MY'
    },
    {
      value: 'Mexico',
      geo: 'MX'
    },
    {
      value: 'Netherlands',
      geo: 'NL'
    },
    {
      value: 'New Zealand',
      geo: 'NZ'
    },
    {
      value: 'Norway',
      geo: 'NO'
    },
    {
      value: 'Peru',
      geo: 'PE'
    },
    {
      value: 'Philippines',
      geo: 'PH'
    },
    {
      value: 'Poland',
      geo: 'PL'
    },
    {
      value: 'Portual',
      geo: 'PT'
    },
    {
      value: 'Russia',
      geo: 'RU'
    },
    {
      value: 'Sweden',
      geo: 'SE'
    },
    {
      value: 'Switzerland',
      geo: 'CH'
    },
    {
      value: 'Turkey',
      geo: 'TR'
    },
    {
      value: 'United Kingdom',
      geo: 'GB'
    },
    {
      value: 'United States',
      geo: 'US'
    },
    {
      value: 'Vietnam',
      geo: 'VN'
    }
  ]
};
