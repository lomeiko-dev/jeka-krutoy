
import { ITask } from "../../../6_Shared/Api/Task";
import { IAddedTask } from "../model";

export const getTask = ({title, description}: IAddedTask) => {
    let id: string = "id" + Math.random().toString(16).slice(2);

    let task: ITask = {
        id: id,
        description: description,
        title: title,
        isComplated: false,
    }

    return task;
}