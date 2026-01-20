import './App.css';
import enVisionB from './images/enVisionB.png';
import searchIcon from './images/searchIcon.svg';
import WorldMapFunc from './WorldMap';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import youtube from './images/youtube.png';

function App() {
  return (

    <div>
    <header>
      <div className="logo">
        <img src={enVisionB} alt="enVisionB logo"/>
      </div>
      <h2>Statistics Website on Map</h2>
      <form>
        <button type="submit" className="searchButton"><img src={searchIcon} alt="search icon"/></button>
        <input type="text" name="query" id="searchInput" placeholder="Search..." />
      </form>
    </header>
    <div className="topics">
      <button className="topicsTag" id="Ec">Economics</button>
      <button className="topicsTag">Demography</button>
      <button className="topicsTag">Society</button>
      <button className="topicsTag">Psychology</button>
    </div>
    <content>
      <WorldMapFunc/>
      <list className="list">
        <div className="title"><h3>Best Economics</h3></div>
        <div className="statBar">
          <div className="num"><h3>1</h3></div>
          <div className="country"><h3>USA</h3></div>
          <div className="per"><h3>$25.5</h3></div>
        </div>
        {/* Rest of your content */}
      </list>
    </content>
    <footer id="contact">
      <p>Copyright innovi 2022 - 2026</p>
      <div className="socials">
        <img src={facebook} alt="icons"/>
        <img src={twitter}alt="icons"/>
        <img src={youtube} alt="icons"/>
      </div>
      <p>info.envision@innovi.com</p>
    </footer>
  </div>


  );
}

export default App;
