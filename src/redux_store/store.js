import { combineReducers, createStore } from "redux";
import product_Reducer from "./product_reducer";
let reducers = combineReducers({
    products: product_Reducer,
})
let store = createStore(reducers);

export default store;