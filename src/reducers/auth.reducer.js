import * as auth from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  error: '',
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case auth.ACCOUNT_FORM_UPDATE:
      return {...state, [action.payload.property]: action.payload.value};

    case auth.ACCOUNT_LOGIN_REQUEST:
      return {...state, isLoading: true, error: ''};

    case auth.ACCOUNT_LOGIN_SUCCESS:
      return {...state, isLoading: false};

    case auth.ACCOUNT_LOGIN_FAILUE:
      return {...state, error: action.payload};

    case auth.ACCOUNT_SIGNUP_REQUEST:
      return {...state, isLoading: true, error: ''};

    case auth.ACCOUNT_SIGNUP_SUCCESS:
      return {...state, isLoading: false};

    case auth.ACCOUNT_SIGNUP_FAILUE:
      return {...state, error: action.payload};

    default:
      return state;
  };
};
