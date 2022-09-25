import logo from "./logo.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
       <main>
        <Dictionary defaultKeyword="sea"/>
       </main>
       <footer className="App-footer"><small>Coded by <a href="https://tiny-semolina-5cec1e.netlify.app/" target="_blank" rel="noreferrer">Nataliia Prokopenko</a>, open-soursed on <a href="https://github.com/NataliiaProkopenko87/dictionary-project" target="_blank" rel="noreferrer">GitHub</a></small></footer>
       </div>
    </div>
  );
}


