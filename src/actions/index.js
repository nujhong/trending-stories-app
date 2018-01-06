import axios from 'axios';
import {
  GOOGLE_TRENDS_API, SELECT_STORY, SELECT_CATEGORY, SELECT_COUNTRY, FETCH_STORIES
} from './types';

export function fetchStories() {
  return (dispatch, getState) => {
    const { categories, countries } = getState();
    const { cat } = categories.items[categories.selected];
    const { geo } = countries.items[countries.selected];

    const request = axios.get(`${GOOGLE_TRENDS_API}/stories/latest?`, {
      params: {
        hl: 'en-AU',
        tz: -660,
        cat: cat,
        fi: 15,
        fs: 15,
        geo: geo,
        ri: 300,
        rs: 15,
        sort: 0
      }
    });

    dispatch({
      type: FETCH_STORIES,
      payload: request
    });
  }
}

export function selectStory(storyId) {
  return {
    type: SELECT_STORY,
    payload: storyId
  }
}

export function selectCategory(category) {
  return dispatch => {
    dispatch({
      type: SELECT_CATEGORY,
      payload: category
    })
    dispatch(fetchStories())
  }
}

export function selectCountry(country) {
  return dispatch => {
    dispatch({
      type: SELECT_COUNTRY,
      payload: country
    })
    dispatch(fetchStories())
  }
}
