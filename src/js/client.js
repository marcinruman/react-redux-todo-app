import { applyMiddleware,createStore } from "redux";
import logger from "redux-logger";
import todoApp from "./reducers/reducers";
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions';


const middleware = applyMiddleware(logger());
const store = createStore(todoApp, middleware);

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
