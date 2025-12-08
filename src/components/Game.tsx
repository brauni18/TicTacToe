import { useState } from "react";
import Board from "./Board";

export default function Game() {
    const [squares, __] = useState<(string | null)[]>(
        Array(9).fill(null)
    );
    const [isXNext, _] = useState(true);

    function handleSquareClick(index: number) {
        // Temporary: no gameplay logic yet
        console.log("Clicked square:", index);
    }

    return (
        <div className="game-container">
            <h1>Tic Tac Toe</h1>

            <Board squares={squares} onSquareClick={handleSquareClick} />
            <p>Next Player: {isXNext ? "X" : "O"}</p>

        </div>
    );
}
