import { useState } from 'react';
import { TaskCard } from './TaskCard';
import "./TaskList.css";
import "./AddTask.css";

export const TaskList = () => {
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed: true}, 
        {id: 7825, name: "Edit React Lectures", completed: false}, 
        {id: 8391, name: "Watch Lectures", completed: false}
    ]);
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <section className='tasklist'>
        <ul>
            <div className='header'>
                <h1>TaskList</h1>
                <button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>
            </div>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
    </section>
  )
}




// import { useState } from 'react';
// import { TaskCard } from './TaskCard';
// import { BoxCard } from './BoxCard';

// import "./TaskList.css"

// export const TaskList = ({ concept }) => {
//     const [tasks, setTasks] = useState([
//         { id: 5271, name: "Record React Lectures", completed: true },
//         { id: 7825, name: "Edit React Lectures", completed: false },
//         { id: 8391, name: "Watch Lectures", completed: false }
//     ]);
//     const [show, setShow] = useState(true);
//     const taskmate_style = {
//         color: show ? "#3D8361" : "#be3434",
//         border: "2px solid #be3434",
//         borderColor: show ? "#3D8361" : "#be3434",
//         borderRadius: "5px", // border-radius is not working here, so need to use camelcase
//         fontSize:"32px",
//         padding: "20px"
//     };
//     function handleDelete(id) {
//         setTasks(tasks.filter(task => task.id !== id));
//     }

//     return (
//         <section className='tasklist'>
//             <h1 style={taskmate_style
//                 // {
//                 //     color: "#be3434",
//                 //     border: "1px solid #be3434",
//                 //     padding: "20px"
//                 // }
//             }>Task List</h1>
//             <ul>
//                 <button className='trigger' onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
//                 {show && tasks.map((task) => (
//                     <TaskCard key={task.id} concept={concept} task={task} handleDelete={handleDelete} />
//                 ))}
//             </ul>
//             <BoxCard result="success">
//                 <p className="title">Lorem ipsum dolor sit amet.</p>
//                 <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p>
//             </BoxCard>

//             <BoxCard result="warning">
//                 <p className="title">Lorem ipsum dolor sit.</p>
//                 <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, eum odit! Labore eaque fuga repellat adipisci molestias quasi animi fugiat necessitatibus sunt vel, optio rem non quidem! Blanditiis cupiditate iusto omnis reprehenderit assumenda maxime, nam perferendis impedit libero odit eius eum aut cum ad, excepturi officiis repudiandae. Molestiae, eum cumque?</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nulla?</p>
//             </BoxCard>
//         </section>
//     )
// }