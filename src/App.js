
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./App.css";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { useState } from "react";

export default function App() {

    const [tasks, setTasks] = useState([]);

    return (
        <div className="App">
            <Header />
            <AddTask tasks={tasks} setTasks={setTasks} />
            <TaskList  tasks={tasks} setTasks={setTasks}  />
            <Footer />
        </div>
    );




    // const [count, setCount] = useState(0);

    // function handleAdd() {
    //     setCount(count + 1)
    // }

    // function handleSub() {
    //     setCount(count - 1);
    // }
    // function handleReset() {
    //     setCount(0);
    // }
    // return (
    //     <div className="App">
    //         <div className="box">
    //             <p>{count}</p>
    //             <button onClick={handleAdd} className="add">ADD</button>
    //             <button onClick={handleSub} className="sub">SUB</button>
    //             <button onClick={handleReset} className="reset">RESET</button>
    //         </div>
    //     </div>


    // )




}
