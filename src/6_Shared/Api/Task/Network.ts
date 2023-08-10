import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ITask } from "./model/ITask"

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://localhost:3001/"}),
    endpoints: (builder) => ({
        getTasks: builder.query<ITask[], number>({
            query: (limit = 10) => ({
                url: "tasks&_limit=" + limit
            }),
        }),
        addTask: builder.mutation({
            query: (task: ITask) => ({
                url: "task",
                method: "POST",
                body: task,
            }),
        }),
    }),
})

export const { useGetTasksQuery, useAddTaskMutation } = taskApi;
export const taskApiReducer =  taskApi.reducer;
export const taskApiMiddleware = taskApi.middleware;
export const taskApiReducerPath = taskApi.reducerPath;