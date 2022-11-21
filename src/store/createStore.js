import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employees";

const rootReducer = combineReducers({ employees: employeesReducer });

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}