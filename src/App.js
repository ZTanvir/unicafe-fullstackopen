import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    ];
    const vote = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    const [selected, setSelected] = useState(0);
    const [voteAnicdote, setVote] = useState({ ...vote });
    const genarateRandomNumber = () => {
        return Math.floor(Math.random() * anecdotes.length);
    };
    const changeSelect = () => {
        setSelected(genarateRandomNumber());
    };
    const addVote = () => {
        voteAnicdote[selected] += 1;
        setVote({ ...voteAnicdote });
    };
    const mostVotedAnicdote = (anicdotesObject) => {
        let mostVote = anicdotesObject[0];
        let mostVotedAnicdot = anicdotesObject[0];
        for (let key in anicdotesObject) {
            if (anicdotesObject[key] > mostVote) {
                mostVote = anicdotesObject[key];
                mostVotedAnicdot = key;
            }
        }

        return mostVotedAnicdot;
    };

    return (
        <React.Fragment>
            <h1>{anecdotes[selected]}</h1>
            <div>Has {voteAnicdote[selected]} votes</div>
            <button onClick={addVote}>Vote</button>
            <button onClick={changeSelect}>Next Anecdote</button>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[mostVotedAnicdote(voteAnicdote)]}</p>
        </React.Fragment>
    );
};

export default App;
