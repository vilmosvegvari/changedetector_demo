import {createAction, props} from "@ngrx/store";
import {State} from "./app.reducer";

export const changeState = createAction('[AppModule] Change State', props<Partial<State>>())

export const loadState = createAction('[AppModule] Load State')
