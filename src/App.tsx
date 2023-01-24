import Board from "./components/Board/Board";
import Alert from "./components/Alert/Alert";

import "./App.css";

function App() {
  // Did the game finished?
  // Anyone won?
  // Is it tied?
  // How to restart game
  // Whose turn is it?
  // How to open/close Alert
  return (
    <div className="App">
      <h1 className="title">Hello Softtek!</h1>
      <p className="turn">Player "O" turn</p>

      <Board />
      {/* <Alert message="" isOpen={false} handleClose={() => null} /> */}
    </div>
  );
}

export default App;
