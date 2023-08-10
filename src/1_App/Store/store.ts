import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {taskApiMiddleware, taskApiReducer, taskApiReducerPath} from "../../6_Shared/Api/Task";
import TaskReducer from "../../5_Entities/Task/taskReducer";

const rootReducer = combineReducers({
    tasks: TaskReducer,
    [taskApiReducerPath]: taskApiReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([taskApiMiddleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;