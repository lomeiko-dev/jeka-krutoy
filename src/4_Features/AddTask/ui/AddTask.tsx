import style from "./style.module.scss";


export const AddTask: React.FC<{name: string}> = ({name}) => {
    return(
        <button className={style.button}>{name}</button>
    )
}