import Square from "./Square";

interface BoardProps {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
}

export default function Board(props: BoardProps) {
  return (
    <div className="board">
      {props.squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => props.onSquareClick(index)} />
      ))}
    </div>
  );
}
