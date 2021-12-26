import './styles/App.css'
import React, {Component} from 'react'
import NavbarMain from './components/Navbar';

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavbarMain/>
      </div>
    );
  }
}

export default App;
