import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import MainCarousel from "./Components/MainCarousel/MainCarousel";
import FeaturedToday from "./Components/FeaturedToday/FeaturedToday";
import TopPicks from "./Components/TopPicks/TopPicks";
import Watchlist from "./Components/Watchlist/Watchlist";
import Top10 from "./Components/Top10/Top10";

function App() {
  return (
    <>
      <Header />
      <MainCarousel />
      <FeaturedToday />
      <h2 className="ft">What to watch</h2>
      <TopPicks />
      <Watchlist />
      <Top10 />
      <p>IMDB originals</p>
      <p>In theatres</p>
    </>
  );
}

export default App;
