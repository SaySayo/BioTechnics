import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
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

  );
}

export default App;
