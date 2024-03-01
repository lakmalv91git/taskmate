import "./TaskCard.css";
import style from "./TaskCard.module.css";

export const TaskCard = ({ task, handleDelete, concept }) => {
  return (
    <div className="taskcard">
      <li className={task.completed ? "completed" : "incomplete"}>
        <span className={style.title}>{task.id} - {task.name} - {concept}</span>
        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
      </li>
    </div>
  )
}