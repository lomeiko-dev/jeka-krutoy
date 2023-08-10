import {FC} from "react";
import style from "./style.module.scss";


export const AddTask: FC<{name: string}> = ({name}) => {
    return(
        <button className={style.button}>{name}</button>
    )
}