import React from "react";
import Square from "./Square";
import {Star, X} from "lucide-react";

function Board({xIsNext, squares, onPlay}) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if (squares.every((square) => square !== null)) {
        status = "Match Draw";
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div>
            <div className="p-8 text-center">{status}</div>
            <div className="flex justify-center items-center">
                <Square
                    value={renderIcon(squares[0])}
                    onSquareClick={() => handleClick(0)}
                />
                <Square
                    value={renderIcon(squares[1])}
                    onSquareClick={() => handleClick(1)}
                />
                <Square
                    value={renderIcon(squares[2])}
                    onSquareClick={() => handleClick(2)}
                />
            </div>
            <div className="flex justify-center items-center">
                <Square
                    value={renderIcon(squares[3])}
                    onSquareClick={() => handleClick(3)}
                />
                <Square
                    value={renderIcon(squares[4])}
                    onSquareClick={() => handleClick(4)}
                />
                <Square
                    value={renderIcon(squares[5])}
                    onSquareClick={() => handleClick(5)}
                />
            </div>
            <div className="flex justify-center items-center">
                <Square
                    value={renderIcon(squares[6])}
                    onSquareClick={() => handleClick(6)}
                />
                <Square
                    value={renderIcon(squares[7])}
                    onSquareClick={() => handleClick(7)}
                />
                <Square
                    value={renderIcon(squares[8])}
                    onSquareClick={() => handleClick(8)}
                />
            </div>
        </div>
    );
}

function renderIcon(value) {
    if (value === "X") {
        return <X />;
    }
    if (value === "O") {
        return <Star />;
    }
    return null;
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

export default Board;
