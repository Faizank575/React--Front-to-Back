import './App.css';
import React,{Component} from 'react';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSortDown,faTimes} from '@fortawesome/free-solid-svg-icons'

import {Provider} from './context.js';
library.add(faSortDown,faTimes)
class App extends Component{
render(){
  return(
    <Provider>
    <div className="App">
      <Header branding="Contact Manger"/>
      <div className="container">
      <Contacts/>
      </div>
    
    </div>
    </Provider>
  )
}
}

export default App;
