import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <Projects/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
