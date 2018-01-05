import { FETCH_STORIES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case `${FETCH_STORIES}_FULFILLED`:
      const summary = JSON.parse(action.payload.data.slice(5)).storySummaries;
      return summary.trendingStories
    case `${FETCH_STORIES}_PENDING`:
      return null
    default:
      return state
  }
}
