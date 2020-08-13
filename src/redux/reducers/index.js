import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import storeReducer from './storeReducer';
import locationsReducer from './locationsReducer';
import supportReducer from './supportReducer';
import clientStoreReducer from './clientStoreReducer';
import individualStoreReducer from './individualStoreReducer';
import clientDashboardStoreReducer from './clientDashboardStoreReducer';
import adminUserReducer from './adminUserReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  storeReducer, // will hold new customer data/selected customer data
  locationsReducer, // will store customer location data
  supportReducer, // will handle support ticket interaction
  clientStoreReducer, // will handle a single client store
  individualStoreReducer,
  clientDashboardStoreReducer,
  adminUserReducer,
});

export default rootReducer;
