import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import Bio from './Bio'

function App() {
  return (
    <div className="App">
      <h1> Akil Griffiths</h1>
       <h2> Software Engineer</h2>
       <p className="kinda">kinda</p>
       <h2 className="titles">Projects</h2>
       <Projects />
       <h2 className="titles"> Why Code?</h2>
       <Bio />
       <h2 className="titles"> More about me</h2>
    </div>
  );
}

export default App;
