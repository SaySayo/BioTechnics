import { Route, Switch } from 'react-router';
import './App.css';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
<<<<<<< HEAD
import Explore from './pages/Explore/Explore';
import HumanEye from "./pages/HumanEye/HumanEye";
import HumanBrain from "./pages/HumanBrain/HumanBrain";
import HumanHeart from "./pages/HumanHeart/HumanHeart";
import Skeleton from './pages/Skeleton/Skeleton';
import PlantCell from './pages/PlantCell/PlantCell';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route exact path={'/signup'} component={Signup} />
        <Route exact path='/explore' component={Explore} />
        <Route exact path='/humaneye' component={HumanEye} />
        <Route exact path='/brain' component={HumanBrain} />
        <Route exact path='/heart' component={HumanHeart} />
        <Route exact path='/skeleton' component={Skeleton} />
        <Route exact path='/plantcell' component={PlantCell} />
      </Switch>
    </Router>

=======

function App() {
  return (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/signup'} component={Signup} />
    </Switch>
    
>>>>>>> 0f356e3ea88803cd08f3222d8ef346519b26c618
  );
}

export default App;
