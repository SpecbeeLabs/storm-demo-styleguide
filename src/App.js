import "./App.css";
import ColorPalette from "./components/ColorPalette/ColorPalette";
import Links from "./components/Links/Links";
import Typography from "./components/Typography/Typography";

function App() {
  return (
    <div className="app" id="page">
      <header className="app__header">
        <h1 className="page-title">Storm StyleGuide</h1>
      </header>
      <div className="app__content">
        <ColorPalette />
        <Typography />
        <Links />
      </div>
    </div>
  );
}

export default App;
