import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" component={Projects}/>
        {/* <Route path="/about" component={About}/> */}
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
