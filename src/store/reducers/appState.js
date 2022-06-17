import {
  CAROUSEL_DONE,
  FETCHING_DATA,
  DONE_FETCHING_DATA,
  UPDATED_CANCER_TYPES,
  UPDATED_CANCER_DETAILS,
} from '../actions/appState';

const initialState = {
  hasError: false,
  isBusy: false,
  isLoading: false,
  carouselDone: false,
  cancerTypes: [],
  cancerDetails: {},
};

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAROUSEL_DONE:
      return {...state, carouselDone: true};
    case FETCHING_DATA:
      return {...state, isLoading: true};
    case DONE_FETCHING_DATA:
      return {...state, isLoading: false};
    case UPDATED_CANCER_TYPES:
      return {...state, cancerTypes: action.payload};
    case UPDATED_CANCER_DETAILS:
      return {...state, cancerDetails: action.payload};

    default:
      return state;
  }
};

export default appStateReducer;
