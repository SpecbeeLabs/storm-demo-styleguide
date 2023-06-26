import "./App.css";
import Banner from "./components/Banner/Banner";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Buttons from "./components/Buttons/Buttons";
import ColorPalette from "./components/ColorPalette/ColorPalette";
import HeroCard from "./components/HeroCard/HeroCard";
import ImageCard from "./components/ImageCard/ImageCard";
import ImageTextCard from "./components/ImageTextCard/ImageTextCard";
import LinkCard from "./components/LinkCard/LinkCard";
import LinkList from "./components/LinkList/LinkList";
import Links from "./components/Links/Links";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import TextCard from "./components/TextCard/TextCard";
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
        <Breadcrumb />
        <LinkList />
        <MainNavigation />
        <Buttons />
        <Banner />
        <TextCard />
        <LinkCard />
        <ImageCard />
        <ImageTextCard />
        <HeroCard />
      </div>
    </div>
  );
}

export default App;
