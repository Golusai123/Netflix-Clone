// import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
{/* Nav */} <Nav/>
{/* banner */} <Banner/>
    <Row title="NETFLIX ORIGINALS" 
    fetchUrl = {requests.fetchNetflixOriginals}
    isLargeRow
    />
    <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl = {requests.fetchToprated}/>
    <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
    <Row title="Romance movies" fetchUrl = {requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
