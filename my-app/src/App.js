
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TinderBody from './components/TinderBody';
import FooterButton from './components/FooterButton';
import Chats from './components/Chats';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route exact path='/'>
        <Header/>
          <TinderBody/>
          <FooterButton/>
        </Route>
        <Route exact path='/chat'>
        <Header backButton='/'/>
         <Chats/>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
