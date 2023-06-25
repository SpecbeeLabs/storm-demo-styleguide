import "./App.css";
import ColorPalette from "./components/ColorPalette/ColorPalette";

function App() {
  return (
    <div className="app" id="page">
      <header className="app__header">
        <h1 className="page-title">Storm StyleGuide</h1>
      </header>
      <ColorPalette />
    </div>
  );
}

export default App;
