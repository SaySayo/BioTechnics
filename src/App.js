import { Route, Switch } from 'react-router';
import './App.css';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';

function App() {
  return (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/signup'} component={Signup} />
    </Switch>
    
  );
}

export default App;
