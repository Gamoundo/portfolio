import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import Bio from './Bio'
import Code from './Code';
import Tech from './Tech';

function App() {
  return (
    <div className="App">
      <h1> Akil Griffiths</h1>
       <h2> Software Engineer</h2>
       
       
       <h2 className="titles"> Why Code?</h2>
       <Code />
       <h2 className="titles"> Technologies I know</h2>
       <Tech />
       <h2 className="titles">Projects</h2>
       <Projects />
       <h2 className="titles"> More about me</h2>
       <Bio />

    </div>
  );
}

export default App;
