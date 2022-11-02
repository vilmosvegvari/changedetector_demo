import {createReducer, on} from "@ngrx/store";
import {changeState, loadState} from "./app.actions";


// test  - test1 - test2
//               - test2
//       - test1 - test2
//               - test2

export interface AppState{
  app: State;
}

export interface State {
  level0: boolean;
  level1a: boolean;
  level1b: boolean;
  level2a: boolean;
  level2b: boolean;
  level2c: boolean;
  level2d: boolean;
}

const initialState: State = {
  level0: false,
  level1a: false,
  level1b: false,
  level2a: false,
  level2b: false,
  level2c: false,
  level2d: false,
};

export const appReducer = createReducer(initialState,
  on(changeState, (state, action) => {
    const newState = {...state};
    if (action.level0 !== undefined){
      newState.level0 = action.level0;
    }
    if (action.level1a !== undefined){
      newState.level1a = action.level1a;
    }
    if (action.level1b !== undefined){
      newState.level1b = action.level1b;
    }
    if (action.level2a !== undefined){
      newState.level2a = action.level2a;
    }
    if (action.level2b !== undefined){
      newState.level2b = action.level2b;
    }
    if (action.level2c !== undefined){
      newState.level2c = action.level2c;
    }
    if (action.level2d !== undefined){
      newState.level2d = action.level2d;
    }
    return newState;
  }),
  on(loadState, state => state)
)

