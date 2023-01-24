import "./Board.css";

const emptyBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function Board() {
    // What is the state of the board?
    // Whose turn is it?
    // How to update board state with player move?
  return (
    <section className="container">
      <div className="tile">X</div>
      <div className="tile"></div>
      <div className="tile">O</div>
      <div className="tile"></div>
      <div className="tile">X</div>
      <div className="tile"></div>
      <div className="tile">O</div>
      <div className="tile"></div>
      <div className="tile">X</div>
    </section>
  );
}

export default Board;
