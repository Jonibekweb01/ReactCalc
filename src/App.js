import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { FiDelete } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { CgMathDivide } from "react-icons/cg"
import { AiOutlineClear } from "react-icons/ai"

function App() {
    const [input, setInput] = useState("");
    const calcBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
        calcBtns.push(
            <button
                onClick={(e) => {
                    setInput(input + e.target.value);
                }}
                value={item}
                key={item}
            >
                {" "}
                {item}
            </button>
        );
    });

    return (
        <>
            <div className="wrapper">
                {" "}
                <div className="show-input">
                    <span>{input.length ? input : <span style={{ color: "#fff" }}>Enter number</span>}</span>
                </div>
                <div className="digits flex">{calcBtns}</div>
                <div className="modifiers subgrid">

                    <button
                        onClick={(e) => {
                            try {
                                setInput(
                                    String(eval(input)).length > 3 &&
                                        String(eval(input)).includes(".")
                                        ? String(eval(input).toFixed(4))
                                        : String(eval(input))
                                );
                            } catch (e) {
                                console.log(e);
                            }
                        }}
                        value="="
                    >
                        =
                    </button>
                    <button onClick={() => setInput("")} value="">
                        <AiOutlineClear />
                    </button>
                </div>
                <div className="operations subgrid">
                    <button onClick={(e) => setInput(input + e.target.value)} value="+">
                        <AiOutlinePlus />
                    </button>
                    <button onClick={(e) => setInput(input + e.target.value)} value="-">
                        {" "}
                        <AiOutlineMinus />
                        {" "}
                    </button>

                    <button onClick={(e) => setInput(input + e.target.value)} value="*">
                        {" "}
                        *
                    </button>

                    <button onClick={(e) => setInput(input + e.target.value)} value="/">
                        {" "}
                        <CgMathDivide />
                    </button>

                    <button onClick={() => setInput(input.substr(0, input.length - 1))}>
                        <FiDelete />
                    </button>
                </div>
            </div>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;