import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Cat from './Cat'

function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
        <h1>Deploying with Netlify</h1>
        <Link to="/cat">See the cat!</Link>
      </header>
      <Route to="/cat" component={Cat}></Route>
      
    </div>
    </Router>
  );
}

export default App;
