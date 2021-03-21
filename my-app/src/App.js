
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TinderBody from './components/TinderBody';
import FooterButton from './components/FooterButton';
import Chats from './components/Chats';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';



function App() {
  



  return (
    <div className="App">
      <BrowserRouter>
      
      
      <Switch>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <PrivateRoute exact path='/'>
        <Header/>
          <TinderBody/>
          <FooterButton/>
        </PrivateRoute>
        <PrivateRoute exact path='/chat'>
        <Header backButton='/'/>
         <Chats/>
        </PrivateRoute>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
