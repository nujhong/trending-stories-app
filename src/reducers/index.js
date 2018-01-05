import { combineReducers } from 'redux';
import stories from './stories';
import selection from './selection';
import categories from './categories';
import countries from './countries';

export default combineReducers({
  stories,
  selection,
  categories,
  countries
});
