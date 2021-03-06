import {
  FETCH_STOCK_DETAILS_START,
  FETCH_STOCK_DETAILS_SUCCESS,
  FETCH_STOCK_DETAILS_FAIL,
  FETCH_HISTORY_CHART_DATA_START,
  FETCH_HISTORY_CHART_DATA_SUCCESS,
  FETCH_HISTORY_CHART_DATA_FAIL,
  RESET_STOCK_INFO,
} from './actionType';

const initState = {
  isLoadingStockStatsData: false,
  stockStatsData: undefined,
  stockStatsDataError: undefined,
  isLoadingHistoricalChartData: true,
  historicalData: undefined,
  historicalDataError: undefined,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_STOCK_DETAILS_START:
      return {
        ...state,
        isLoadingStockStatsData: true,
      };
    case FETCH_STOCK_DETAILS_SUCCESS:
      return {
        ...state,
        isLoadingStockStatsData: false,
        stockStatsData: action.payload,
      };
    case FETCH_STOCK_DETAILS_FAIL:
      return {
        ...state,
        isLoadingStockStatsData: false,
        stockStatsDataError: action.payload,
      };
    case FETCH_HISTORY_CHART_DATA_START:
      return {
        ...state,
        isLoadingHistoricalChartData: true,
        historicalDataError: undefined,
      };
    case FETCH_HISTORY_CHART_DATA_SUCCESS:
      return {
        ...state,
        isLoadingHistoricalChartData: false,
        historicalData: action.payload,
      };
    case FETCH_HISTORY_CHART_DATA_FAIL:
      return {
        ...state,
        isLoadingHistoricalChartData: false,
        historicalDataError: action.payload,
      };
    case RESET_STOCK_INFO:
      return initState;
    default:
      return state;
  }
};
