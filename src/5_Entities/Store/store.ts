import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import TaskReducer from "../Task/taskReducer";
import { taskApiMiddleware, taskApiReducer, taskApiReducerPath } from "../../6_Shared/Api/Task";

const rootReducer = combineReducers({
    tasks: TaskReducer,
    [taskApiReducerPath]: taskApiReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;