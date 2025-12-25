import { useEffect, useState } from "react";
import { MdRefresh } from "react-icons/md";
import Board from "./Board";

export default function Game() {
    const [isXNext, setIsXNext] = useState(true);
    const [squares, setSquares] = useState<(string | null)[]>(
        Array(9).fill(null)
    );
    const [winner, setWinner] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState<number>(10);
    
    const calculateWinner = (squaresArray: (string | null)[]) => {
        const WinningLines = [
            [0, 1, 2],
            [3, 4, 5], 
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
     for (let i = 0; i < WinningLines.length; i++) {

            const [a, b, c] = WinningLines[i];
            if (
                squaresArray[a] &&
                squaresArray[a] === squaresArray[b] &&
                squaresArray[a] === squaresArray[c]
            ){
                return squaresArray[a];
            }
        }
        return null;

    }
    const disableBoard = () => {
        const buttons = document.querySelectorAll(".square");
        buttons.forEach((button) => {
            (button as HTMLButtonElement).disabled = true;
        });
    }
    const enableBoard = () => {
        const buttons = document.querySelectorAll(".square");
        buttons.forEach((button) => {
            (button as HTMLButtonElement).disabled = false;
        });
    }
    useEffect(() => {
        if (winner === null && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000); 
            
           
            return () => clearInterval(interval);
        }
        if (timeLeft === 0) {
            alert("Time's up! Next player's turn.");
            setIsXNext(!isXNext);
            setTimeLeft(10); 
        }
    }, [timeLeft, winner]); 

    function handleSquareClick(index: number) {
        
        if (squares[index] === null) {
            const newSquares = [...squares];
            newSquares[index] = isXNext ? "X" : "O";

            setSquares(newSquares);
            setIsXNext(!isXNext);
            const gameWinnerwinner = calculateWinner(newSquares);
            
            setWinner(gameWinnerwinner);

            if  (gameWinnerwinner != null) {
                alert("Winner is: " + gameWinnerwinner);
                 disableBoard();
                 setTimeLeft(0);
                 
            }
            setTimeLeft(10);
        } 
        else if (!squares.includes(null) && winner === null) {
            alert("It's a draw!");
            disableBoard();
            setTimeLeft(0);
        }
        else{
            alert("Square already occupied!");
            return;
        }
    }
    
    return (
        <div className="game-container">
            <h1>Tic Tac Toe</h1>
            <button
                className="reset-button"
                onClick={() => {
                    setSquares(Array(9).fill(null));
                    setIsXNext(true);
                    setWinner(null);
                    setTimeLeft(10);
                    enableBoard();
                }}
            >
                <MdRefresh />
            </button>
            <p>Time Left: {timeLeft} seconds</p>
            <Board squares={squares} onSquareClick={handleSquareClick} />
            <p>Next Player: {isXNext ? "X" : "O"}</p>

        </div>
    );
}
