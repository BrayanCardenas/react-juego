import { useState } from "react";

const TURNS = {
  O: "o",
  X: "x",
};
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {

    if(board[index]) return

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    const newBoard = [...board];
    
    setTurn(newTurn);
    newBoard[index] = turn;
    setBoard(newBoard);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((item, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {item}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      </section>
    </main>
  );
}

export default App;
