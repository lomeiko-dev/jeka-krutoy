import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChangeTask, IIdTask, initTasks } from "./model";
import { getTask } from "./lib/utils";
import { ITask } from "../../6_Shared/Api/Task";
import { RootState } from "../Store";

const TaskReducer = createSlice({
    name: "tasks",
    initialState: initTasks,
    reducers: {
        uploadTasks: (state, action: PayloadAction<ITask[]>) => {
            state.tasks = action.payload;
        },
        changeFieldTitle: (state, action: PayloadAction<string> ) => {
            state.fieldTitle = action.payload;
        },
        changeFieldDescription: (state, action: PayloadAction<string> ) => {
            state.fieldTitle = action.payload;
        },
        toggleComlated: (state, action: PayloadAction<IIdTask>) => {
            let task = state.tasks.find(item => item.id === action.payload.id);

            if(task === undefined) {
                state.error = "Task in not find";
                return;
            }

            task.isComplated = !task.isComplated;
        },
        addTask: (state) => {
            state.tasks.push(getTask({title: state.fieldTitle, description: state.fieldDescription}));
        },
        changeTask: (state, action: PayloadAction<IChangeTask>) => {
            let task = state.tasks.find(item => item.id === action.payload.id);

            if(task === undefined) {
                state.error = "Task in not find";
                return;
            }

            task.title = action.payload.title;
            task.description = action.payload.description;
        },
        deleteTask: (state, action: PayloadAction<IIdTask>) => {
            state.tasks = state.tasks.filter(item => item.id !== action.payload.id);
        }
    }
});

export const selectFieldTitle = (state: RootState) => state.tasks.fieldTitle;
export const selectFieldDescription = (state: RootState) => state.tasks.fieldDescription;
export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectError = (state: RootState) => state.tasks.error;

export const {changeFieldTitle, changeFieldDescription, toggleComlated, addTask, changeTask, deleteTask} = TaskReducer.actions;
export default TaskReducer.reducer;