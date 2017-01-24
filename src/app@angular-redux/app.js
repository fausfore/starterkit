import { combineReducers } from 'redux';
import { categories, category } from './components/categories/categories.state';
import { bookmarks } from './components/bookmarks/bookmarks.state';
import ngRedux from 'ng-redux'

const appModule = angular.module('reduxApp', [
  ngRedux
])
.config(config)

const rootReducer = combineReducers({
  categories,
  category,
  bookmarks
});

const config = $ngReduxProvider => {
  'ngInject';

  $ngReduxProvider.createStoreWith(rootReducer, []);
};