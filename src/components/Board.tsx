import Square from "./Square";

interface BoardProps {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
}

export default function Board(props: BoardProps) {
  return (
    <div className="board">
      <Square value={props.squares[0]} onClick={() => props.onSquareClick(0)} />
      <Square value={props.squares[1]} onClick={() => props.onSquareClick(1)} />
      <Square value={props.squares[2]} onClick={() => props.onSquareClick(2)} />
      <Square value={props.squares[3]} onClick={() => props.onSquareClick(3)} />
      <Square value={props.squares[4]} onClick={() => props.onSquareClick(4)} />
      <Square value={props.squares[5]} onClick={() => props.onSquareClick(5)} />
      <Square value={props.squares[6]} onClick={() => props.onSquareClick(6)} />
      <Square value={props.squares[7]} onClick={() => props.onSquareClick(7)} />
      <Square value={props.squares[8]} onClick={() => props.onSquareClick(8)} />
    </div>
  );
}
