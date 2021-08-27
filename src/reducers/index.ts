import { combineReducers } from "redux";
import superheroReducer from "./superheroReducer";

const rootReducer = combineReducers({
    superhero: superheroReducer
});

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;