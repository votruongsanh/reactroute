import { fromPairs } from 'lodash';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import Header from './Component/Header/Header';
import DemoAPIClass from './DemoAPI/DemoAPIClass';
import DemoAPIFunction from './DemoAPI/DemoAPIFunction';
import About from './Pages/About/About';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import HomeTemPlate from './Templates/HomeTemPlate';
import LoginTemPlate from './Templates/LoginTemPlate';

//cấu hình chuyển hướng trang trên route
import { createBrowserHistory } from "history";
export const history = createBrowserHistory(); //cho phép điều hướng trang

function App() {
  return (
    <Router history={history}>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <HomeTemPlate path="/home" component={Home} />
          <HomeTemPlate path="/detail/:id" component={Detail} />

          <LoginTemPlate path='/login' exact component={Login} />
          <LoginTemPlate path='/register' exact component={Register} />

          <HomeTemPlate path='/about' exact component={About} />
          <HomeTemPlate path='/demousestate' exact component={UseStateDemo} />
          <HomeTemPlate path='/demouseeffect' exact component={UseEffectDemo} />
          <HomeTemPlate path='/apiclass' exact component={DemoAPIClass} />
          <HomeTemPlate path='/apifunction' exact component={DemoAPIFunction} />

          <HomeTemPlate path='/' exact component={Home} />
          {/* <Route path='/' exact component={Home} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
