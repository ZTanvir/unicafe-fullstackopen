import React, { Component } from "react";
import { useState } from "react";
import "./App.css";

const Btn = (props) => <button onClick={props.addClick}>{props.text}</button>;
const Content = (props) => <h1>{props.text}</h1>;

const App = () => {
    const [good, setGood] = useState(0);
    const [netural, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [totalFeedback, setToalFeedback] = useState(0);

    const incrementGood = () => {
        setGood(good + 1);
        setToalFeedback(totalFeedback + 1);
    };
    const incrementNetual = () => {
        setNeutral(netural + 1);
        setToalFeedback(totalFeedback + 1);
    };
    const incrementBad = () => {
        setBad(bad + 1);
        setToalFeedback(totalFeedback + 1);
    };
    const calculateAverage = () => {
        if (good - bad >= 0) return ((good - bad) / totalFeedback).toFixed(5);
    };
    const calculatePositiveReview = () => {
        return good / totalFeedback;
    };
    return (
        <React.Fragment>
            <Content text="give feedback" />
            <Btn addClick={incrementGood} text="good" />
            <Btn addClick={incrementNetual} text="natural" />
            <Btn addClick={incrementBad} text="bad" />
            <Content text="statistics" />
            <p>good {good}</p>
            <p>netural {netural}</p>
            <p>bad {bad}</p>
            <p>all {totalFeedback}</p>
            <p>average {calculateAverage()}</p>
            <p>positive {calculatePositiveReview()}%</p>
        </React.Fragment>
    );
};

export default App;
