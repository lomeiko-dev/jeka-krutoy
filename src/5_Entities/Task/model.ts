import { ITask } from "../../6_Shared/Api/Task";

export interface ITasks {
    fieldTitle: string,
    fieldDescription: string,
    tasks: ITask[],
    error: string | null,
}

export const initTasks: ITasks = {
    fieldTitle: "",
    fieldDescription: "",
    tasks: [],
    error: null,
}

export interface IAddedTask extends Pick<ITask, 'title' | 'description'>{};
export interface IChangeTask extends Pick<ITask, 'title' | 'description' | 'id'>{};
export interface IIdTask extends Pick<ITask, 'id'>{};
