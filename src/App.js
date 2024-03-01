
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./App.css";
import { Footer } from "./components/Footer";

export default function App() {

    const concept = "Prop Drilling";

    return (
        <div className="App">
            <Header />
            <TaskList concept={concept} />
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
