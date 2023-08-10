import {IAddedTask} from "../model";
import {ITask} from "../../../6_Shared/Api/Task";

export const getTask = ({title, description}: IAddedTask) => {
    const id: string = Date.now().toString()

    const task: ITask = {
        id: id,
        description: description,
        title: title,
        isComplated: false,
    }

    return task;
}