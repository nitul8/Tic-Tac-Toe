import React, {useState} from "react";
import Board from "./Board";

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquare = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move === 9) {
            description = "Game ended";
        } else if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Start the game";
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="grid grid-row-2 gap-4 items-center">
            <div className="game-board mx-auto">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquare}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info mx-auto mt-32 text-center overflow-hidden max-h-20 flex flex-col-reverse justify-end">
                {moves}
            </div>
        </div>
    );
}

export default Game;
