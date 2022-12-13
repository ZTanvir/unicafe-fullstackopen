import React, { Component } from "react";
import { useState } from "react";
import "./App.css";

const Btn = (props) => <button onClick={props.addClick}>{props.text}</button>;
const Content = (props) => <h1>{props.text}</h1>;

const App = () => {
    const [good, setGood] = useState(0);
    const [netural, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    // const [totalFeedback, setToalFeedback] = useState(0);

    const incrementGood = () => {
        setGood(good + 1);
        // setToalFeedback(totalFeedback + 1);
    };
    const incrementNetual = () => {
        setNeutral(netural + 1);
        // setToalFeedback(totalFeedback + 1);
    };
    const badIncrement = () => {
        setBad(bad + 1);
        // setToalFeedback(totalFeedback + 1);
    };
    return (
        <React.Fragment>
            <Content text="give feedback" />
            <Btn addClick={incrementGood} text="good" />
            <Btn addClick={incrementNetual} text="natural" />
            <Btn addClick={badIncrement} text="bad" />
            <Content text="statistics" />
            <p>good {good}</p>
            <p>netural {netural}</p>
            <p>bad {bad}</p>
            {/* <p>all {totalFeedback}</p> */}
        </React.Fragment>
    );
};

export default App;
