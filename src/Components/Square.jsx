import React from "react";

function Square({value, onSquareClick}) {
    return (
        <button
            className="square h-16 w-16 border border-black bg-white flex justify-center items-center outline-none text-lg font-bold hover:bg-gray-100"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

export default Square;
