import "./App.css";
import ColorPalette from "./components/ColorPalette/ColorPalette";
import LinkList from "./components/LinkList/LinkList";
import Links from "./components/Links/Links";
import MainNavigation from "./components/MainNavigation/MainNavigation";
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
        <LinkList />
        <MainNavigation />
      </div>
    </div>
  );
}

export default App;
