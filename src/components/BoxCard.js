import { useState } from "react"
import "./BoxCard.css";

export function BoxCard({ result, children }) {
    const [show, setShow] = useState(true);

    return (
        <div className={show ? "" : "hidden"}>
            <div className={`box ${result}`}>
                {children}
                <button onClick={() => setShow()} className="trigger">Hide</button>
            </div>
        </div>
    )
}
