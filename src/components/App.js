import React, { useState } from "react";
import '../styles/App.css';

function App() {
    //    You were using useState inside a class component, which is invalid. Hooks only work in functional components.

    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [answer, setAnswer] = useState("")

    function calculate() {
        if( !first.trim() || !second.trim()) {
            setAnswer("Please Enter valid input");
            return;
        }
        let firstArray = first.split('');
        let secondArray = second.split('')
        for (let char of first) {
            if (secondArray.includes(char)) {
                secondArray.splice(secondArray.indexOf(char), 1);
                firstArray.splice(firstArray.indexOf(char), 1);
            }
        }
        let leftChar = firstArray.length + secondArray.length

        let result = leftChar % 6

        const relationships = {
            1: "Friends",
            2: "Love",
            3: "Affection",
            4: "Marriage",
            5: "Enemy",
            0: "Siblings"
        }

        setAnswer(relationships[result])
    }

    function clear(){
        setFirst("");
        setSecond("");
        setAnswer("");
    }

    return (
        <div id="main">

            {/* <input value={setFirst()} data-testid="input1" name="name1" placeholder="Enter first name"></input> */}
    {/* setFirst() is a state update function, not a value-returning function
    setFirst() returns undefined, so your input would always be empty         */}
            <input value={first} onChange={(e) => setFirst(e.target.value)} data-testid="input1" name="name1" placeholder="Enter first name"></input>
            <input value={second} onChange={(e) => setSecond(e.target.value)} data-testid="input2" name="name2" placeholder="Enter second name"></input>
            {/* <button onClick="calculate()" data-testid="calculate_relationship" name="calculate_relationship">Calculate</button> */}
    {/* onClick="calculate()" is incorrect JSX syntax - it should be a function reference. */}
            <button onClick={calculate} data-testid="calculate_relationship" name="calculate_relationship">Calculate</button>
            <button onClick={clear} data-testid="clear" name="clear">Clear</button>
            <h3 data-testid="answer">{answer}</h3>
        </div>
    )
}



export default App;

