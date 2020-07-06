import Axios from 'axios';

import { api } from '../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const STATUS_CHANGE = createActionName('STATUS_CHANGE');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const statusChangeSuccess = (payload) => ({ payload, type: STATUS_CHANGE });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${api.url}/${api.tables}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const statusChange_Async = (table, status) => {
  return (dispatch) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then( () => {
        dispatch(statusChangeSuccess({table: table, status: status}));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case STATUS_CHANGE: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map (order => order.table === action.payload.table ? {...order, status: action.payload.status} : order),
      };
    }
    default:
      return statePart;
  }
}
