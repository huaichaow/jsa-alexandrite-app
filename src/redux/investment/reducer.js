import {
  FETCH_PORTFOLIO_DETAILS_START,
  FETCH_PORTFOLIO_DETAILS_FAIL,
  FETCH_PORTFOLIO_DETAILS_SUCCESS,
} from './actionType';

const initState = {
  isLoading: false,
  totalValue: 0,
  instruments: {},
  stocks: [],
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO_DETAILS_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_PORTFOLIO_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_PORTFOLIO_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        ...action.payload,
      };
    default:
      return state;
  }
};
