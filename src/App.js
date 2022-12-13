import React, { Component } from "react";
import { useState } from "react";
import "./App.css";

const Button = (props) => (
    <button onClick={props.addClick}>{props.text}</button>
);
const Content = (props) => <h1>{props.text}</h1>;

const StatisticLine = (props) => {
    console.log(props);
    return (
        <p>
            {props.text} {props.value}
        </p>
    );
};

const Statistics = (props) => {
    if (props.sumFeedback > 0) {
        return (
            <div>
                <StatisticLine text="good" value={props.setGood} />
                <StatisticLine text="netural" value={props.setNetural} />
                <StatisticLine text="bad" value={props.setBad} />
                <StatisticLine text="all" value={props.setTotalFeedback} />
                <StatisticLine
                    text="average"
                    value={props.setCalculateAverage}
                />
                <StatisticLine
                    text="positive"
                    value={props.setCalculatePositiveReview}
                />
            </div>
        );
    }
    return (
        <div>
            <p>No feedback given</p>
        </div>
    );
};

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
        if (good - bad >= 0) return (good - bad) / totalFeedback;
    };
    const calculatePositiveReview = () => {
        return good / totalFeedback;
    };
    return (
        <React.Fragment>
            <Content text="give feedback" />
            <Button addClick={incrementGood} text="good" />
            <Button addClick={incrementNetual} text="natural" />
            <Button addClick={incrementBad} text="bad" />
            <Content text="statistics" />
            <Statistics
                sumFeedback={totalFeedback}
                setGood={good}
                setNetural={netural}
                setBad={bad}
                setTotalFeedback={totalFeedback}
                setCalculateAverage={calculateAverage()}
                setCalculatePositiveReview={calculatePositiveReview()}
            />
        </React.Fragment>
    );
};

export default App;
