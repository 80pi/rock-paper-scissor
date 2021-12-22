import { createStore } from "redux"
import reducer from './redux/reducer/rootReducer';

const store=createStore(reducer,{})
export default store